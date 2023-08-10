import './index.css'
import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="home-body-container">
          <div className="home-content">
            <h1 className="home-heading">Clothes That Get You Noticed</h1>
            <img
              className="home-mobile-img"
              alt="clothes that get you noticed"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            />
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that
              it changes all the time. Clothes have always been a marker of the
              era and we are in a revolution. Your fashion makes you been seen
              and heard that way you are. So, celebrate the seasons new and
              exciting fashion in your own way
            </p>
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </div>
          <img
            className="home-desktop-img"
            alt="clothes that get you noticed"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          />
        </div>
      </div>
    )
  }
}

export default Home
