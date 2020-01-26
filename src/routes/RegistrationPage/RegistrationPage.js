import React, { Component } from 'react'
import './RegistrationPage.scss'
import TeacherRegistrationForm from '../../components/TeacherRegistrationForm/TeacherRegistrationForm'

class RegistrationPage extends Component {
  state = {
    accountType: 'teacher',
  }

  render() {
    return (
      <section className="RegistrationPage">
        <h2>Sign up</h2>
        {this.state.accountType === 'teacher' && <TeacherRegistrationForm />}
      </section>
    )
  }
}

export default RegistrationPage