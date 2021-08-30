import React from "react";
import Navbar from "./components/shared/Navbar.js";
import Transaction from "./pages/index.js";
import "./App.scss";

export default class App extends React.Component {
  render(){
    return(
      <div className='body-wrapper'>
        <Navbar />
        <Transaction />
      </div>
    )
  }
}