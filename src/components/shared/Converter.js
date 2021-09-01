import React from 'react'
import ConvertInput from './ConvertInput.js'
import './converter.scss'

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className="currency-inputs">
        <ConvertInput from 
                      currencies={ this.props.currencies }
                      value={ this.props.value1 }
                      currency={ this.props.currency1 }
                      emittedValues={this.props.emittedValues}/>
        <ConvertInput to 
                      currencies={ this.props.currencies }
                      value={ this.props.value2 }
                      currency={ this.props.currency2 }
                      emittedValues={this.props.emittedValues}/>
      </div>
    )
  }
}