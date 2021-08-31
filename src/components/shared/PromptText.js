import React from 'react'
import './promptText.scss'

export default class Stepper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className="column">
        <div className="line-1">{ this.props.promptA }</div>
        <div className="line-2">{ this.props.promptB }</div>
      </div>
    )
  }
}