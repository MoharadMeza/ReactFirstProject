
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import App_center from './Components/App_center/App_center.component'
import App from './Components/App_center/App.component'
import App3 from '../src/app3/app3.component';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App_center/>
    <App3/>
 
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
