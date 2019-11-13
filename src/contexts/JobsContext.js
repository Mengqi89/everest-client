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

    filter = (salary, location, tempJobs) => {
        return this.checkSalary(salary, location, tempJobs)
    }

    checkLocation = (location, tempJobs) => {
        if (location !== '') {
            tempJobs = tempJobs.filter(job => job.location.includes(location))
        }
        return tempJobs
    }

    checkSalary = (salary, location, tempJobs) => {
        if (salary !== 'all') {
            tempJobs = this.state.jobs.filter(job => job.total_salary_lowest >= salary)
        }
        return this.checkLocation(location, tempJobs)
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

        tempJobs = this.filter(salary, location, tempJobs)

        //filter by grade level
        if (gradeLevel !== 'all') {
            let tempArr = []
            if (gradeLevel === 'kindergarten') {
                tempJobs = tempJobs.filter(jobs => jobs.grade_level === 'kindergarten')
            }
            if (gradeLevel === 'elementary') {
                for (let i = 1; i < 6; i++) {
                    tempJobs.forEach(job => {
                        if (job.grade_level.match(/\d+/g) && job.grade_level.match(/\d+/g)[0] === (i).toString()) {
                            tempArr.push(job);
                        }
                    })
                }
                tempJobs = tempArr
            }
            if (gradeLevel === 'middle') {
                for (let i = 6; i < 9; i++) {
                    tempJobs.forEach(job => {
                        if (job.grade_level.match(/\d+/g) && job.grade_level.match(/\d+/g)[0] === (i).toString()) {
                            tempArr.push(job);
                        }
                    })
                }
                tempJobs = tempArr
            }
            if (gradeLevel === 'high') {
                for (let i = 9; i < 13; i++) {
                    tempJobs.forEach(job => {

                        if (job.grade_level.match(/\d+/g) && job.grade_level.match(/\d+/g)[0] === (i).toString()) {
                            tempArr.push(job);
                        }
                    })
                }
            }
            //filter by keyword
            if (keyword !== '') {
                function includesStr(values, str) {
                    return values.map(function (value) {
                        return String(value)
                    }).find(function (value) {
                        return value.includes(keyword)
                    })
                }

                tempJobs = tempJobs.filter(function (item) {
                    return includesStr(Object.values(item), keyword)
                })
            }


            // //filter by location
            // if (location !== '') {
            //     tempJobs = jobs.filter(job => job.location.includes(location))
            // }

            // change state
            this.setState({
                filtered: true,
                filteredJobs: [...tempJobs]
            })


        }
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

