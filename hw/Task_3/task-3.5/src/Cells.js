import React, { useState } from 'react';
import './style.css';

const Cells = (props) => {
  const letter = ["A", "B", "C", "D", "E", "F", "G", "H"];
  let coordX = letter[props.row];
  let coordY = 8 - props.col;

  const [isShown, setIsShown] = useState(false);
  
  return <div class={props.color} 
            onClick={() => 
                    alert (`${coordX}:${coordY}`)}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
              {isShown && (
              <div>
                  {coordX}:{coordY}
              </div>
                )}
            </div>
            
};

export default Cells;
