import React from 'react';
import './style.css';
import Cells from './Cells.js';

class App extends React.Component {
    constructor(props) {
      super(props)
    }
          
    render() {
        let result = [];
        for(let i = 0; i < 8; i++) {
          for(let j = 0; j < 8; j++) {
            let color = ((i+j) % 2 == 0) ? "black" : "white";
          
            result.push(<Cells col={i} row={j} color={color}/>)
          }
          
         } 

      return (
          <div id='chessboard'>  
            {result}
          </div>
    
        );
    }
  }
  
export default App;

