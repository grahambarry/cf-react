import React from 'react'
import CurrencyFlags from '../../currency_flags/CurrencyFlags.js';
import './currencySelect.scss'

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
    JSON.parse(this.state.availableCurrencies, (key) => {
      parsed.push(key)
    })
    return parsed
  }
  render() {
    const handleSelect = (key) => {
      this.setState({selected: key})
      this.hideOpen()
      this.props.onSelect(key);
    }
    return (
      <div className="custom-select align-end" tabIndex={0} onBlur={this.hideOpen}>
        <div className={`selected ${this.state.open ? "open" : ""}`} onClick={this.toggleOpen}>
          <div className={'currency-flag currency-flag-' + this.state.selected.toLowerCase()}>
            <img src={ CurrencyFlags[ this.state.selected ]}/>
          </div>
          <div className="label">
            { this.state.selected.toUpperCase() }
          </div>
        </div>
        <div className={`items ${!this.state.open ? "selectHide" : ""}`}>
          { 
            [...this.parseCurrencies()].map((key) => {
              return (
                <div className="item" 
                     key={key}
                     onClick={() => handleSelect(key)}>
                  <div className="currency-flag">
                    <img src={CurrencyFlags[key]}/>
                  </div>
                  <div className="label">
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