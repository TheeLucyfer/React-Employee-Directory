import React from "react";
import "./style.css";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
