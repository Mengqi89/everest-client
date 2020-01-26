import React, { Component } from 'react'

const JobsContext = React.createContext({
    jobs: [],
    filteredJobs: [],
    filtered: false,
    keyword: '',
    salary: 0,
    gradeLevel: 0,
    location: '',
    error: null,
    setError: () => { },
    clearError: () => { },
    setJobsData: () => { },
    setFilter: () => { },
    filterJobs: () => { },
    handleChange: () => { },
    addJob: () => { },
    removeJob: () => { },
})

export default JobsContext

export class JobsProvider extends Component {
    state = {
        jobs: [],
        filteredJobs: [],
        filtered: false,
        keyword: '',
        salary: 0,
        gradeLevel: 0,
        location: '',
        error: null
    }

    filter = (salary, location, gradeLevel, keyword, tempJobs) => {
        return this.checkSalary(salary, location, gradeLevel, keyword, tempJobs)
    }

    checkKeyword = (keyword, tempJobs) => {
        if (keyword !== '') {
            let lowerCaseKeyword = keyword.toLowerCase()
            function includesStr(values, str) {
                return values.map(function (value) {
                    return String(value).toLowerCase()
                }).find(function (value) {
                    return value.includes(lowerCaseKeyword)
                })
            }

            tempJobs = tempJobs.filter(function (item) {
                return includesStr(Object.values(item), keyword)
            })
        }
        return tempJobs
    }

    checkGrade = (gradeLevel, keyword, tempJobs) => {
        if (gradeLevel !== 'all') {
            if (gradeLevel === 'kindergarten') {
                tempJobs = tempJobs.filter(jobs => jobs.grade_level.includes('kindergarten'))
            }

            if (gradeLevel === 'elementary') {
                tempJobs = tempJobs.filter(jobs => jobs.grade_level.includes('elementary'))
            }

            if (gradeLevel === 'middle') {
                tempJobs = tempJobs.filter(jobs => jobs.grade_level.includes('middle'))
            }

            if (gradeLevel === 'high') {
                tempJobs = tempJobs.filter(jobs => jobs.grade_level.includes('high'))
            }

            if (gradeLevel === 'college') {
                tempJobs = tempJobs.filter(jobs => jobs.grade_level.includes('college'))
            }
        }
        return this.checkKeyword(keyword, tempJobs)
    }

    checkLocation = (location, gradeLevel, keyword, tempJobs) => {
        if (location !== '') {
            tempJobs = tempJobs.filter(job => job.location.includes(location))
        }
        return this.checkGrade(gradeLevel, keyword, tempJobs)
    }

    checkSalary = (salary, location, gradeLevel, keyword, tempJobs) => {
        if (salary !== 'all') {
            tempJobs = this.state.jobs.filter(job => job.total_salary_lowest >= salary)
        }
        return this.checkLocation(location, gradeLevel, keyword, tempJobs)
    }

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = error => {
        this.setState({ error: null })
    }

    addJob = (job) => {
        this.setState({
            jobs: [
                ...this.state.jobs,
                job
            ]
        })
    }

    removeJob = (job_id) => {
        const newJobs = this.state.jobs.filter(j => j.id !== job_id)
        this.setState({
            jobs: newJobs
        })
    }

    setJobsData = jobs => {

        this.setState({
            jobs,
            filteredJobs: [...jobs]
        })
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState(
            {
                [name]: value
            }
        )
    }

    setFilter = () => {
        this.setState({
            filtered: false
        })

    }

    filterJobs = (event) => {
        event.preventDefault()
        const {
            jobs,
            keyword,
            salary,
            gradeLevel,
            location
        } = this.state

        //all jobs
        let tempJobs = [...jobs]

        //recursive filter
        tempJobs = this.filter(salary, location, gradeLevel, keyword, tempJobs)

        this.setState({
            filtered: true,
            filteredJobs: [...tempJobs]
        })


    }

    render() {
        const value = {
            jobs: this.state.jobs,
            filteredJobs: this.state.filteredJobs,
            filtered: this.state.filtered,
            keyword: this.state.keyword,
            salary: this.state.salary,
            gradeLevel: this.state.gradeLevel,
            location: this.state.location,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setJobsData: this.setJobsData,
            filterJobs: this.filterJobs,
            handleChange: this.handleChange,
            addJob: this.addJob,
            removeJob: this.removeJob,
            setFilter: this.setFilter
        }
        return (
            <JobsContext.Provider value={value}>
                {this.props.children}
            </JobsContext.Provider>
        )
    }

}

