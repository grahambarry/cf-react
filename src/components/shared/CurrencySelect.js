import React from 'react'
import memoize from 'lodash/memoize'
import './currencySelect.scss'
import '../../assets/stylesheets/currency_flags.scss';

export default class CurrencySelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.currency
        ? this.props.currency
        : this.props.currencies.length > 0
        ? this.props.currencies[0]
        : null,
      open: false,
      availableCurrencies: this.props.currencies
    }
  }
  toggleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }
  hideOpen = () => {
    this.setState({open: false})
  }
  parseCurrencies() {    
    let parsed = []
    JSON.parse(this.state.availableCurrencies, (key, value) => {
      parsed.push(key)
    })
    return parsed
  }
  render() {
    return (
      <div className="custom-select align-end" tabIndex="tabindex" onBlur={this.hideOpen}>
        <div className={`selected ${this.state.open ? "open" : ""}`} onClick={this.toggleOpen}>
          <div className={'currency-flag currency-flag-' + this.state.selected.toLowerCase()}></div>
          <div className="label">
            { this.state.selected.toUpperCase() }
          </div>
        </div>
        <div className={`items ${!this.state.open ? "selectHide" : ""}`}>
          { 
            [...this.parseCurrencies()].map((key, index) => {
              return (
                <div className="item" key={key}>
                  <div className="currency-flag" className={'currency-flag currency-flag-' + key.toLowerCase()}></div>
                  <div className="label">
                    {console.log('key ' + key)}
                    { key }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}