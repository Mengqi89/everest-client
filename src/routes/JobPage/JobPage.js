import React, { Component } from 'react'
import JobsContext from '../../contexts/JobsContext'
import JobContainer from '../../components/JobContainer/JobContainer'
import JobsApiService from '../../services/jobs-api-service'
import './JobPage.scss'

class JobPage extends Component {
    static contextType = JobsContext

    componentDidMount() {
        JobsApiService.getJobs()
            .then(jobs => {
                this.context.setJobsData(jobs)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const jobs = this.context.jobs
        return (
            <>
                <JobContainer />
                {jobs.length === 0 ? (<div className="loader"></div>) : (<div></div>)}
            </>
        )
    }
}

export default JobPage