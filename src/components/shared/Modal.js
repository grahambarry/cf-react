import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './modal.scss'

function Header() {
  return null
}
function Body() {
  return null
}
function Footer() {
  return null
}

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  closeModal(event) {
    event.target.classList.contains('modal-bg') ? this.props.onCloseModal(event) : ''
  }

  static Header = Header
  static Body = Body
  static Footer = Footer

  render() {

    const {children} = this.props
    const header = children.find(child => child.type === Header)
    const body = children.find(child => child.type === Body)
    const footer = children.find(child => child.type === Footer)
    const width = this.props.width ? this.props.width : '100%'
    
    return (
      <React.Fragment>
        <CSSTransition in={this.props.showModal}
                       appear={true}
                       timeout={600}
                       classNames="fade"> 
            <div className="modal-bg fade"
                  tabIndex="0"
                  onClick={(event) => this.closeModal(event)}>
              <div className="modal-panel" 
                  style={{ width: width }}>
                <header>
                  {header ? header.props.children : null}
                </header>
                <main>
                  {body ? body.props.children : null}
                </main>
                <footer>
                  {footer ? footer.props.children : null}
                </footer>
              </div>
            </div>
        </CSSTransition>
      </React.Fragment>
    )
  }
}