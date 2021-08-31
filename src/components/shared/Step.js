import React from 'react'
import './step.scss'
import memoize from 'lodash/memoize'
import { NavLink } from "react-router-dom";

class Step extends React.Component {
  constructor(props) {
    super(props);
  }
  number = function () {
    let number = `${"Step " + Math.abs(this.props.index + 1)}`
    return number
  }
  path = function () {
    let path = `${"/" + (this.props.label).replace(/ /g,"_")}`
    return path
  }
  stepNumber = memoize(this.number)
  formatPath = memoize(this.path)
  render() { 
    return (
      <li style={{ width: this.props.width, minWidth: this.props.width }} className="step-item">
        <NavLink activeClassName='is-active' to={this.formatPath()} className="nav-link">
          {this.stepNumber()}
          <span>{this.props.label}</span>
          <div className="active-line"></div>
        </NavLink>
      </li>
    )
  }
}

export default Step
