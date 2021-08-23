import React from 'react';
import PropTypes from 'prop-types';

export default function App(props) {
    return (
      <button onClick={props.logThis}>
        КНОПКА
      </button>
    );
  }


  App.propTypes = {
   type: PropTypes.func.isRequired,
};
