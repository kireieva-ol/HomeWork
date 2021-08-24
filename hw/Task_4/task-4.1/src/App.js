import React, {useState} from "react";
import './App.css';

const myArray = [267, 72, 445, 192, 373, 649, 792, 466, 612, 848, 372, 153, 280, 694, 263, 860, 820, 687, 567, 820,];
// const myArray = [4, 8, 15, 16, 23, 42];

function App() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * myArray.length));

  return (
    
    <div className="App">
      <button onClick={() => setRandomNumber(Math.floor(Math.random() * myArray.length))}>
      Выбрать случайное значение из массива
      </button>
      
      <div className="randomNumber">{myArray[randomNumber]}</div>
    </div>
  );
}


export default App;