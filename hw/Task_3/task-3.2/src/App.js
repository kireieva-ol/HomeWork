import React from 'react';
import PropTypes from 'prop-types';
import NotificationComponent from "./NotificationComponent.js";
import { data } from './data.json';

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

NotificationComponent.propTypes = {
  notifyType: PropTypes.string,
  notificationText: PropTypes.string,
};

NotificationComponent.defaultProps = {
  notifyType: null,
  notificationText: null,
};

export default App;



