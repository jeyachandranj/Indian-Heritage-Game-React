import { Server } from "socket.io";
import { players } from "./constants/ipl.js";
import { shuffleDeck } from "./utils/shuffleDeck.js";
import { reassignCards } from "./utils/reassignCards.js";
import { decideWinner } from "./utils/decideWinner.js";
import { randomCodeGenerator } from "./utils/randomCodeGenerator.js";
import { addUser, removeUser, getUser, getUsersInRoom } from "./users.js";

const io = new Server({
  cors: {
     origin: "http://localhost:3000", 
  },
});

const PORT = process.env.PORT || 4000;

let cards, n;

io.on("connection", (socket) => {
  socket.on("init", () => {
    console.log("an user connected", socket.id);
  });

  //When client joins the game, server will process the payload sent my client and send back the payload to client
  socket.on("joinGame", ({ requestor, numberOfCards, roomCode }) => {
    const numberOfUsersInRoom = getUsersInRoom(roomCode).length;

    if (numberOfUsersInRoom === 0) {
      cards = shuffleDeck(players);
      n = numberOfCards;
    }
    const { error, newUser } = addUser({
      id: socket.id,
      name: requestor,
      cards: shuffleDeck(players),
      room: roomCode ? roomCode : randomCodeGenerator(6),
      myCards: cards.splice(0, n),
    });
    if (error) {
      return callback(error);
    }

    socket.join(newUser.room);

    if (getUsersInRoom(newUser.room).length === 1) {
      //only when first user joined
      let start = false;
      roomCode = newUser.room;
      io.to(newUser.id).emit("joinGame", {
        requestor,
        numberOfCards,
        roomCode,
        start,
      });
    } else {
      // when both users joined
      let start = true;
      //To first user
      let firstUser = getUsersInRoom(roomCode)[0];
      let firstUserName = getUsersInRoom(roomCode)[0].name;
      io.to(firstUser.id).emit("joinGame", {
        requestor: firstUserName,
        numberOfCards,
        roomCode,
        start,
      });
      //To second user
      io.to(newUser.id).emit("joinGame", {
        requestor,
        numberOfCards: n,
        roomCode,
        start,
      });
    }
    console.log("after join", newUser.room, getUsersInRoom(newUser.room));
  });

  //When client starts the game or click next round

  socket.on("myCards", (gameState) => {
    console.log(gameState.userName, "requested to show his cards");
    const requestor = getUser(socket.id);
     console.log("requestor details", requestor);

    const firstUser = getUsersInRoom(requestor.room)[0];
    const secondUser = getUsersInRoom(requestor.room)[1];
    let prevRoundWinner;
    if (gameState.userName === firstUser.name) {
      prevRoundWinner = "user1";
    } else {
      prevRoundWinner = "user2";
    }
    console.log(gameState.userName, firstUser.name, prevRoundWinner);

    if (firstUser.myCards.length === 0 || secondUser.myCards.length === 0) {
      io.in(requestor.room).emit("myCards", {
        ...gameState,
        gameOver: true,
        winner:
          firstUser.myCards.length === 0 ? secondUser.name : firstUser.name,
      });
      cards = shuffleDeck(players);
      firstUser.myCards = cards.slice(0, n);
      secondUser.myCards = cards.slice(n, n * 2);
    } else {
      io.to(firstUser.id).emit("myCards", {
        ...gameState,
        userName: firstUser.name,
        opponentName: secondUser.name,
        myCards: firstUser.myCards[0],
        opponentCards: [],
        winner: gameState.winner == null ? true : prevRoundWinner === "user1",
        currentAttribute: null,
        gameOver: gameState.gameOver,
        myCardsLeft: firstUser.myCards.length,
        opponentCardsLeft: secondUser.myCards.length,
      });
      io.to(secondUser.id).emit("myCards", {
        ...gameState,
        userName: secondUser.name,
        opponentName: firstUser.name,
        myCards: secondUser.myCards[0],
        opponentCards: [],
        winner: prevRoundWinner === "user2",
        currentAttribute: null,
        gameOver: gameState.gameOver,
        myCardsLeft: secondUser.myCards.length,
        opponentCardsLeft: firstUser.myCards.length,
      });
    }
  });

  //When client chooses an attribute

  socket.on("opponentCards", (gameState) => {
    const requestor = getUser(socket.id);
    console.log(requestor, "requested to show opponent cards");
    const firstUser = getUsersInRoom(requestor.room)[0];
    const secondUser = getUsersInRoom(requestor.room)[1];
    console.log(
      "before reassign -> ",
      firstUser.myCards.length,
      secondUser.myCards.length
    );
    const currentRoundWinner = decideWinner(
      firstUser.myCards[0]["Attributes"],
      secondUser.myCards[0]["Attributes"],
      gameState.currentAttribute
    );
    console.log(
      "attribute clicked",
      gameState.currentAttribute,
      "winner",
      currentRoundWinner,
      currentRoundWinner === "user1",
      currentRoundWinner === "user2"
    );
    io.to(firstUser.id).emit("opponentCards", {
      ...gameState,
      userName: firstUser.name,
      opponentName: secondUser.name,
      myCards: firstUser.myCards[0],
      opponentCards: secondUser.myCards[0],
      winner: currentRoundWinner === "user1",
    });
    io.to(secondUser.id).emit("opponentCards", {
      ...gameState,
      userName: secondUser.name,
      opponentName: firstUser.name,
      myCards: secondUser.myCards[0],
      opponentCards: firstUser.myCards[0],
      winner: currentRoundWinner === "user2",
    });
    const reassignedCards = reassignCards(
      firstUser.myCards,
      secondUser.myCards,
      currentRoundWinner
    );
    firstUser.myCards = reassignedCards.user1Cards;
    secondUser.myCards = reassignedCards.user2Cards;
    console.log(
      "after reassign -> ",
      firstUser.myCards.length,
      secondUser.myCards.length
    );
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.listen(PORT);
