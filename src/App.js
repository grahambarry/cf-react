import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "./components/shared/Navbar.js";
import Transaction from "./pages/index.js";
import "./app.scss";

const Step_1 = () => <Transaction />;
const Step_2 = () => <Transaction />;
const Step_3 = () => <Transaction />;

function App() {
  return (
    <Router>
      <div className='body-wrapper'>
        <Navbar />
        
        <Switch>
          <Route exact path="/Transaction_info" component={Step_1} />
          <Route path="/Recipient_info" component={Step_2} />
          <Route path="/Make_payment" component={Step_3} />
        </Switch>
      </div>
    </Router>
  )
}
export default App