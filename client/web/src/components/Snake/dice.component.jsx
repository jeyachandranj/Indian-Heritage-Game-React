import { useState } from "react";
import React from "react";
export const Dice = ({ game , handleDice , currentPlayer}) => {
    const rotations = {
        1 : { x : 0 , y : -360} ,
        2 : { x : -180 , y : -360} ,
        3 : { x : 270 , y : 180} ,
        4 : { x : 90 , y : 90} ,
        5 : { x : -180 , y : 270} ,
        6 : { x : 0 , y : -90}
      }
    const [roll , setrolling] = useState({ x : 0 , y : 0});

    async function rollDice(){
        return new Promise(async (resolve , reject) => {
          let num = game.rollDice();
          setrolling({ x : 360 , y : 360 })
          await new Promise(resolve => setTimeout(resolve , 750));
          setrolling( {x : rotations[num].x  , y : rotations[num].y })
          await new Promise(resolve => setTimeout(resolve , 750));
          resolve(num);
        })
      }

    async function getDiceNumber(){
        let number = await rollDice();
        handleDice(number);
    }
    
    return (
        <div className="dice" onClick={getDiceNumber}>
            <div className="cube" style={{ transform : `rotateX(${roll.x}deg) rotateY(${roll.y}deg)`}}>
              <div className="front" style={{ background : currentPlayer.color}}>
                  <span className="dot"></span>
              </div>
              <div className="back" style={{ background : currentPlayer.color}}>
              <span className="dot"></span>
              <span className="dot"></span>
              </div>
              <div className="top" style={{ background : currentPlayer.color}}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
                
              </div>
              <div className="bottom" style={{ background : currentPlayer.color}}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              </div>
              <div className="left" style={{ background : currentPlayer.color}}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
                
              </div>
              <div className="right" style={{ background : currentPlayer.color}}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              </div>
            </div>
          </div>
    )
}