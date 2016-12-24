import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './widget';

class Root extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Widget />
    );
  }
}

export default Root;
