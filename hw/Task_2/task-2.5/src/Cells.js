import React from 'react';
import './style.css';

const Cells = (props) => {
  const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let coordX = letter[props.row];
  let coordY = 8 - props.col;

  return <div class={props.color} onClick={() => 
            alert (`${coordX}:${coordY}`)}></div>
};

export default Cells;
