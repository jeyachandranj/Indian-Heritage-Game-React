import React, { useState, useEffect,useRef } from 'react';
import firebase from 'firebase/app';
import 'firebase/database'; 
import "./Bingo.css"
const BingoComponent = () => {
    const [AmiHost, setAmiHost] = useState(false);
    const [Waiting, setWaiting] = useState(false);
    const [TotalPlayers, setTotalPlayers] = useState(0);
    const [ROOMNAME, setRoomName] = useState('');
    const [Status, setStatus] = useState('out');
    const [CurPlayers, setCurPlayers] = useState(0);
    const [MyID, setMyID] = useState(1); // Set initial value to null
    const [playerName, setPlayerName] = useState('Player');
    const PLAYERNAME = 'player';
    var Notingame=false;
    var Bingostrikes = document.getElementsByClassName("str");


    var firebaseConfig = {
        apiKey: "AIzaSyCMRxOaSnssAKN5qozRZG-U4FC1drMigLs",
        authDomain: "bingo-1d016.firebaseapp.com",
        databaseURL: "https://bingo-1d016.firebaseio.com",
        projectId: "bingo-1d016",
        storageBucket: "bingo-1d016.appspot.com",
        messagingSenderId: "166645970662",
        appId: "1:166645970662:web:9a7333358d602467b3ad27",
        measurementId: "G-D2CT46GNJV"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            // Initialize Firebase with the provided config
            firebase.initializeApp(firebaseConfig);
        } else {
            // If Firebase is already initialized, use the existing app
            firebase.app();
        }
        

  
    useEffect(() => {
      init(Join, setupeles, iniplayername);
    }, []);
  
    const init = (Join, setupeles, iniplayername) => {
      const setupInit = async () => {
        await Join(true, true);
        setupeles();
        const ROOMNAME = "";
        for (let i = 0; i < Bingostrikes.length; i++) {
          Bingostrikes[i].style.opacity = 0;
        }
        iniplayername.init();
      };
    
      setupInit();
    };

    
  
    const Name = ({ hide, setPlayerName }) => {
      const [newName, setNewName] = useState('');
    
      const handleNameChange = (event) => {
        setNewName(event.target.value);
      };
    
      const handleNameSubmit = () => {
        setPlayerName(newName);
        // Hide the name input field
        hide();
      };
    
      return (
        <div style={{ zIndex: hide ? -100 : 11 }}>
          <input
            type="text"
            value={newName}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
          <button onClick={handleNameSubmit}>OK</button>
        </div>
      );
    };
  const Shuffle = () => {
    // Add logic for shuffling bingo numbers
  };

  const iamready = () => {
    // Add logic to indicate player is ready
  };

  const sendmessage = () => {
    // Add logic to send chat message
  };

  const Join = (x, y = false) => {
    const jbtn = document.getElementById("jroom");
    const cbtn = document.getElementById("croom");
    const content = document.getElementById("content");
  
    if (y) {
      jbtn.classList.add("act");
      content.innerHTML = (
        <div>
          <input type="text" id="RoomName" placeholder="RoomName" onKeyUp={() => checkRoom(true)} />
          <div className="btflex">
            <button onClick={JoinGame}>Join</button>
          </div>
        </div>
      );
      return;
    }
  
    if (x) {
      jbtn.classList.add("act");
      cbtn.classList.remove("act");
      content.innerHTML = (
        <div>
          <input type="text" id="RoomName" placeholder="RoomName" onKeyUp={() => checkRoom(true)} />
          <div className="btflex">
            <button onClick={JoinGame}>Join</button>
          </div>
        </div>
      );
    } else {
      jbtn.classList.remove("act");
      cbtn.classList.add("act");
      content.innerHTML = (
        <div>
          <input type="text" id="RoomName" placeholder="RoomName" onKeyUp={() => checkRoom()} />
          <div className="btflex">
            <div className="next">Next</div>
            <button onClick={() => Create('RoomName')}>Next</button>
          </div>
        </div>
      );
    }
  };

  async function checkRoom(join = false) {
    if (Status !== "out") {
        return;
    }
    const roomNameInput = document.getElementById("RoomName");
    if (!roomNameInput) {
        return;
    }
    const name = roomNameInput.value;
    roomNameInput.style.borderColor = "white";
    if (name.length < 4) {
        roomNameInput.style.borderColor = "red";
    }
    if (join) {
        roomNameInput.style.borderColor = "red";
    }
    const snapshot = await firebase.database().ref('Bingo/').once('value');
    let ret = false;
    snapshot.forEach((childsnap) => {
        if (childsnap.val().RoomName === name) {
            if (roomNameInput === null) {
                return;
            }
            roomNameInput.style.borderColor = "red";
            if (join && childsnap.val().status === "waiting") {
                roomNameInput.style.borderColor = "#0f0";
            }
            ret = true;
        }
    });
    if (!ret) {
        if (roomNameInput === null) {
            return;
        }
        roomNameInput.style.borderColor = "#0f0";
        if (join) {
            roomNameInput.style.borderColor = "red";
        }
    }
}


  const setnoofplayers = (x, noofplayers, setNoofplayers) => {
    const noofps = document.getElementsByClassName("noofp");
  
    if (noofplayers > 1) {
      noofps[noofplayers - 2].classList.remove("act");
    }
  
    noofps[x - 2].classList.add("act");
    setNoofplayers(x);
  };
  
  
  const setpls = () => {
    return (
      <div>
        <div className="nofm">Number of players</div>
        <div className="btflex">
          <button className="noofp" onClick={() => setnoofplayers(2)}>2</button>
          <button className="noofp" onClick={() => setnoofplayers(3)}>3</button>
          <button className="noofp" onClick={() => setnoofplayers(4)}>4</button>
          <button className="noofp" onClick={() => setnoofplayers(5)}>5</button>
        </div>
        <div className="btflex">
          <div className="next">Next</div>
          <button onClick={() => Create('Number')}>Next</button>
        </div>
      </div>
    );
  };
  
  const Create = (x, name, setNoofplayers, noofplayers) => {
    const content = document.getElementById("content");
  
    if (x === "RoomName") {
      name = document.getElementById("RoomName").value;
      if (name.length < 3 || !name) {
        document.getElementById("RoomName").style.borderColor = "red";
        return;
      }
      content.innerHTML = (
        <div>
          <div className="nofm">Number of players</div>
          <div className="btflex">
            <button className="noofp" onClick={() => setnoofplayers(2)}>2</button>
            <button className="noofp" onClick={() => setnoofplayers(3)}>3</button>
            <button className="noofp" onClick={() => setnoofplayers(4)}>4</button>
            <button className="noofp" onClick={() => setnoofplayers(5)}>5</button>
          </div>
          <div className="btflex">
            <div className="next">Next</div>
            <button onClick={() => Create('Number', name, setNoofplayers, noofplayers)}>Next</button>
          </div>
        </div>
      );
      setnoofplayers(2);
    }
  
    if (x === "Number") {
      if (noofplayers < 2) {
        return;
      }
      content.innerHTML = (
        <div>
          <div className="nofm">Press 'Create' to continue..</div>
          <div className="btflex">
            <button onClick={CreateRoom}>Create</button>
          </div>
        </div>
      );
      TotalPlayers = noofplayers;
    }
  };

  const CreateRoom = async (name, noofplayers, PLAYERNAME, sendmsg, AmiHost, Waiting, ROOMNAME, MyID, Status) => {
    console.log(name, noofplayers);
  
    const timestamp = new Date().getTime();
    const playername = document.getElementById("playername").innerHTML;
    PLAYERNAME = playername;
  
    await firebase.database().ref('Bingo/' + name).set({
      RoomName: name,
      NoOfPlayers: noofplayers,
      timestamp: timestamp,
      status: "waiting",
      cuplayers: 1,
      curplayer: playername
    });
  
    for (let i = 0; i < noofplayers; i++) {
      const player = "Player" + (i + 1);
      if (i !== 0) playername = "Player" + (i + 1);
      const initialised = i === 0 ? true : false;
  
      await firebase.database().ref('Bingo/' + name + "/Players/" + player).set({
        id: i + 1,
        player: playername,
        initialised: initialised,
        myturn: initialised,
        ready: false,
        juststriked: -1,
        win: false,
        count: 25,
        position: "Nil"
      });
    }
  
    sendmsg("Game", "Chat enabled", -1);
    AmiHost = true;
    Waiting = true;
    document.getElementById("waiting").style.zIndex = 11;
    console.log("tet");
    ROOMNAME = name;
    MyID = 1;
    Status = "waiting";
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      let temphtml = "";
      if (Status !== "out") {
        fetchmsgs();
        const snapshot = await firebase.database().ref('Bingo/' + ROOMNAME).once('value');
        const snapshotVal = snapshot.val();
        Status = snapshotVal.status;
        temphtml = snapshotVal.curplayer;
        if (MyTurn) {
          temphtml = "<div class='cg'>Your Turn</div>";
        } else {
          temphtml = snapshotVal.curplayer + "'s turn";
        }
        if (Status === "desiciding" || Status === "gameover" || Status === "GameOver") {
          temphtml = "Waiting...";
        }
        document.getElementById("turn").innerHTML = temphtml;
      }
      if (AmiHost && Waiting) {
        const snap = await firebase.database().ref('Bingo/' + ROOMNAME + "/Players/" + "Player" + TotalPlayers).once('value');
        if (snap.val().initialised) {
          firebase.database().ref('Bingo/' + ROOMNAME).update({
            status: "desiciding"
          });
        }
      }
      if (Waiting) {
        const snap = await firebase.database().ref('Bingo/' + ROOMNAME).once('value');
        if (snap.val().status === "desiciding") {
          Waiting = false;
          Status = "desiciding";
        }
        CurPlayers = snap.val().cuplayers;
        const x = CurPlayers + "/" + TotalPlayers;
        document.getElementById("waitingq").innerHTML = x;
        if (CurPlayers === TotalPlayers) {
          document.getElementById("waiting").style.zIndex = -100;
          document.getElementById("game").style.zIndex = 11;
        }
      }
      if (AmiHost && Status === "desiciding") {
        let ready = true;
        const snap = await firebase.database().ref('Bingo/' + ROOMNAME + "/Players/").once('value');
        snap.forEach((childsnap) => {
          if (!childsnap.val().ready) {
            ready = false;
          }
        });
        if (ready) {
          firebase.database().ref('Bingo/' + ROOMNAME).update({
            status: "started"
          });
        }
      }
      if (Status === "started") {
        getmyturn();
        isGameover();
      }
      if (Status === "gameover") {
        SetMyPos();
        CheckPoses();
      }
      if (Status === "GameOver") {
        SetMyPos();
        console.log("Game Over");
        if (RankAr.length !== TotalPlayers) {
          RankAr = [];
          getNameandRank();
        } else {
          console.log(RankAr);
          Status = "Notingame";
          Notingame = true;
        }
      }
      if (Status === "Notingame") {
        console.log("set");
        if (Notingame) {
          finalsetup();
          Notingame = false;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  async function isGameover() {
    if (!AmiHost) return;
    var count = 0;
    for (let i = 1; i <= TotalPlayers; i++) {
        const snapshot = await firebase.database().ref('Bingo/' + ROOMNAME + "/Players/" + "Player" + i).once('value');
        if (snapshot.val().win) count++;
    }
    if (count > TotalPlayers - 2) {
        await firebase.database().ref('Bingo/' + ROOMNAME).update({
            status: "gameover"
        });
    }
}

  function getposition(x) {
    switch(x) {
        case 1:
            return "First";
        case 2:
            return "Second";
        case 3:
            return "Third";
        case 4:
            return "Fourth";
        case 5:
            return "Fifth";
        case 6:
            return "Sixth";
        default:
            return "";
    }
}

  const FinalSetup = ({ RankAr, MyID, reinit }) => {
    const [fset, setFset] = useState(false);
  
    if (fset) {
      return null;
    }
  
    const players = RankAr.map((rank, index) => {
      if (rank.id === MyID) {
        rank.name = "You";
      }
      return <div key={index} className="result">{rank.name}</div>;
    });
  
    const ranks = RankAr.map((rank, index) => {
      return <div key={index} className="result">{rank.Rank}</div>;
    });
  
    return (
      <div className="box">
        <div className="gameover">GameOver</div>
        <div className="flexbb">
          <div className="box">
            <div className="result m">Player</div>
            {players}
          </div>
          <div className="box">
            <div className="result m">Rank</div>
            {ranks}
          </div>
        </div>
        <button onClick={reinit} className="fbtn">OK</button>
      </div>
    );
  
    setFset(true);
  };
 
  
  const Reinit = () => {
    const reinit = () => {
      window.location.reload();
    };
  
    return (
      <button onClick={reinit}>Reload</button>
    );
  };


  const [MyTurn, setMyTurn] = useState(false);

  useEffect(() => {
    const database = firebase.database();

    const getMyTurn = () => {
        database.ref('Bingo/' + ROOMNAME + "/Players/" + "Player" + MyID).on('value', (snapshot) => {
          setMyTurn(snapshot.val().myturn);
        });
      };
    

    const interval = setInterval(() => {
      if (Status === "started") {
        firebase.database().ref('Bingo/' + ROOMNAME + "/Players/").on('value', (snapshot) => {
          snapshot.forEach((childsnap) => {
            const x = childsnap.val().juststriked;
            if (x !== -1) {
              cmdStrike(x);
            }
          });
        });
      }
    }, 500);

    getMyTurn();

    return () => {
      clearInterval(interval);
    };
  }, [MyID, ROOMNAME, Status]);

  const JoinGame = () => {
    const [roomName, setRoomName] = useState('');
    const [id, setId] = useState(-1);
  
    const handleJoinGame = () => {
      if (document.getElementById("RoomName").style.borderColor === "rgb(0, 255, 0)") {
        firebase.database().ref('Bingo/' + roomName + "/Players/").on('value', (snapshot) => {
          snapshot.forEach((childsnap) => {
            if (childsnap.val().initialised === false && id === -1) {
              setId(childsnap.val().player[childsnap.val().player.length - 1]);
            }
          });
        });
      }
    };
  
    useEffect(() => {
      if (id !== -1) {
        const playername = document.getElementById("playername").innerHTML;
        firebase.database().ref('Bingo/' + roomName + "/Players/" + "Player" + id).update({
          initialised: true,
          player: playername
        });
  
        let curplayers;
        firebase.database().ref('Bingo/' + roomName + "/").on('value', (snapshot) => {
          TotalPlayers = snapshot.val().NoOfPlayers;
          ROOMNAME = roomName;
          Waiting = true;
          Status = "waiting";
          document.getElementById("waiting").style.zIndex = 11;
          curplayers = snapshot.val().cuplayers;
        });
  
        firebase.database().ref("Bingo/" + ROOMNAME + "/").update({
          cuplayers: curplayers + 1
        });
      }
    }, [id, roomName]);
  
    return (
      <div>
        <input
          type="text"
          id="RoomName"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          placeholder="Enter room name"
        />
        <button onClick={handleJoinGame}>Join</button>
      </div>
    );
}

const CheckRoom = ({ join }) => {
    const [name, setName] = useState('');
    const [isValidRoom, setIsValidRoom] = useState(false);
  
    useEffect(() => {
      const checkRoom = async () => {
        if (Status !== "out" || !name) {
          return;
        }
  
        let isValid = false;
        setName(name.trim());
  
        if (name.length < 4) {
          document.getElementById("RoomName").style.borderColor = "red";
        } else {
          document.getElementById("RoomName").style.borderColor = "white";
  
          const snapshot = await firebase.database().ref('Bingo/').once('value');
          snapshot.forEach((childsnap) => {
            if (childsnap.val().RoomName === name) {
              if (join && childsnap.val().status === "waiting") {
                document.getElementById("RoomName").style.borderColor = "#0f0";
                isValid = true;
              } else {
                document.getElementById("RoomName").style.borderColor = "red";
                isValid = true;
              }
            }
          });
  
          if (!isValid) {
            document.getElementById("RoomName").style.borderColor = "#0f0";
          }
        }
  
        setIsValidRoom(isValid);
      };
  
      checkRoom();
    }, [join, name]);
  
    return (
      <input
        type="text"
        id="RoomName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter room name"
        style={{ borderColor: isValidRoom ? "#0f0" : "red" }}
      />
    );
  };

  const IAmReady = ({ ROOMNAME, MyID }) => {
    useEffect(() => {
      const handleReady = async () => {
        await firebase.database().ref('Bingo/' + ROOMNAME + "/Players/" + "Player" + MyID).update({
          ready: true
        });
      };
  
      handleReady();
    }, [ROOMNAME, MyID]);
  
    return null;
  };

  const Setupeles = () => {
    useEffect(() => {
      const setupElements = () => {
        const eles = new Array(25);
        for (let i = 0; i < 25; i++) {
          const element = document.getElementById(`ele${i}`);
          eles[i] = new Element(element, i);
        }
      };
  
      setupElements();
    }, []);
  
    return null; // You can return null or an empty fragment if you don't need to render anything
  };

  const Element = ({ value, index }) => {
    const [striked, setStriked] = useState(false);
  
    const handleStrike = () => {
      setStriked(true);
    };
  
    return (
      <div className="ele" onClick={handleStrike}>
        <div className="absele" style={{ cursor: 'pointer' }}>
          {value}
        </div>
        {striked && <div className="strike"></div>}
      </div>
    );
  };

  
const Strike = ({ x, MyTurn, ROOMNAME, MyID, UpdateTurn }) => {
    const handleStrike = () => {
      if (MyTurn) {
        // Check if the cell is already striked
        if (getbyvalue(x).striked) return;
  
        // Update the Firebase database with the just striked value
        firebase.database().ref('Bingo/' + ROOMNAME + "/Players/" + "Player" + MyID).update({
          juststriked: x
        });
  
        // Update the turn after striking
        UpdateTurn();
      }
    };
  
    return (
      <div className="absele" onClick={handleStrike}>
        {x}
      </div>
    );
  };

  const cmdStrike = (x, getbyvalue, iwon) => {
    // Check if bingo has been achieved before striking
    if (checkBingo() === 5) {
      return;
    }
  
    // Check if the cell is already striked
    if (getbyvalue(x).striked) {
      return;
    }
  
    // Strike the cell
    getbyvalue(x).strike();
  
    // Check if bingo is achieved after striking
    const win = checkBingo();
    if (win === 5) {
      iwon();
    }
  };

  const getbyvalue = (x, eles) => {
    for (let i = 0; i < 25; i++) {
      if (eles[i].value === x) {
        return eles[i];
      }
    }
    return -1;
  };

  const shuffle = (eles, Status) => {
    if (Status === "started") {
      return;
    }
  
    for (let i = 0; i < 25; i++) {
      const index = Math.floor(Math.random() * 25);
      const tempval = eles[index].value;
      const tempival = eles[i].value;
      eles[index].setnodevalueas(tempival);
      eles[i].setnodevalueas(tempval);
    }
  };

  const checkBingo = (eles, Bingostrikes) => {
    let ret = 0;
  
    // Check rows
    for (let i = 0; i < 25; i += 5) {
      let temp = 0;
      for (let j = i; j < i + 5; j++) {
        if (eles[j].striked) {
          temp++;
        }
      }
      if (temp === 5) {
        ret++;
      }
    }
  
    // Check columns
    for (let i = 0; i < 5; i++) {
      let temp = 0;
      for (let j = i; j < 25; j += 5) {
        if (eles[j].striked) {
          temp++;
        }
      }
      if (temp === 5) {
        ret++;
      }
    }
  
    // Check diagonals
    let temp = 0;
    for (let i = 0; i < 25; i += 6) {
      if (eles[i].striked) {
        temp++;
      }
    }
    if (temp === 5) {
      ret++;
    }
  
    temp = 0;
    for (let i = 4; i <= 20; i += 4) {
      if (eles[i].striked) {
        temp++;
      }
    }
    if (temp === 5) {
      ret++;
    }
  
    // Update Bingostrikes
    for (let i = 0; i < ret; i++) {
      Bingostrikes[i].style.opacity = 1;
    }
  
    return ret;
  };
  
  
  const UpdateTurn = async (ROOMNAME, TotalPlayers, MyID, forced = false) => {
    let tempup = [];
    await firebase.database().ref(`Bingo/${ROOMNAME}/Players/`).once('value', (snapshot) => {
      tempup = Object.values(snapshot.val() || {});
    });
  
    let index;
    for (let i = 0; i < 2 * tempup.length; i++) {
      const j = i % tempup.length;
      if (tempup[j].id === MyID) {
        index = j;
        break;
      }
    }
  
    for (let i = index + 1; i < 2 * tempup.length; i++) {
      const j = i % tempup.length;
      if (!tempup[j].win) {
        index = j;
        break;
      }
    }
  
    const updates = [
      firebase.database().ref(`Bingo/${ROOMNAME}/Players/Player${MyID}`).update({ myturn: false }),
      firebase.database().ref(`Bingo/${ROOMNAME}`).update({ curplayer: tempup[index].player }),
      firebase.database().ref(`Bingo/${ROOMNAME}/Players/Player${tempup[index].id}`).update({ myturn: true })
    ];
  
    if (forced) {
      for (let i = 1; i <= TotalPlayers; i++) {
        updates.push(firebase.database().ref(`Bingo/${ROOMNAME}/Players/Player${i}`).update({ myturn: false }));
      }
    }
  
    await Promise.all(updates);
  };

  const Iwon = async (ROOMNAME, MyID, eles) => {
    let count = 0;
    let tempposition = "Nil";
    
    for (let i = 0; i < 25; i++) {
      if (eles[i].striked) {
        count++;
      }
    }
  
    await firebase.database().ref(`Bingo/${ROOMNAME}/Players/Player${MyID}`).update({
      myturn: false,
      position: tempposition,
      win: true,
      count: count
    });
  
    await UpdateTurn(ROOMNAME, TotalPlayers, MyID, true); // Call UpdateTurn with forced set to true
    console.log(count);
  };

  const IsGameover = async (AmiHost, ROOMNAME, TotalPlayers) => {
    if (!AmiHost) return;
  
    let count = 0;
    for (let i = 1; i <= TotalPlayers; i++) {
      await firebase.database().ref(`Bingo/${ROOMNAME}/Players/Player${i}`).once('value', (snapshot) => {
        if (snapshot.val().win) count++;
      });
    }
  
    if (count > TotalPlayers - 2) {
      await firebase.database().ref(`Bingo/${ROOMNAME}`).update({ status: "gameover" });
    }
  };


  const SetMyPos = ({ ROOMNAME, MyID }) => {
    const [tempPosition, setTempPosition] = useState("Last");
  
    useEffect(() => {
      const fetchPlayerData = async () => {
        let myCount;
        let tempUp = [];
        await firebase.database().ref(`Bingo/${ROOMNAME}/Players/`).once('value', (snapshot) => {
          snapshot.forEach((childsnap) => {
            tempUp.push(childsnap.val().count);
            if (childsnap.val().id === MyID) {
              myCount = childsnap.val().count;
            }
          });
        });
  
        let j = 0,
          pre = -1;
        tempUp.sort((a, b) => a - b);
        for (let i = 0; i < tempUp.length && myCount !== pre; i++) {
          if (tempUp[i] !== pre) {
            j++;
            pre = tempUp[i];
          }
        }
  
        let newPosition = getposition(j);
        if (myCount === 25) {
          newPosition = "Last";
        }
  
        await firebase.database().ref(`Bingo/${ROOMNAME}/Players/Player${MyID}`).update({
          win: true,
          position: newPosition
        });
        setTempPosition(newPosition);
      };
  
      fetchPlayerData();
    }, [ROOMNAME, MyID]);
  
    return null; // or any UI component you wish to render
  };

  const CheckPoses = ({ AmiHost, ROOMNAME }) => {
    useEffect(() => {
      const checkPoses = async () => {
        if (!AmiHost) return;
  
        let allSet = true;
        await firebase.database().ref(`Bingo/${ROOMNAME}/Players/`).once('value', (snapshot) => {
          snapshot.forEach((childsnap) => {
            if (childsnap.val().position === "Nil") {
              console.log("ERROR");
              allSet = false;
              return;
            }
          });
        });
  
        if (allSet) {
          console.log("All set");
          await firebase.database().ref(`Bingo/${ROOMNAME}`).update({
            status: "GameOver"
          });
        }
      };
  
      checkPoses();
    }, [AmiHost, ROOMNAME]);
  
    return null; // or any UI component you wish to render
  };


  const getNameandRank = async (ROOMNAME, SetMyPos) => {
    const RankAr = [];
    const GONameandRank = [];
  
    await SetMyPos(); // Call SetMyPos before getting other player positions
  
    await firebase.database().ref(`Bingo/${ROOMNAME}/Players/`).once('value', (snapshot) => {
      snapshot.forEach((childsnap) => {
        if (childsnap.val().position === "Nil") {
          return;
        }
        GONameandRank.push(childsnap.val());
      });
    });
  
    GONameandRank.sort((a, b) => a.count - b.count);
  
    for (let i = 0; i < GONameandRank.length; i++) {
      if (GONameandRank[i].position === "Nil") {
        return [];
      }
      RankAr.push({ "name": GONameandRank[i].player, "Rank": GONameandRank[i].position, "id": GONameandRank[i].id });
    }
  
    return RankAr;
  };


  const sendMessage = () => {
    const msg = document.getElementById("msg").value;
    
    if (!msg.length) {
      console.log("error");
      return;
    }
  
    if (msg.length > 2) {
      // Assuming PLAYERNAME, MyID, and sendmsg are defined somewhere
      sendmsg(PLAYERNAME, msg, MyID);
    }
  
    document.getElementById("msg").value = "";
  };

  async function sendmsg(name,msg,id){
    var tep=new Date;
    id=Number(id);
    firebase.database().ref('Bingo/'+ROOMNAME+'/Msg/'+tep.getTime()).set({
        name:name,
        msg:msg,
        id:id
    });
}

const fetchmsgs = () => {
    const [initialMsgLength, setInitialMsgLength] = useState(-1);
    const [curMsgs, setCurMsgs] = useState([]);
  
    useEffect(() => {
      const fetchMsgs = async () => {
        try {
          const msgsSnapshot = await firebase.database().ref(`Bingo/${ROOMNAME}/Msg`).once('value');
          const msgsData = msgsSnapshot.val();
          const msgsArray = msgsData ? Object.values(msgsData) : [];
  
          setCurMsgs(msgsArray);
          if (msgsArray.length !== initialMsgLength) {
            // Perform any additional actions when the message length changes
            setInitialMsgLength(msgsArray.length);
          }
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };
  
      fetchMsgs();
  
      // Cleanup function to unsubscribe from Firebase listener
      return () => firebase.database().ref(`Bingo/${ROOMNAME}/Msg`).off('value');
    }, [initialMsgLength]); // Run effect when initialMsgLength changes
  
    return (
      <div>
        {/* Render messages here using curMsgs state */}
      </div>
    );
  };

  const makehtmlosmsgs = () => {
    const [initialMsgLength, setInitialMsgLength] = useState(-1);
    const [curMsgs, setCurMsgs] = useState([]);
  
    useEffect(() => {
      const fetchMsgs = async () => {
        try {
          const msgsSnapshot = await firebase.database().ref(`Bingo/${ROOMNAME}/Msg`).once('value');
          const msgsData = msgsSnapshot.val();
          const msgsArray = msgsData ? Object.values(msgsData) : [];
  
          setCurMsgs(msgsArray);
          if (msgsArray.length !== initialMsgLength) {
            setInitialMsgLength(msgsArray.length);
          }
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };
  
      fetchMsgs();
  
      return () => firebase.database().ref(`Bingo/${ROOMNAME}/Msg`).off('value');
    }, [initialMsgLength]);
  
    return (
      <div>
        <div id="chats">
          {curMsgs.map((msg, index) => (
            <div key={index}>
              {Number(MyID) === Number(msg.id) ? (
                <>
                  <div className="cname m">You</div>
                  <div className="msg m">{msg.msg}</div>
                </>
              ) : (
                <>
                  <div className="cname">{msg.name}</div>
                  <div className="msg">{msg.msg}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const eles = useRef([]);

  useEffect(() => {
    setupeles();
  }, []);

  function setupeles() {
    for (let i = 0; i < 25; i++) {
      eles.current[i] = document.getElementById(`ele${i}`);
      // Manipulate the elements here as needed
    }
  }

  const [fset, setFset] = useState(false);
  const RankAr = []; // Assuming you have some array of player ranks
  useEffect(() => {
    finalsetup();
  }, []); // Call finalsetup once when the component mounts

  const finalsetup = () => {
    if (fset) {
      return;
    }

    const fscreen = document.getElementById("fscreen");
    fscreen.style.zIndex = 20;

    let temphtml = `<div class="box">
                      <div class="gameover">GameOver</div>
                      <div class="flexbb">
                        <div class="box">`;
    let players = "<div class='result m'>Player</div>";
    let Ranks = "<div class='result m'>Rank</div>";

    if (RankAr.length !== 0) {
      for (let i = 0; i < RankAr.length; i++) {
        if (RankAr[i].id === MyID) RankAr[i].name = "You";
        players += `<div class="result">${RankAr[i].name}</div>`;
        Ranks += `<div class="result">${RankAr[i].Rank}</div>`;
      }
    }

    temphtml += players + `</div><div class="box">` + Ranks + `</div></div><button onclick="reinit()" class="fbtn">OK</button></div>`;
    fscreen.innerHTML = temphtml;
    setFset(true);
  };

  useEffect(() => {
    // Fetch myTurn from Firebase when component mounts
    getmyturn();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  async function getmyturn() {
    try {
      const snapshot = await firebase. database.ref('Bingo/' + ROOMNAME + "/Players/" + "Player" + MyID).on('value', (snapshot) => {
        setMyTurn(snapshot.val().myturn);
      });
      if (snapshot.exists()) {
        const myTurnValue = snapshot.val().myturn;
        setMyTurn(myTurnValue);
      }
    } catch (error) {
      console.error('Error fetching my turn:', error);
    }
  }

  var iniplayername = () => {
    const key = 'https://bingobycne.web.app-bingoplayer';
    const [name, setName] = useState('player'); // Initialize with default value 'player'
  
    useEffect(() => {
      const storedName = localStorage.getItem(key);
      if (storedName) {
        setName(storedName);
      }
    }, []);
  
    const handleNameChange = (e) => {
      const newName = e.target.value;
      setName(newName);
      localStorage.setItem(key, newName);
    };
  
    return (
      <div>
        <div id="playername">{name}</div>
        <input
          type="text"
          id="playernameenter"
          value={name}
          onChange={handleNameChange}
        />
      </div>
    );
  };

  return (
    <div>
      <div className="mroom" id="EditName">
        <input type="text" id="playernameenter" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
        <button onClick={() => Name(true)}>OK</button>
      </div>
      <div id="game">
        {/* Your game content */}
      </div>
      <div className="mroom" id="waiting">
        {/* Waiting room content */}
      </div>
      <div className="mroom">
        <div id="playername" onClick={() => Name(false)}>Player</div>
        <div className="box">
          <h2>Bingo</h2>
          <div className="radiocj">
            <div className="ele" id="croom" onClick={() => Join(false)}>Create a room</div>
            <div className="ele" id="jroom" onClick={() => Join(true)}>Join a room</div>
          </div>
          <div id="content">
            <input type="text" id="name" placeholder="RoomName" />
            <button onClick={JoinGame}>Join</button>
          </div>
        </div>
      </div>
      <div className="mroom" id="fscreen">
        {/* Game over screen content */}
      </div>
    </div>
  );
};

export default BingoComponent;
