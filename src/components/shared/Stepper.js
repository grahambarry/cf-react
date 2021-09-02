import React from 'react'
import './stepper.scss'
import Step from './Step.js'

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);
  }
  width = function () {
    let width = Math.round(100 / this.props.steps.length)
    if (window.innerWidth < 1000) {
      width = Math.round(100 / this.props.steps.length + 10)
    }
    return Math.round(width) + '%'
  }
  render() { 
    return (
      <ul className="stepper-container">
        <div className="wrapper">
          {this.props.steps.map((step, index) => 
            <Step label={step.label}
                  key={step.label}
                  index={index}
                  width={this.width()}/>
          )}
          <div className="line-background"></div>
        </div>
      </ul>
    )
  }
}