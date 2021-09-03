import React from 'react'
import ConvertInput from './ConvertInput.js'
import { CSSTransition } from 'react-transition-group'
import './converter.scss'

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return (
      <div className="currency-inputs">

        {this.props.loading && <div className="loader">Loading...</div>}
        <CSSTransition in={!this.props.loading}
                       timeout={600}
                       classNames="fade">
          <div className="fade">
            {!this.props.loading && <ConvertInput from 
                                                  currencies={ this.props.currencies }
                                                  value={ this.props.value1 }
                                                  currency={ this.props.currency1 }
                                                  emittedValues={this.props.emittedValues}/>
            }
            {!this.props.loading && <ConvertInput to 
                                                  currencies={ this.props.currencies }
                                                  value={ this.props.value2 }
                                                  currency={ this.props.currency2 }
                                                  emittedValues={this.props.emittedValues}/>
            }
          </div>
        </CSSTransition>
      </div>
    )
  }
}