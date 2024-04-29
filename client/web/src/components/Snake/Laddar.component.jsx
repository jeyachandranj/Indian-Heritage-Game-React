import React from 'react';
import laddar from "../laddar.png"
import { getCoordinates } from './utils/getCoordinates';
export const Laddar = ({ ladder , boardSize , cellSize }) => {
    return (
        <>
            {ladder.map(({ start, end }, index) => {
                const [ startRow , endRow , startX , startY , endX , endY , angleDegrees , height ] = getCoordinates(start , end , boardSize , cellSize);
                return (
                    <div
                        key={index}
                        className="ladder"
                        style={{
                            left: `${startX - 50}px`,  
                            top: `${startY}px`,   
                            width: '100px',    
                            height: `${height}px`,  
                            transformOrigin: 'top center',  
                            transform: `rotate(${angleDegrees}deg)` 
                        }}
                    >
                        <img src={laddar} alt="Ladder"/>
                        
                    </div>
                );
            })} 
        </>
    )
}