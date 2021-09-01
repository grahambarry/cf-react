import React, { useRef } from 'react'
import _ from 'lodash'
import './verificationInputs.scss'
import iconRefresh from '../../assets/icon-refresh.svg'
import iconPhone from '../../assets/icon-phone.svg'

export default class VerificationInputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      digits: 6,
      currentIndex: 0,
      code: []
    }
  }
  render() {
    let numDigits = this.props.digits ? this.props.digits : this.state.digits
    const verificationCode = new Array(numDigits).fill(undefined)
    let inputRefs = []

    const focusNext = (e, index) => {
      let val = e.target.value
      index < numDigits - 1 ? inputRefs[index + 1].current.focus() : ''
      pushDigitValue(index, val )
    }
    const clearValue = (e, index) => {
      e.target.value = ''
      pushDigitValue(index, '' )
    }
    const pushDigitValue = (index, value) => {
      this.state.code[index] = value
      if (this.state.code.findIndex(e => (e === undefined || e === "")) > -1) {
        handleDisable()
      } else {
        handleVerificationCode(this.state.code)
      }
    }
    const handleVerificationCode = (code) => {
      let codeString = code.join("")
      this.props.onEmitCode(codeString)
    }
    const handleDisable = () => {
      this.props.onDisable()
    }
    return (
      <div className="wrapper">
        <div className="phone-row">
          <div className="text">
            Enter the code sent via SMS to
            <div className="phone-wrapper">
              <span className="phone code">+353</span>
              <span className="phone number">872251177</span>
            </div>
          </div>
        </div>
        <div className="inputs-row">
          {
            [...verificationCode].map((x, index) => {
              let inputRef = React.createRef();
              inputRefs.push(inputRef);
              return (
                <input key={index} 
                       ref={inputRef}
                       maxLength="1"
                       type="tel"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                       required
                       className="digit-input"
                       onFocus={(e) => clearValue(e, index)}
                       onInput={(e) => focusNext(e, index)}/>
              )
            })
          }
        </div>
        <div className="alt-actions">
          <div className="action">
            <img src={iconRefresh} className="icon"/>
            Receive a new code
          </div>
          <div className="action">
            <img src={iconPhone} className="icon"/>
            Receive code via call instead
          </div>
        </div>
      </div>
    )
  }
}