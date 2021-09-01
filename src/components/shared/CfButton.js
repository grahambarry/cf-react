import React from 'react'
import './cfButton.scss'

export default class CfButton extends React.Component {
  constructor(props) {
    super(props);
  }
  buttonType () {
    let type = this.props.secondary ? 'secondary' : 'primary'
    return type
  }
  render() { 
    return (
      <div className="cf-button">
        <button className={ this.buttonType() + " button " + this.props.className}
                disabled={this.props.disabled}
                onClick={(event) => this.props.onClick(event)}>
          <div className="label">{ this.props.label }</div>
        </button>
      </div>
    )
  }
}