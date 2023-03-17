import React from 'react';
import ReactDOM  from 'react-dom';


const heading = React.createElement("h1", {id:"root"},"heading1");

const container = React.createElement("div",{},[heading]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);