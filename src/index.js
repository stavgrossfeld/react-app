import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./pages/app"


var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <p>Hello stav!</p>
        <App/>
    </div>,
    destination
);