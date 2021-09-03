import React from 'react'
import SymbolLUT from '../json/currency_symbols.json'
import iconQ from '../../assets/icon-q.svg'
import './summaryPanel.scss'

export default class SummaryPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  sends = () => {
    let key = this.props.currency1
    let sym = ""
    if (SymbolLUT[key].symbol_native != undefined) sym = SymbolLUT[key].symbol_native
    return sym + this.props.youSend
  }
  gets = () => {
    let key = this.props.currency2
    let sym = ""
    if (SymbolLUT[key].symbol_native != undefined) sym = SymbolLUT[key].symbol_native
    return sym + this.props.recipientGets
  }
  render() { 
    return (
      <div className="panel-container">
        <div className="strip gray-bg gray-med-1 font-pgm font-size-14 lh-24">
          Sending Details
        </div>
        <div className="strip font-size-14 lh-28 gray-med-1">
          <div className="font-pgb gray-light">
            You Send
          </div>
          <div className="font-pgm">
            { this.sends() }
          </div>
        </div>
        <div className="strip gray-bg padding-1 gray-med-1 font-pgm font-size-14 lh-24">
          <div className="font-pgm">
            Receiving Details
          </div>
          <div className="flex font-pgb alt-blue font-size-12 lh-28">
            As of right now
            <img src={iconQ} className="icon"/>
          </div>
        </div>
        <div className="summary-details">
          <div className="sub-row">
            <div className="row-label">Rate</div>
            <div className="row-value">
              { this.props.rate }
            </div>
          </div>
          <div className="sub-row">
            <div className="row-label">Fee</div>
            <div className="row-value">$2.50</div>
          </div>
          <div className="sub-row">
            <div className="row-label">Delivery date</div>
            <div className="row-value">25th November</div>
          </div>
          <div className="sub-row">
            <div className="row-label">Recipient gets</div>
            <div className="row-value gray-med-1">
              { this.gets() }
            </div>
          </div>
        </div>
        <div className="font-pgm justify-center font-size-12 lh-28 amm-orange strip border-alt">
          You save
          <span className="font-pgbold whitespace-pre"> $65.00 </span>
          compared to your bank!
        </div>
      </div>
    )
  }
}