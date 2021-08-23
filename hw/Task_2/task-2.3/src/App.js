import React from 'react';
import './App.css';

export default function App(props) {
    return (
      <button onClick={props.logThis}>
        КНОПКА
      </button>
    );
  }
