import React from 'react'
import './AboutPage.scss'
import logo from '../../assets/logo-blue.png'
import fesco from '../../assets/fesco.jpg'
import kejibu from '../../assets/kejibu.png'
import hurun from '../../assets/hurun.jpg'


function AboutPage(props) {
    return <div className="AboutPage">
        <h2>What sets Everest International Education apart?</h2>
        <div id='About'>
            <div className='about-card'>
                <img src={logo} id='about-logo'></img>
                <p>At Everest International Education, we are teachers and education professionals with experience in working in both China and the U.S. We are teachers helping teachers. Everest International Education began its teacher recruitment operations with the express goal of helping qualified English-language teachers find good jobs in China.</p>
            </div>
            <div className='about-card'>
                <a href='https://www.fesco.com.cn/english_index.html' target='_blank' id='about-fesco'><img src={fesco}></img></a>
                <p>At Everest International Education, we are teachers and education professionals with experience in working in both China and the U.S. We are teachers helping teachers. </p>
            </div>
            <div className='about-card'>
                <img src={kejibu} id='about-kejibu'></img>
                <p>At Everest International Education, we are teachers and education professionals with experience in working in both China and the U.S. We are teachers helping teachers. </p>
            </div>
            <div className='about-card'>
                <img src={hurun} id='about-hurun'></img>
                <p>At Everest International Education, we are teachers and education professionals with experience in working in both China and the U.S. We are teachers helping teachers. </p>
            </div>

        </div>


    </div>
}

export default AboutPage