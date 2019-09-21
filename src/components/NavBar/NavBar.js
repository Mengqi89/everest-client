import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TokenService from '../../services/token-service'
import './NavBar.scss'
import logo from '../../assets/logo-everest-eie.png'
import UserContext from '../../contexts/UserContext'


class NavBar extends Component {
  static contextType = UserContext
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true,
    userType: null
  }

  componentDidMount() {
    if (TokenService.hasAuthToken()) {
      this.context.setLoggedIn(true)
      this.context.setUserType(TokenService.getUserType())
    }
  }

  handleLogoutClick = () => {
    this.context.setLoggedIn(false)
    this.props.history.push('/')
    this.context.setUserType(null)
    TokenService.clearUserType()
    TokenService.clearAuthToken()
  }

  onClickMenu = () => {
    document.getElementById('menu').classList.toggle('change')
    document.getElementById('nav').classList.toggle('change')
  }

  renderLogoutLink() {
    const { userType } = this.context

    return (
      <>
        <li>
          <Link to='/profile' >
            Profile
          </Link>
        </li>
        <li>
          <Link to="/edit-profile">
            Edit Profile
          </Link>
        </li>
        {userType === 'teacher' && <li>
          <Link to="/jobs">
            <FontAwesomeIcon icon="clipboard" /> View Jobs
          </Link>
        </li>}
        {userType === 'teacher' && <li>
          <Link to="/applications">
            <FontAwesomeIcon icon="clipboard" /> Applications
          </Link>
        </li>}
        {userType === 'school' && <li>
          <Link to="/postJob">
            <FontAwesomeIcon icon="clipboard" /> Post Job
          </Link>
        </li>}
        {userType === 'school' && <li>
          <Link to="/applications">
            <FontAwesomeIcon icon="clipboard" /> Applications
          </Link>
        </li>}
        {userType === 'admin' && <li>
          <Link to="/applications">
            <FontAwesomeIcon icon="clipboard" /> Applications
          </Link>
        </li>}
        <li onClick={this.handleLogoutClick} className="highlighted-btn">
          <Link to='/login'>
            Logout
          </Link>

        </li>
      </>
    )
  }

  renderLoginLink() {
    return (
      <>
        {/* <div id="menu" onClick={(ev) => this.onClickMenu()}> */}
        <li id="bar1" className="bar">
          <Link to="/about-us">
            About Us
          </Link>
        </li>
        <li id="bar2" className="bar">
          <Link to="/jobs">
            View Jobs
          </Link>
        </li>
        <li id="bar3" className="bar">
          <Link to='/login' >
            Login
          </Link>
        </li>
        <li id="bar4" className="bar">
          <Link to="/register" className="highlighted-btn">
            Register
          </Link>
        </li>
        {/* </div> */}
      </>
    )
  }

  render() {
    const { loggedIn } = this.context
    return (
      <>
        <nav className="NavBar">
          <ul>
            <Link to="/">
              <h1>
                <img src={logo} alt="logo" id="logo" />
                EverestIntl
            </h1>
            </Link>
          </ul>
          <ul className="nav-links">
            {loggedIn ? this.renderLogoutLink() : this.renderLoginLink()}
          </ul>
        </nav>
      </>
    )
  }
}

export default withRouter(NavBar)
