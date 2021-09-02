import React from 'react'
import CfInput from './CfInput.js'
import CurrencySelect from './CurrencySelect.js'
import SymbolLUT from '../json/currency_symbols.json'
import './convertInput.scss'
import {Validators} from "../utilities/Validator";

export default class ConvertInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myCurrency: this.props.currency,
      myValue: this.props.value,
      mySymbol: SymbolLUT[this.props.currency].symbol_native,
    }
  }
  label() {
    let text = 'CURRENCY'
    this.props.from ? text = 'YOU SEND' : text = 'RECEIVER GETS'
    return text
  }
  fromTo() {
    let status = this.props.from ? 'from' : 'to'
    return status
  }
  handleChange = (key) => (value) => {
    this.handleInputs(value)
  };
  handleSelect = (key) => {
    this.setState({myCurrency: key})
    let sym = ''
    if (SymbolLUT[key].symbol_native != undefined) sym = SymbolLUT[key].symbol_native
    this.setState({mySymbol: sym})
    this.handleInputs()
  }
  handleInputs = (value) => {
    let inputValues = {fromTo: this.fromTo(), currency: this.state.myCurrency, value: value}
    this.props.emittedValues(inputValues)
  }
  render() { 
    return (
      <div className={ "cs-container " + this.fromTo() }>
        <div className="input-col">
          <div className="label">{ this.label() }</div>
          <div className="input-row">
            <div className="symbol">
              { this.state.mySymbol }
            </div>
            <CfInput
                value={ this.props.value }
                type='text'
                placeholder='Enter text here...'
                autoFocus="autofocus"
                validators={[
                    {check: Validators.required, message: 'This field is required'}
                ]}
                onChange={this.handleChange('text')}/>
          </div>
        </div>
        <CurrencySelect currency={ this.state.myCurrency }
                        currencies={ this.props.currencies }
                        onSelect={ this.handleSelect }/>
      </div>
    )
  }
}