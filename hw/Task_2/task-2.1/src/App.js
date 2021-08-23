import React from 'react';
import Bold from './Bold';
import Italic from './Italic.js';
import Underlined from './Underlined.js';
import './App.css';

export default function App (props) {
    return (
        <>
      <div> 
          <Bold>Lorem ipsum dolor sit amet,</Bold> consectetuer adipiscing elit.  
      <Italic> Aenean commodo ligula eget dolor</Italic>. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
       nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
       <Underlined>Donec pede justo, fringilla vel,</Underlined> aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
       Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus
      </div>
      </>
    );
  }
