import React, { Component } from 'react'
import JobsApiService from '../../services/jobs-api-service'
import SchoolApiService from '../../services/school-api-service'
import './JobApplyPage.scss'
import ApplicationApiService from '../../services/application-api-service'
import UserContext from '../../contexts/UserContext'
import { Link, withRouter } from 'react-router-dom'


class JobApplyPage extends Component {
  static contextType = UserContext

  state = {
    job: {},
    school: {},
    toggle: false
  }

  handleApplyClick = () => {
    const { job, school } = this.state
    const newApplication = {
      job_id: job.job_id,
      school_id: school.id
    }

    ApplicationApiService.postApplication(newApplication)
      .then(console.log)

    this.setState({
      toggle: true
    })

  }

  componentDidMount() {
    JobsApiService.getJob(this.props.match.params.job_id).then(job => {
      this.setState({ job })
      SchoolApiService.getSchoolProfileById(job.school_id).then(school =>
        this.setState({ school })
      )
    })
  }

  render() {

    const { job, school } = this.state
    return (
      <div className="JobApplyPage">
        <h2>Applying to: {job.job_title}</h2>
        <p>At: {school.school_name}</p>
        <label htmlFor="confirm-apply">Ready to apply?</label>
        {this.state.toggle ?
          <p>Thank you for submitting your application. A staff will review your application and follow up.
            Click <Link to="/applications">
              Applications
              </Link> to view.</p> : <p></p>}
        <button onClick={this.handleApplyClick} id="confirm-apply" >
          Confirm
        </button>
      </div>
    )
  }
}

export default withRouter(JobApplyPage)
