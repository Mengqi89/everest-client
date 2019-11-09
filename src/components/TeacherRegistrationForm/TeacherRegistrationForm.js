import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import NationalityList from './NationalityList'
import './TeacherRegistrationForm.scss'
import TeacherApiService from '../../services/teacher-api-service'
// import TokenService from '../../services/token-service'

function TeacherRegistrationForm(props) {
    const [ error, setError ] = useState(null)

    const handleSubmit = ev => {
        ev.preventDefault()

        const { username, email, password, first_name, last_name, age, sex, race, nationality, native_speaker,
            married, highest_degree, field_of_degree, school, certification, years_of_experience,
            years_in_china, years_teaching_abroad } = ev.target

        const newTeacher = {
            username: username.value,
            email: email.value,
            password: password.value,
            first_name: first_name.value,
            last_name: last_name.value,
            age: age.value,
            sex: sex.value,
            race: race.value,
            nationality: nationality.value,
            native_speaker: native_speaker.value,
            married: married.value,
            highest_degree: highest_degree.value,
            field_of_degree: field_of_degree.value,
            school: school.value,
            certification: certification.value,
            years_of_experience: years_of_experience.value,
            years_in_china: years_in_china.value,
            years_teaching_abroad: years_teaching_abroad.value
        }
        console.log('newTeacher', newTeacher)
        TeacherApiService.postTeacher(newTeacher)
            .then(res => 
                username.value = '',
                email.value = '',
                password.value = '', 
                first_name.value = '', 
                last_name.value = '', 
                age.value = '', 
                sex.value = '', 
                race.value = '', 
                nationality.value = '', 
                native_speaker.value = '',
                married.value = '', 
                highest_degree.value = '', 
                field_of_degree.value = '', 
                school.value = '', 
                certification.value = '', 
                years_of_experience.value = '',
                years_in_china.value = '', 
                years_teaching_abroad.value = '',
            )
            // .then(res => 
            //     TeacherApiService.postLogin({username: newTeacher.username, password: newTeacher.password})
            // )
            .then(res => {
                // TokenService.saveAuthToken(res.authToken)
                // TokenService.saveUserType('teacher')
                // props.onSubmitSuccess()
                props.history.push('/login')
            })
            .catch(res => 
                setError(res.error)
            )
    }

    return (
        <section>
            {/* <h3>Your teaching experience in China begins here!</h3> */}
            <form className='form teacher-registration' onSubmit={handleSubmit}>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>

                <label htmlFor='teacher-username'>Username</label>
                <input id='teacher-username' type='text' name='username' required></input>

                <label htmlFor='teacher-email'>Email</label>
                <input id='teacher-email' type='text' name='email' required></input>

                <label htmlFor='teacher-password'>Password</label>
                <input id='teacher-password' type='password' 
                title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more 
                characters' name='password' required></input>

                <label htmlFor='teacher-firstname'>First Name</label>
                <input id='teacher-firstname' type='text' name='first_name' required></input>

                <label htmlFor='teacher-lastname'>Last Name</label>
                <input id='teacher-lastname' type='text' name='last_name' required></input>

                <label htmlFor='teacher-age'>Age</label>
                <input id='teacher-age' type='number' name='age' min='0' required></input>

                <label htmlFor='teacher-sex'>Gender</label>
                <select id='teacher-sex' name='sex' required>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Others'>Others</option>
                </select>

                <label htmlFor='teacher-nationality'>Nationality</label>
                <NationalityList id='teacher-nationality'/>

                <label htmlFor='race'>Ethnicity</label>
                <select id='race' name='race' defaultValue='' required>
                    <option value='' disabled>--select one--</option>
                    <option value='African American'>African American</option>
                    <option value='Asian'>Asian</option>
                    <option value='Native American'>Native American</option>
                    <option value='Latino'>Latino</option>
                    <option value='Pacific Islander'>Pacific Islander</option>
                    <option value='Multiracial'>Multiracial</option>
                    <option value='White'>White</option>
                    <option value='Other'>Other</option>
                </select>

                <label htmlFor='teacher-native-speaker'>Are You a Native Speaker of English?</label>
                <select id='teacher-native-speaker' name='native_speaker' defaultValue='true' required>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                </select>

                <label htmlFor='teacher-married'>Marriage Satus</label>
                <select id='teacher-married' name='married' defaultValue='' required>
                    <option value='' disabled>--select one--</option>
                    <option value='Married'>married</option>
                    <option value='Single'>single</option>
                    <option value='Domestic-partner'>domestic partner</option>
                </select>

                <label htmlFor='teacher-education'>Education</label>
                <select id='teacher-education' name='highest_degree' defaultValue='' required>
                    <option value='' disabled='disabled'>-- select one --</option>
                    <option value='No formal education'>No formal education</option>
                    <option value='Primary education'>Primary education</option>
                    <option value='Secondary education'>Secondary education or high school</option>
                    <option value='GED'>GED</option>
                    <option value='Vocational qualification'>Vocational qualification</option>
                    <option value="Bachelor's degree">Bachelor's degree</option>
                    <option value="Master's degree">Master's degree</option>
                    <option value='Doctorate or higher'>Doctorate or higher</option>
                </select>

                <label htmlFor='teacher-degree'>Degree</label>
                <input id='teacher-degree' type='text' name='field_of_degree' required></input>

                <label htmlFor='teacher-school'>College Attended</label>
                <input id='teacher-school' type='text' name='school' defaultValue='None' required></input>

                <label htmlFor='teacher-certification'>Certification</label>
                <select id='teacher-certification' name='certification' defaultValue='None' required>
                    <option value='None'>None</option>
                    <option value='TEFL'>TEFL</option>
                    <option value='TESOL'>TESOL</option>
                    <option value='TEFL/TESOL'>TEFL/TESOL</option>
                </select>

                <label htmlFor='teacher-experience'>Teaching Experience (in years)</label>
                <input id='teacher-experience' type='number' name='years_of_experience' defaultValue='0' min='0' required></input>

                <label htmlFor='teacher-experience-inChina'>Experience Teaching In China</label>
                <select id='teacher-experience-inChina' name='years_in_china' defaultValue='0' required>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3+</option>
                </select>

                <label htmlFor='teacher-experience-notChina'>Experience Teaching - Other Countries</label>
                <select id='teacher-experience-notChina' name='years_teaching_abroad' defaultValue='0' required>
                    <option value='0'>0</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3+</option>
                </select>

                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default withRouter(TeacherRegistrationForm)