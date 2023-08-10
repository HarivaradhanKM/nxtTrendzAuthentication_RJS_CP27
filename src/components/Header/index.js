import './index.css'

import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="nav-bar-container">
          <div className="nav-bar-mobile-container">
            <img
              className="website-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <button type="button" className="nav-mobile-btn">
              <img
                className="nav-bar-image"
                alt="nav logout"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              />
            </button>
          </div>
          <div className="nav-bar-desktop-container">
            <img
              className="website-logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            />
            <div className="nav-bar-desktop-container-text">
              <ul className="nav-menu-items-list">
                <li className="nav-menu-item">Home</li>
                <li className="nav-menu-item">Products</li>
                <li className="nav-menu-item">Cart</li>
              </ul>
              <button type="button" className="logout-desktop-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav-menu">
          <ul className="mobile-nav-items">
            <li className="mobile-nav-item">
              <img
                className="nav-bar-image"
                alt="nav home"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              />
            </li>
            <li className="mobile-nav-item">
              <img
                className="nav-bar-image"
                alt="nav products"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              />
            </li>
            <li className="mobile-nav-item">
              <img
                className="nav-bar-image"
                alt="nav cart"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
