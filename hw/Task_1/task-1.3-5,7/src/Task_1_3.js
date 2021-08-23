import React from 'react';

class Task_1_3 extends React.Component {
  constructor(props) {
    super(props)
  }

   getFullName() {
     let firstName = 'John';
     let lastName = 'Doe';

     return <b>{firstName} {lastName}</b>;
   }

   render() {
    return <p>Hello, { this.getFullName() }</p>;
   }

}

export default Task_1_3;

