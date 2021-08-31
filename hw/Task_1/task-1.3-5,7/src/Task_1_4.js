import React from 'react';
// import './Examples.css';

class Task_1_4 extends React.Component {
    constructor(props) {
      super(props)
    }
  
     getFullName() {
       let firstName = 'John';
       let lastName = 'Doe';
  
       return <u><i>{firstName} {lastName}</i></u>;
     }
  
     render() {
      return <p>Good bye, { this.getFullName() }</p>;
     }
  
  }
  
  export default Task_1_4;