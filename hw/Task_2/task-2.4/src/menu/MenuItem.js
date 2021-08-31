import React from 'react';

export default function MenuItem(props) {
    
    
        return (
          <>
        <a href={props.link}>{props.text}</a>
        <br/>
          </>);
      }