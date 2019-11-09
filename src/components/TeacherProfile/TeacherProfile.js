import React, { Component } from 'react'
import UserContext from '../../contexts/UserContext'
import TeacherApiService from '../../services/teacher-api-service'
import './TeacherProfile.scss'


class TeacherProfile extends Component {
    static contextType = UserContext

    componentDidMount() {
        TeacherApiService.getTeacherProfile()
            .then(profile => this.context.setUser(profile))
    }

    render() {
        const { user } = this.context
        return (
            <div className="TeacherProfile">
                <h2>Teacher Info</h2>
                <ul>
                    <li>Name: {user.first_name} {user.last_name}</li>
                    <li>Username: {user.username}</li>
                </ul >
            </div>

        )
    }
}

export default TeacherProfile