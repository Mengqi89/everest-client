import React, { Component } from 'react'
import Job from '../Job/Job'
import './JobsListPage.scss'


export default class JobsListPage extends Component {
    renderJobs() {
        const { jobs = [] } = this.props
        return jobs.map((job, index) => {
            return <Job key={index} {...job} />
        })
    }
    renderFilteredJobs() {
        const { filteredJobs = [] } = this.props
        return filteredJobs.map((job, index) => {
            return <Job key={index} {...job} />
        })
    }

    renderEmptyResults() {
        return (
            <>
                <div className='no-job'>There were no jobs found!</div>
            </>
        )
    }
    render() {
        const { filtered } = this.props
        return (
            <section className='jobslist'>
                <div className='jobslist-center'>
                    {(!!filtered) ? ((this.props.filteredJobs.length !== 0) ? this.renderFilteredJobs() : this.renderEmptyResults()) : this.renderJobs()}
                </div>
            </section >
        )

    }
}