import React, { Component } from 'react'
import AdminApiService from '../../services/admin-api-service'
import './EditAdminForm.scss'
import { withRouter } from 'react-router-dom'

class EditAdminForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        user_id: '',
        hasError: null
    }

    componentDidMount() {
        AdminApiService.getAdminProfile()
            .then(profile => {
                this.setState({
                    first_name: profile.first_name,
                    last_name: profile.last_name,
                    username: profile.username,
                    email: profile.email,
                    user_id: profile.id
                })
            })
    }

    handleUpdate = (ev) => {
        const key = ev.target.name
        this.setState({
            [key]: ev.target.value
        })
    }
    clearState = () => {
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            email: ''
        })
    }
    handleFormSubmit = (ev) => {
        ev.preventDefault()
        const { first_name, last_name, username, email } = this.state
        const updatedAdmin = { first_name, last_name, username, email }
        AdminApiService.updateAdmin(updatedAdmin, this.state.user_id)
            .then(admin =>
                this.props.history.push('/profile')
            )
            .catch(res => this.setState({ hasError: res.error }))

    }

    render() {
        const { hasError } = this.state
        return <div className="EditAdminForm">
            <h2>Editing {this.state.username} Profile</h2>
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    {hasError && <p className='red'>{hasError}</p>}
                </div>
                <label htmlFor="first_name">First Name: </label>
                <input type="text" value={this.state.first_name} name="first_name" id="first_name" onChange={this.handleUpdate}></input>

                <label htmlFor="last_name">Last Name: </label>
                <input type="text" value={this.state.last_name} name="last_name" id="last_name" onChange={this.handleUpdate}></input>

                <label htmlFor="email">Email: </label>
                <input type="email" value={this.state.email} name="email" id="email" onChange={this.handleUpdate}></input>

                <button type="submit">Submit</button>
                <button type="reset" onClick={this.clearState}>Reset</button>
            </form>
        </div>
    }
}

export default withRouter(EditAdminForm)