import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TokenService from '../../services/token-service'
import SchoolApiService from '../../services/school-api-service'
import AdminApiService from '../../services/admin-api-service'

import './LoginForm.scss'

class LoginForm extends Component {
  state = {
    accountType: null,
    error: null
  }
  handleAccountTypeChange = (ev) => {
    this.setState({
      accountType: ev.target.value
    })
  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    if (this.state.accountType === 'school') {
      SchoolApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''

          TokenService.saveAuthToken(res.authToken)
          TokenService.saveUserType('school')
          //not sure if forcing a page refresh is the best way to tackle this --- kyler
          //window.location.reload();
          this.props.history.push('/profile')
          // this.context.handleLoginSucces()
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
    }
    if (this.state.accountType === 'admin') {
      AdminApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''

          TokenService.saveAuthToken(res.authToken)

          TokenService.saveUserType('admin')
          //window.location.reload();
          //this.props.history.push('/profile')
          console.log(this.props)

        })
        .then(() => {
          this.props.onLoginSuccess()
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
    }
  }

  render() {
    const { error } = this.state

    return (
      <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <fieldset>
          <legend htmlFor="account-type">I am a</legend>
          <label htmlFor="teacher">Teacher</label>
          <input type="radio" id="teacher" name="account-type" value="teacher" onChange={this.handleAccountTypeChange} />
          <label htmlFor="teacher">School</label>
          <input type="radio" id="school" name="account-type" value="school" onChange={this.handleAccountTypeChange} />
          <label htmlFor="teacher">Admin</label>
          <input type="radio" id="admin" name="account-type" value="admin" onChange={this.handleAccountTypeChange} />
        </fieldset>
        <div className="username">
          <label htmlFor="username">Username</label>
          <input required name="username" id="username" type="username" autoComplete="new-password" />
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            autoComplete="new-password"
            required
            name="password"
            type="password"
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form >
    );
  }
}

export default withRouter(LoginForm)