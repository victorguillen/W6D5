import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './widget';

document.addEventListener("DOMContentLoaded", () => {
  console.log("this worked");
  const root = document.getElementById("root");
  ReactDOM.render(<Widget/>, root);
});
