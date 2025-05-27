import React, { useState } from "react";
import TopBar from "./TopBar";
import "../pages/RPS.css";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const Body = () => {
  const [activePopup, setActivePopup] = useState(null);

  const gameData = [
    {
      id: 'cricket',
      title: 'Cricket Cards',
      image: 'Cricket.jpg',
      route: '/image/1',
      rules: [
        'Create a room and agree on the number of cards to use.',
        'Each player selects a cricket ability to compare during the game.',
        'Each player draws a card.',
        'Players compare the chosen ability on their cards.',
        'The player with the highest value wins the round and collects all cards.',
        'The game continues until one player has all the cards.',
        'That player wins the game.'
      ]
    },
   
    {
      id: 'snake',
      title: 'Snake and Ladder',
      image: 'snake.jpg',
      route: '/image/5',
      rules: [
        'Roll the dice to move your token forward.',
        'If you land on a ladder, climb up to the higher square.',
        'If you land on a snake\'s head, slide down to its tail.',
        'The first player to reach square 100 wins.',
        'You must roll the exact number to land on 100.',
        'Take turns in clockwise order.',
        'No strategy needed - it\'s all about luck!'
      ]
    },
    {
      id: 'pallanguli',
      title: 'Pallanguli',
      image: 'pallanguli.jpg',
      route: '/image/4',
      rules: [
        'Traditional Tamil board game played with seeds or shells.',
        'Each player controls 7 holes on their side of the board.',
        'Distribute seeds counter-clockwise from any hole.',
        'Capture opponent\'s seeds when the last seed lands in an empty hole.',
        'The game ends when one side has no seeds.',
        'Count remaining seeds to determine the winner.',
        'Strategy involves planning moves several turns ahead.'
      ]
    },
    {
      id: 'handcricket',
      title: 'Hand Cricket',
      image: 'HandCricket.jpg',
      route: '/image/2',
      rules: [
        'Two players show fingers simultaneously (0-6).',
        'Batting player scores the number they show.',
        'If both show the same number, the batsman is out.',
        'Players take turns batting and bowling.',
        'Set a target score before switching roles.',
        'The player who scores more runs wins.',
        'Popular playground game requiring no equipment!'
      ]
    }
  ];

  const togglePopup = (gameId) => {
    setActivePopup(activePopup === gameId ? null : gameId);
  };

  return (
    <div className="game-container">
      <TopBar />
      
      <div className="cards-grid">
        {gameData.map((game) => (
          <Card key={game.id} className="game-card">
            <div className="card-image-container">
              <CardImg
                className="card-image"
                src={game.image}
                alt={`${game.title} game`}
              />
              <div className="card-overlay">
                <div className="card-overlay-content">
                  <h3>{game.title}</h3>
                </div>
              </div>
            </div>
            
            <CardBody className="card-body">
              <CardTitle className="card-title" tag="h5">
                {game.title}
              </CardTitle>
              
              <div className="button-container">
                <Button
                  className="rule-btn"
                  color="secondary"
                  onClick={() => togglePopup(game.id)}
                >
                  Rules
                </Button>
                <Link to={game.route}>
                  <Button className="play-btn">
                    Play Now
                  </Button>
                </Link>
              </div>
            </CardBody>

            {activePopup === game.id && (
              <div className="popup-overlay" onClick={() => setActivePopup(null)}>
                <div 
                  className="popup-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="close-btn"
                    onClick={() => setActivePopup(null)}
                    aria-label="Close popup"
                  >
                    ×
                  </button>
                  
                  <h2 className="popup-title">
                    {game.title} Rules
                  </h2>
                  
                  <div className="rules-container">
                    <ol className="rules-list">
                      {game.rules.map((rule, index) => (
                        <li key={index} className="rule-item">
                          {rule}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      <style jsx>{`
        .game-container {
          min-height: 100vh;
          padding-bottom: 2rem;
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            padding: 1rem;
          }
        }

        .game-card {
          border: none;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .game-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .card-image-container {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .game-card:hover .card-image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .game-card:hover .card-overlay {
          opacity: 1;
        }

        .card-overlay-content h3 {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          text-align: center;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .card-body {
          padding: 1.5rem;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
          text-align: center;
        }

        .button-container {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }

        .rule-btn, .play-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .rule-btn {
          background: linear-gradient(45deg, #6c757d, #5a6268);
          color: white;
        }

        .rule-btn:hover {
          background: linear-gradient(45deg, #5a6268, #495057);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(108, 117, 125, 0.4);
        }

        .play-btn {
          background: linear-gradient(45deg, #007bff, #0056b3);
          color: white;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .play-btn:hover {
          background: linear-gradient(45deg, #0056b3, #004085);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 123, 255, 0.4);
          color: white;
          text-decoration: none;
        }

        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          animation: popupFadeIn 0.3s ease;
        }

        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .popup-content {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          animation: popupSlideIn 0.3s ease;
        }

        @keyframes popupSlideIn {
          from { 
            opacity: 0; 
            transform: translateY(-30px) scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }

        .close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: none;
          border: none;
          font-size: 2rem;
          color: #666;
          cursor: pointer;
          transition: color 0.3s ease;
          line-height: 1;
        }

        .close-btn:hover {
          color: #e74c3c;
        }

        .popup-title {
          color: #2c3e50;
          text-align: center;
          margin-bottom: 1.5rem;
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(45deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .rules-container {
          margin-top: 1rem;
        }

        .rules-list {
          padding-left: 1.2rem;
          line-height: 1.8;
        }

        .rule-item {
          margin-bottom: 0.8rem;
          color: #444;
          font-size: 1rem;
          position: relative;
        }

        .rule-item::marker {
          color: #667eea;
          font-weight: bold;
        }

        /* Responsive Design */
        @media (max-width: 480px) {
          .popup-content {
            margin: 1rem;
            padding: 1.5rem;
          }
          
          .popup-title {
            font-size: 1.5rem;
          }
          
          .button-container {
            flex-direction: column;
          }
          
          .card-body {
            padding: 1rem;
          }
        }

        /* Scrollbar Styling */
        .popup-content::-webkit-scrollbar {
          width: 8px;
        }

        .popup-content::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .popup-content::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 10px;
        }

        .popup-content::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #5a67d8, #6b46c1);
        }
      `}</style>
    </div>
  );
};

export default Body;