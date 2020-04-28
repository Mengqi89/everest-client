import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TokenService from '../../services/token-service'
import AdminApiService from '../../services/admin-api-service'
import './LoginForm.scss'
import TeacherApiService from '../../services/teacher-api-service'
import UserContext from '../../contexts/UserContext'
import LoadingSpinner from '../Utils/LoadingSpinner/LoadingSpinner'

class LoginForm extends Component {
  static contextType = UserContext

  state = {
    userType: 'teacher',
    error: null,
    loading: false
  }

  handleDemo = (ev) => {
    if (ev.target.value === 'teacher') {
      document.getElementById('username').value = 'NatBowie'
      document.getElementById('password').value = 'Password1!'
    }
    if (ev.target.value === 'admin') {
      this.setState({
        userType: ev.target.value
      })
      document.getElementById('admin-input').checked = true
      document.getElementById('username').value = 'dunder'
      document.getElementById('password').value = 'Password1!'
    }
  }

  handleUserTypeChange = (ev) => {
    if (this.state.userType !== 'teacher') {
      this.setState({
        userType: 'teacher'
      })
    } else {
      this.setState({
        userType: ev.target.value
      })
    }

  }

  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    this.setState({ error: null, loading: true })

    const { username, password } = ev.target

    if (this.state.userType === 'admin') {
      AdminApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''

          TokenService.saveAuthToken(res.authToken)
          TokenService.saveUserType('admin')
          this.context.setUserType('admin')
          this.props.history.push('/profile')
        })
        .then(() => this.props.onLoginSuccess())
        .catch(res => {
          this.setState({
            loading: false,
            error: res.error
          })
        })
    }
    if (this.state.userType === 'teacher') {
      TeacherApiService.postLogin({
        username: username.value,
        password: password.value
      })
        .then(res => {
          username.value = ''
          password.value = ''
          TokenService.saveAuthToken(res.authToken)
          TokenService.saveUserType('teacher')
          this.context.setUserType('teacher')
          this.props.onLoginSuccess()
          this.props.history.push('/profile')
        })
        .catch(res => {
          this.setState({
            loading: false,
            error: res.error
          })
        })
    }
  }

  render() {
    const { error, loading } = this.state

    return (
      <form className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
        <div role='alert'>{error && <p className='red'>{error}</p>}</div>
        <div className='username'>
          <label htmlFor='username'>Username</label>
          <input required name='username' id='username' type='username' autoComplete='new-password' />
        </div>
        <div className='password'>
          <label htmlFor='password'>Password</label>
          <input
            autoComplete='new-password'
            required
            name='password'
            type='password'
            id='password'
          />
        </div>
        <button id='login-button' type='submit'>{loading ? <LoadingSpinner /> : 'Login'}</button>

        <fieldset id='admin-login'>
          <input type='checkbox' id='admin-input' name='account-type' value='admin' onClick={this.handleUserTypeChange} /><label htmlFor='admin-input' id='admin-label'>Check this only if you are an administrator.</label>
        </fieldset>
        <div id='demo'>
          <button className='demo-button' value='teacher' onClick={this.handleDemo}>Teacher Demo</button>
          <button className='demo-button' value='admin' onClick={this.handleDemo}>Admin Demo</button>
        </div>

      </form >
    )
  }
}

export default withRouter(LoginForm)