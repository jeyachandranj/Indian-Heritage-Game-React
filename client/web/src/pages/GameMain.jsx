import React, { useState,useRef } from "react";
import TopBar from "./TopBar";
import "../pages/RPS.css";
import "../pages/GameMain.css"
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Body = () => {
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  

  return (
    <div ref={scrollRef} style={{ backgroundColor: "#f2f2f2", animation: "fadeIn 1s",overflowY: 'scroll', height: '50rem' }}>
      <TopBar />
      <h1 className="gametitle">Multiple Player Games</h1>
      
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
        
      >
        
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="Cricket.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Cricket Cards
            </CardTitle>
            <Button
              className="btn"
              color="secondary"
              onClick={() => setShowPopup(!showPopup)}
            >
              Rule
            </Button>
            <Link to="/image/1">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  maxHeight: "100%",
                  overflowY: "scroll",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ color: "black" }}>
                    1. Create a room and agree on the number of cards to use.<br></br>
                    2. Each player selects a cricket ability to compare during the game.<br></br>
                    3. Create a room and agree on the number of cards to use.<br></br>
                    4. Each player selects a cricket ability to compare during the game.<br></br>
                    5. Each player draws a card.<br></br>
                    6. Players compare the chosen ability on their cards.<br></br>
                    7. The player with the highest value wins the round and collects all cards.<br></br>
                    8. The game continues until one player has all the cards.<br></br>
                    9. That player wins the game.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="WW.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              WWE Cards
            </CardTitle>
            <Button className="btn" color="secondary" onClick={() => setShowPopup(!showPopup)}
>
              Rule
            </Button>
            <Link to="/image/1">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  maxHeight: "100%",
                  overflowY:"auto",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                <p style={{ color: "black" }}>
                    1. Create a room and agree on the number of cards to use.<br></br>
                    2. Each player selects a  ability to compare during the game.<br></br>
                    3. Each player selects a  ability to compare during the game.<br></br>
                    4. Each player draws a card.<br></br>
                    5. Players compare the chosen ability on their cards.<br></br>
                    6. The player with the highest value and lowest rank wins the round and collects all cards.<br></br>
                    7. The game continues until one player has all the cards.<br></br>
                    8. That player wins the game.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>

        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="RajaRani.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Rummy
            </CardTitle>
            <Button className="btn" color="secondary" onClick={() => setShowPopup(!showPopup)}>
              Rule
            </Button>
            <Link to={`http://localhost:3002?name=${localStorage.getItem("name")}`}>
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  maxHeight: "100%",
                  overflowY: "auto",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                <p style={{ color: "black" }}>
                  1. Setup: There are four players - one police officer (cop) and three thieves (chors).<br></br>
		  2. Objective: The cop must correctly identify one of the thieves.<br></br>
                  3. Initial Concealment: At the start, all players conceal their identities, including the cop.<br></br>
    		  4. Revealing Identity: The cop reveals their identity to all players.<br></br>
    		  5. Identification Round: The cop must then correctly identify one player as the thief.<br></br>
                  6. Guessing: The cop can ask questions or use any strategy to determine who the thief is.<br></br>
		  7. Bluffing: Thieves may try to deceive the cop into thinking they are innocent.<br></br>
                  8. Point System: If the cop correctly identifies the thief, they earn a point. If not, the thief earns a point.<br></br>
		  9. Rotation: After each round, roles may rotate, allowing each player to be the cop.<br></br>
                  8. Fun and Strategy: The game involves bluffing, deduction, and psychology, making it enjoyable for all players.<br></br>               
 </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>
        </div>
        <h1 className="gametitle">Player vs Computer</h1>
        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
          
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="HandCricket.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Hand Cricket
            </CardTitle>
            <Button className="btn" color="secondary" onClick={() => setShowPopup(!showPopup)}>
              Rule
            </Button>
            <Link to="/image/2">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  maxHeight: "100%",
                  overflowY: "scroll",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                  
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>
      

      
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="rock.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Rock Paper Scissors
            </CardTitle>
            <Button className="btn" color="secondary">
              Rule
            </Button>
            <Link to="/image/3">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  overflowY: "scroll",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ color: "black" }}>
                    1. Create a room and agree on the number of cards to use.<br></br>
                    2. Each player selects a cricket ability to compare during the game.<br></br>
                    3. Create a room and agree on the number of cards to use.<br></br>
                    4. Each player selects a cricket ability to compare during the game.<br></br>
                    5. Each player draws a card.<br></br>
                    6. Players compare the chosen ability on their cards.<br></br>
                    7. The player with the highest value wins the round and collects all cards.<br></br>
                    8. The game continues until one player has all the cards.<br></br>
                    9. That player wins the game.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="chess.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Chaturanga
            </CardTitle>
            <Button className="btn" color="secondary">
              Rule
            </Button>
            <Link to="/image/1">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  maxHeight: "100%",
                  overflowY: "scroll",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ color: "black" }}>
                    1. Create a room and agree on the number of cards to use.<br></br>
                    2. Each player selects a cricket ability to compare during the game.<br></br>
                    3. Create a room and agree on the number of cards to use.<br></br>
                    4. Each player selects a cricket ability to compare during the game.<br></br>
                    5. Each player draws a card.<br></br>
                    6. Players compare the chosen ability on their cards.<br></br>
                    7. The player with the highest value wins the round and collects all cards.<br></br>
                    8. The game continues until one player has all the cards.<br></br>
                    9. That player wins the game.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>
        
        </div>
          <h1 className="gametitle">Player vs Player</h1>
        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >

        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="pallanguli.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Pallanguzhi
            </CardTitle>
            <Button className="btn" color="secondary">
              Rule
            </Button>
            <Link to="/image/4">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
          {showPopup && (
            <div
              className="popup-overlay"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="popup-content"
                style={{
                  width: "700px",
                  maxHeight: "100%",
                  overflowY: "scroll",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
                  position: "relative",
                }}
              >
                <h2
                  style={{
                    color: "#ff5733",
                    animation: "rainbow 5s infinite alternate",
                    textAlign: "center",
                  }}
                >
                  Rules
                </h2>
                <div style={{ marginTop: "10px" }}>
                  <p style={{ color: "black" }}>
                    1. Create a room and agree on the number of cards to use.<br></br>
                    2. Each player selects a cricket ability to compare during the game.<br></br>
                    3. Create a room and agree on the number of cards to use.<br></br>
                    4. Each player selects a cricket ability to compare during the game.<br></br>
                    5. Each player draws a card.<br></br>
                    6. Players compare the chosen ability on their cards.<br></br>
                    7. The player with the highest value wins the round and collects all cards.<br></br>
                    8. The game continues until one player has all the cards.<br></br>
                    9. That player wins the game.
                  </p>
                </div>
                <button
                  onClick={() => setShowPopup(false)}
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "20px",
                    zIndex: 1000,
                  }}
                >
                  X
                </button>
              </div>
            </div>
          )}
        </Card>
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="snake.jpg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Snake and Ladder
            </CardTitle>
            <Button className="btn" color="secondary">
              Rule
            </Button>
            <Link to="/image/5">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
        </Card>
        <Card style={{ width: "300px", margin: "10px" }}>
          <CardImg
            className="cardimage"
            top
            width="150px"
            height="200px"
            src="chaupar.jpeg"
            alt="Card image cap"
          />
          <CardBody style={{ marginTop: "10px" }}>
            <CardTitle className="cardtitle" tag="h5">
              Chaupar
            </CardTitle>
            <Button className="btn" color="secondary">
              Rule
            </Button>
            <Link to="/image/5">
              <Button className="btn" style={{ marginLeft: "10px" }}>
                Play
              </Button>
            </Link>
          </CardBody>
        </Card>
        
        </div>
        

        
      
    </div>
  );
};

export default Body;
