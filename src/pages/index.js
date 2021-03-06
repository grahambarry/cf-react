import React from 'react'
import api from '../api/api.js'
import './index.scss'
import Stepper from '../components/shared/Stepper.js'
import PromptText from '../components/shared/PromptText.js'
import Footer from '../components/shared/Footer.js'
import SummaryPanel from '../components/shared/SummaryPanel.js'
import CfButton from '../components/shared/CfButton.js'
import VerificationModal from '../components/shared/VerificationModal.js'
import Converter from '../components/shared/Converter.js'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { 
      steps: [
        { 'label': 'Transaction info' },
        { 'label': 'Recipient info' },
        { 'label': 'Make payment' },
      ],
      footerLinks: [
        { 'label': 'Help \& Support' },
        { 'label': 'Legal Stuff' },
      ],
      showModal: false,
      currencies: null,
      value1: '0',
      value2: '0',
      currency1: 'EUR',
      currency2: 'USD',
      rate: null,
      loading: true,
      errored: false,
    };
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState({showModal: true});
  };

  handleCloseModal = (event) => {
    event.preventDefault();
    this.setState({showModal: false});
  };
  setBaseCurrency = (val) => {
    this.setState({value1: val.value})
    this.setState({value2: (val.value * this.getRate(this.state.currency2)).toFixed(2)})
  }
  handleInputs = (val) => {
    if (val.fromTo === 'from') {
      this.setState({currency1: val.currency})
      if (val.currency != this.state.currency1) {
        this.fetchData(val.currency)
        setTimeout(() => { this.setBaseCurrency(val) }, 300);
      } else {
        this.setBaseCurrency(val)
      }
    }
    else {
      this.setState({currency2: val.currency})
      this.setState({value2: val.value})
      this.setState({value1: (val.value / this.getRate(this.state.currency2)).toFixed(2)})
    }
  };

  getRate = (currency) => {
    let rate = JSON.parse(this.state.currencies)[currency]
    this.setState({rate: rate})
    return rate
  }

  componentDidMount() {
    this.fetchData(this.state.currency1)
  };

  fetchData = (base_code) => {
    api.getCurrencies(base_code)
    .then((response) => {
      let parsed = JSON.stringify(response.data.conversion_rates)
      this.setState({currencies: parsed});
      this.setState({loading: false});
    })
    .catch((error) => {
      this.setState({loading: true});
      console.log(error)
    })
  };
  render () {
    return (
      <div className="container">
        <div className="left">
          <Stepper steps={this.state.steps}/>
          <div className="wrap-phone">
            <PromptText promptA="Let???s set up your transaction!"
                        promptB="Specify the amount to be sent or received."/>

            <Converter loading={this.state.loading}
                       value1={ this.state.value1 }
                       value2={ this.state.value2 }
                       currencies={ this.state.currencies }
                       currency1={ this.state.currency1 }
                       currency2={ this.state.currency2 }
                       emittedValues={this.handleInputs}/>

            <CfButton label="Next"
                      route="Transaction_info"
                      onClick={this.handleClick}/>
            <Footer links={this.state.footerLinks} className="media-lg"/>
          </div>
        </div>
        <div className="right">
          <div className="wrap-phone">
            <div className="fixed-panel">
              <SummaryPanel rate={this.state.rate}
                            currency1={ this.state.currency1 }
                            currency2={ this.state.currency2 }
                            youSend={this.state.value1}
                            recipientGets={this.state.value2}/>
              <Footer links={this.state.footerLinks} className="media-sm"/>
            </div>
          </div>
        </div>
          <VerificationModal showModal={this.state.showModal}
                             onCloseModal={this.handleCloseModal}/>
      </div>
    )
  }
}

export default IndexPage