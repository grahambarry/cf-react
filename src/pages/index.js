import React from 'react'
import api from '../api/api.js'
import './index.scss'
import Stepper from '../components/shared/Stepper.js'

class IndexPage extends React.Component {
    constructor(props) {
      super(props);
    
    this.state = { steps: [
                            { 'label': 'Transaction info'},
                            { 'label': 'Recipient info'},
                            { 'label': 'Make payment'},
                          ]};
    }
    
    componentDidMount() {
      const fetchData = (e) => {
        e.preventDefault()
    
        setMessage('Loading...')
    
        api.getCurrencies(base_code)
        .then((response)=>{
          setResponseData(JSON.stringify(response.data.conversion_rates))
          setMessage('')
          console.log(JSON.stringify(response.data.conversion_rates))
        })
        .catch((error) => {
          setMessage('Error')
          console.log(error)
        })
      }
    };

  // // Create state variables
  // let [responseData, setResponseData] = React.useState('')
  // let [base_code, setBaseCode] = React.useState('')
  // let [message, setMessage] = React.useState('')

  // // fetches currency data based on parameters
  // const fetchData = (e) => {
  //   e.preventDefault()

  //   setMessage('Loading...')

  //   api.getCurrencies(base_code)
  //   .then((response)=>{
  //     setResponseData(JSON.stringify(response.data.conversion_rates))
  //     setMessage('')
  //     console.log(JSON.stringify(response.data.conversion_rates))
  //   })
  //   .catch((error) => {
  //     setMessage('Error')
  //     console.log(error)
  //   })
  // }

  render () {
    return (
      <div className="container">
        <div className="left">
          <Stepper steps={this.state.steps}/>
          <div className="wrap-phone">
            {/* <PromptText promptA="Let’s set up your transaction!"
                        promptB="Specify the amount to be sent or received."/> */}
            <div v-if="loading">Loading...
            </div>
            {/* <Converter v-if="!loading"
                        value1="value1"
                        value2="value2"
                        currencies="currencies"
                        currency1="currency1"
                        currency2="currency2"
                        emittedValues="setValues"/> */}

            {/* <CfButton label="Next"
                    route="Transaction info"
                    class="cf-button"
                    click="showModal = true"/> */}
            {/* <Footer links="footerLinks" class="media-lg"/> */}
          </div>
        </div>
        <div className="right">
          <div className="wrap-phone">
            <div className="fixed-panel">
              {/* <SummaryPanel/>
              <Footer links="footerLinks" className="media-sm"/> */}
            </div>
          </div>
        </div>

        {/* <VerificationModal show="showModal"
                        close="closeModal"/> */}
      </div>
    )
  }
}

export default IndexPage