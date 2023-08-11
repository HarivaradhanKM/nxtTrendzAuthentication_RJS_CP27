import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const fetchedData = await response.json()
    console.log(fetchedData)
    console.log(response)
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.setState({
        errorMessage: fetchedData.error_msg,
        showErrorMessage: true,
      })
    }
  }

  submitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="label-text">
          USERNAME
        </label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="user-input"
          value={username}
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="label-text">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="user-input"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showErrorMessage, errorMessage} = this.state
    return (
      <div className="login-form-container">
        <div className="image-container">
          <img
            className="login-website-logo-mobile-image"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <img
            className="login-image"
            alt="website login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          />
          <div className="login-website-logo-desktop">
            <img
              className="login-website-logo-desktop-image"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            />
            <form className="form-container" onClick={this.submitForm}>
              <div className="input-container"> {this.renderUserName()}</div>
              <div className="input-container"> {this.renderPassword()}</div>
              <button type="submit" className="login-button">
                Login
              </button>
              {showErrorMessage && (
                <p className="error-message">*{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
