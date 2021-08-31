import React from 'react'
import memoize from 'lodash/memoize'
import './stepper.scss'
import Step from './Step.js'

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);
  }
  width = function () {
    let width = Math.abs(100 / this.props.steps.length)
    if (window.innerWidth < 1000) {
      width = Math.abs(100 / this.steps.length + 10)
    }
    return Math.round(width) + '%'
  }
  stepWidth = memoize(this.width)
  render() { 
    return (
      <ul className="stepper-container">
        {this.props.steps.map((step, index) => 
          <Step label={step.label}
                key={step.label}
                index={index}
                width={this.stepWidth()}/>
        )}
        <div className="line-background">
        </div>
      </ul>
    )
  }
}