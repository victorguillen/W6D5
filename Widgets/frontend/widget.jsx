import React from 'react';
import ReactDOM from 'react-dom';

import Tab from './tab';

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  tabData() {
    return [
      {
        title: "Tab Kevin",
        content: "I am Kevin"
      },
      {
        title: "Tab Victor",
        content: "I have a cat"
      },
      {
        title: "Tab App Academy",
        content: "We're half way there!"
      }
    ];
  }

  render() {
    return (
      <Tab tabs={this.tabData()}/>
    );
  }
}

export default Widget;
