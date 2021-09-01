import React from 'react'
import './verificationModal.scss'
import VerificationInputs from './VerificationInputs.js'
import CfButton from './CfButton.js'
import iconLock from '../../assets/icon-lock.svg';
import { NavLink } from "react-router-dom";
import Modal from './Modal.js'

export default class VerificationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canVerify: false,
      showModal: false
    }
  };
  handleVerificationCode = (code) => {
    this.setState({canVerify: true})
    console.log('The Code is ' + code);
  }
  handleDisable = () => {
    this.setState({canVerify: false})
  }
  render() {

    return (
      <Modal showModal={this.props.showModal}
             width="580px"
             onCloseModal={this.props.onCloseModal}>
        <Modal.Header>
          <div className="header-container">
            <div className="flex-row title">
              <img src={iconLock} className="icon"/>
              Identity verification required
            </div>
            <div className="flex-row subtitle">
              For your security, we ocassionally require you to verify your identity by 
              entering a code sent to your mobile device.
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="body-container">
            <VerificationInputs onDisable={this.handleDisable}
                                onEmitCode={this.handleVerificationCode}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="actions-container">
            <div className="buttons-wrap">
              <CfButton label="Verify Identity"
                        disabled={!this.state.canVerify}
                        onClick={(event) => this.props.onCloseModal(event)}/>
              <CfButton label="Cancel"
                        secondary
                        className="but-2"
                        onClick={(event) => this.props.onCloseModal(event)}/>
            </div>
            <NavLink to={'Transaction_info'} className="link">
              I can’t access this mobile device
            </NavLink>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }
}