import React from "react";
import Transaction from "./pages/index.js";
import "./stylesheets/App.scss";

export default class App extends React.Component {
  render(){
    return(
        <div className='test'>
            Hello World !
            <Transaction />
        </div>
    )
  }
}