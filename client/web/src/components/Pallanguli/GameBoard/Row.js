import React, { useContext} from 'react';
import GameContext from '../../Store/game-context';
import Pit from './Pit';
import styles from './Row.module.css';

function Row(props) {
    const gameCtx = useContext(GameContext);
    const moveStoneHandler = (id)=> {
      gameCtx.moveStone(id);
    };

    

    const pits = props.stones.map((pit, index) => (
     <Pit stones={pit} key={index} id={{row: props.row, pit: index}} isValid={props.playerTurn} onMove={moveStoneHandler}/>
    ));

    // reverse the row one flex-direction to ensure propper game flow
    const classes = `${styles.row} ${props.row === 1 ? styles.reverse : ''}`
    return (
      <div className={classes} id={props.row} >
        {pits}
      </div>
    );
}

export default Row;