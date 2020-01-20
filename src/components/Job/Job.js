import React from 'react'
import { Link } from 'react-router-dom'
// import schoolJobImg from '../../assets/school-job-img.jpg'
import './Job.scss'
import imgs from '../../assets/schoolImgs'

export default function Job(props) {
    function toggleHidden(jobId) {
        let className = '.job-' + jobId
        let element = document.getElementsByClassName(className)
        if (element[0].classList.contains('hidden')) {
            element[0].classList.remove('hidden')
        } else {
            element[0].classList.add('hidden')
        }
    }

    // const getRandomImg = (imgs) => {
    //     return imgs[Math.floor(Math.random() * Math.floor(3))]
    // }

    const { job_id } = props
    const jobLink = `/jobs/${job_id}/apply`
    return (
        <section className='job'>
            <img src={imgs} alt="school" />
            <section className='main-info'>
                <h3><a href={props.full_description} id='title'>{props.job_title}</a></h3>
                <ul>
                    <li>Vacancies:  {props.vacancies}</li>
                    <li>Course: {props.course}</li>
                    <li>Salary: ¥{props.total_salary_lowest} {props.total_salary_highest ? (`~ ¥${props.total_salary_highest}`) : null}</li>
                    <li>Location: {props.location}</li>
                </ul>
                <ul className={'.job-' + job_id + ' hidden'} >
                    <li>Bonuses: {props.bonuses ? 'Yes' : 'No'}</li>
                    <li>Plane ticket reimbursment: {props.plane_ticket_reimbursment ? 'Yes' : 'No'}</li>
                    <li>Paid time off: {props.paid_time_off ? 'Yes' : 'No'}</li>
                    <li>Time off for holidays: {props.time_off_for_holidays ? 'Yes' : 'No'}</li>
                </ul>

                {/* <FontAwesomeIcon className='bounce arrowDown' icon={faArrowCircleDown} onClick={toggleHidden}>More details</FontAwesomeIcon> */}
                <div className='arrow bounce' onClick={() => toggleHidden(props.job_id)}></div>
            </section>
            <Link id='apply-button' to={jobLink}>Apply</Link>
        </section>
    )
}

