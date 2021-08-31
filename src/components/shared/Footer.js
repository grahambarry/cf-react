import React from 'react'
import memoize from 'lodash/memoize'
import { NavLink } from "react-router-dom";
import './footer.scss'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  path = function (link) {
    let path = `${"/" + link.replace(/ /g,"_")}`
    return path
  }
  copyrightYear = function() {
    let date = new Date().getFullYear()
    let string = '© ' + `${date}` + ' CurrencyFair'
    return string
  }
  formatCopyright = memoize(this.copyrightYear)

  render() { 
    return (
      <div className={"footer-row " + this.props.className}>
        <div className="copyright">{ this.formatCopyright() }</div>
        <div className="links-row">
          <ul>
            {this.props.links.map((link, index) => 
              <li key={link.label}
                  index={index}>
                <NavLink activeClassName='is-active' to={this.path(link.label)}>
                  { link.label }
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}