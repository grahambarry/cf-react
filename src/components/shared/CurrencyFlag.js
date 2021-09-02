import React from 'react'
import memoize from 'lodash/memoize'
import './currencySelect.scss'
import CurrencyFlags from '../../currency_flags/CurrencyFlags.js';


export default class CurrencyFlag extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item" key={key}>
        <div className="currency-flag" style={{ backgroundImage: `url(${CurrencyFlags.key})` }}></div>
        <div className="label">
          { key }
        </div>
      </div>
    )
  }
}