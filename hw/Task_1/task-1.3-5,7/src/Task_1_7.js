import React from 'react';
import reactDom from 'react-dom';

class Task_1_7 extends React.Component {
    // constructor(props) {
    //   super(props)}

    reRender = () => {
        this.forceUpdate();     
    }

    render() {
        let bgColor = '#';
        for(let i = 0; i < 6; i++) {
            bgColor += Math.floor(Math.random()*16).toString(16);
        }
        
        return (
            <div onClick = {this.reRender}
                 style = { {
                            backgroundColor: bgColor,
                            width: "100px",
                            height: "75px"
                        }} >  </div>
        );
    }
}
  
export default Task_1_7;