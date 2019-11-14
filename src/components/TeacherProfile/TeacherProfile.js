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
                <h2>{user.first_name} {user.last_name}</h2>
                <ul>
                    <li>Username: <span>{user.username}</span></li>
                    <li>Age: <span>{user.age}</span></li>
                    <li>Email: <span>{user.email}</span></li>
                    <li>Nationality: <span>{user.nationality}</span></li>
                    <li>Race: <span>{user.race}</span></li>
                    <li>School Attended: <span>{user.school}</span></li>
                    <li>Teaching Experience: <span>{user.years_of_experience} {user.years_of_experience === 1 ? 'year' : 'years'}</span></li>
                </ul >
            </div>

        )
    }
}

export default TeacherProfile