import React from 'react';
import { data } from './data.json';
import "./style.css";

function NotificationComponent(props) {
 
console.log ("props:", props)
  return <span className={props.notifyType}>{props.notificationText}</span>;
  // return <span className={props.notifyType}>{props.children}</span>;


}

export default NotificationComponent;