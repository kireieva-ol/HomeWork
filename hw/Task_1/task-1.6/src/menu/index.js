import React from 'react';

class Menu extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        
        return (
            <>
            <div> <a href={"#main"}>Главная</a></div> 
            <div> <a href={"#articles"}>Статьи</a></div> 
            <div> <a href={"#reviews"}>Отзывы</a></div> 
            <div> <a href={"#aboutUs"}>О нас</a></div>
            </>
        )
    }
  
}

export default Menu;