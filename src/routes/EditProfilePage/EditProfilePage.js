import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import EditAdminForm from '../../components/EditAdminForm/EditAdminForm'
import EditTeacherForm from '../../components/EditTeacherProfileForm/EditTeacherProfile'
import './EditProfilePage.scss'

class EditProfilePage extends Component {
  static contextType = UserContext

  render() {
    const { userType } = this.context
    return (
      <div className="EditProfilePage">
        {userType === 'admin' && <EditAdminForm />}
        {userType === 'teacher' && <EditTeacherForm />}
      </div>
    )
  }
}

export default EditProfilePage
