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

    const getRandomImg = (imgs) => {
        return imgs[Math.floor(Math.random() * Math.floor(3))]
    }

    const { job_id } = props
    const jobLink = `/jobs/${job_id}/apply`
    return (
        <section className='job'>
            <img src={getRandomImg(imgs)} alt="school" />
            <section className='main-info'>
                <ul job_id={props.job_id}>
                    <li>Job Title:  {props.job_title}</li>
                    <li>Course: {props.course}</li>
                    {/* <li>Grade Level: {props.grade_level}</li> */}
                    <li>Salary: {props.total_salary}</li>
                    {/* <li>Minimum degree desired: {props.minimum_degree_required}</li> */}
                    {/* <li>Minimum teaching experience desired: {props.minimum_experience_required}</li> */}
                    <li>Location of school: {props.location}</li>
                    <div className={'.job-' + job_id + ' hidden'} >
                        {/* <li>Textbook Used: {props.textbook_used}</li>
                        <li>Number of courses to teach: {props.number_of_courses_to_teach}</li>
                        <li>Number of sections: {props.number_of_sections}</li>
                        <li>Maximum class size: {props.max_class_size}</li>
                        <li>Total hours of class per week: {props.total_hours_of_class_per_week}</li>
                        <li>Extra duties required: {props.extra_duties_required}</li>
                        <li>Hours of extra duties per week: {props.hours_of_extra_duties_per_week}</li>
                        <li>Preferred degree: {props.preferred_degree}</li>
                        <li>Preferred experience level: {props.preferred_experience_level}</li> */}
                        {/* <li>Native english speaker: {props.native_english_speaker}</li> */}
                        {/* <li>Other qualification: {props.other_qualification}</li> */}
                        <li>Bonuses: {props.bonuses ? 'Yes' : 'No'}</li>
                        <li>Plane ticket reimbursment: {props.plane_ticket_reimbursment ? 'Yes' : 'No'}</li>
                        <li>Paid time off: {props.paid_time_off ? 'Yes' : 'No'}</li>
                        {/* <li>Sick days: {props.sick_days}</li> */}
                        {/* <li>Personal days: {props.personal_days}</li> */}
                        <li>Time off for holidays: {props.time_off_for_holidays ? 'Yes' : 'No'}</li>
                    </div>
                </ul>
                {/* <FontAwesomeIcon className='bounce arrowDown' icon={faArrowCircleDown} onClick={toggleHidden}>More details</FontAwesomeIcon> */}
                <div className='arrow bounce' onClick={() => toggleHidden(props.job_id)}></div>
            </section>
            <Link to={jobLink}>Apply</Link>
        </section>
    )
}

