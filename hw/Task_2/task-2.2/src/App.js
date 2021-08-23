import React from 'react';
import NotificationComponent from "./NotificationComponent.js";
import { data } from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="common-notification">
              {data.map((item, index) => <NotificationComponent key={index} notifyType={item.notifyType} notificationText={item.notificationText} />)}
          </div>

    );
  }
}

export default App;



