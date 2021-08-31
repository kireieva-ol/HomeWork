import React from 'react';
import Menu from "./menu";
import Page from "./page";

class App extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <>
            <Menu />
            <Page />
            </>
        )
    }
  
}

export default App;