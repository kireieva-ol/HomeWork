import React from 'react';
// import './Examples.css';

class Task_1_5 extends React.Component {
    constructor(props) {
      super(props)
      this.text = props.text;
    }

    render() {
        return React.createElement(
          "div",
          { title: this.text },
          `Welcome to React`
        );
    }
  
}
  
export default Task_1_5;