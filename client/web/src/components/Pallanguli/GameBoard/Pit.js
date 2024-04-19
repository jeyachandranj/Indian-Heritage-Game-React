import React from 'react';
import styles from './Pit.module.css';
import Stone from './Stone.js'


function Pit(props) {
  let stones = [];
  for (let i = props.stones; i > 0; i--) {
    stones.push(<Stone key={`Pit-${i}`} />);
  }

  
  return (
    <button className={styles.pit} disabled={!props.isValid} onClick={props.onMove.bind(null, props.id)}>
      {stones}
    </button>
  );
}

export default Pit;