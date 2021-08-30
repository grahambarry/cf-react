import React from 'react'
import './Navbar.scss'
import logo from '../../assets/currency_fair_logo.svg'
import signOutIcon from '../../assets/sign-out-icon.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
    <img src={logo} className="logo"/>
    {/* <BurgerMenu icon-hover-color="#AAEFE8"
                click="openMenu"
                className="burger-icon"/> */}
    <div className="nav-wrapper" className="{open: isOpen}">
      <div click="openMenu" className="nav-bg"></div>
      <ul className="nav-items">
        <li className="burger-slide">
          {/* <BurgerMenu icon-hover-color="#AAEFE8" click="openMenu"/> */}
        </li>
        <li className="nav-item signout">
          <a className="nav-link" href="#" click="handleSignOut">
            <img src={signOutIcon} className="icon"/>
            Sign out
          </a>
        </li>
        <li className="nav-item signin-but">
          {/* <router-link
            to="{ name: 'sign_up' }"
            className="nav-link">
            Sign up
          </router-link> */}
        </li>
      </ul>
    </div>
    <div className="spacer-20">

    </div>
  </nav>
  )
}

export default Navbar