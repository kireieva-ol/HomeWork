import React from 'react';
import { data } from './data.json';

class Page extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
        console.log('data:', data)
        return (
            <>        
            {data.map(
                (item, index) => (<div key={index} id={item.id}>{item.content}</div>)
            )}
            </>
        )
    }
  
}

export default Page;