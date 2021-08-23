import React from 'react';
import MenuItem from './MenuItem.js';
import { data } from './data.json';

class Menu extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        
        
        return (
            <>
                {data.map((item, index) => <MenuItem key={index} link={item.link} text={item.text} />)}
            </>
        )
    }
  
}

export default Menu;