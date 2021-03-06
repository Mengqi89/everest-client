import 'lazysizes'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import chinaOne from '../../assets/china-1.jpg'
import chinaTwo from '../../assets/china-2.jpg'
import chinaFour from '../../assets/china-4.jpg'
import Typing from 'react-typing-animation'
import logo from '../../assets/logo-blue.png'

import './LandingPage.scss'

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <section className="hero">
          <Typing>
            <h2>Your go-to for</h2>
            <h1>Teaching in China</h1>

          </Typing>
        </section>
        <section id="why-everest">
          <img
            data-src={logo}
            alt='everest logo'
            id='logo-blue'
            className='lazyload'
          ></img>
          <p>We're here to help you get the teaching job you want</p>
          <p>You want to teach. Chinese students want to learn. All you need is a little help. Someone with experience who knows what it's like and understands what you need. Someone to help you navigate the paperwork and negotiate the contracts. Someone to look out for your best interests and make sure you get everything you need to be successful and truly enjoy your experience teaching in China. That’s where we come in, at no cost to you.</p>
        </section>
        <section id="why-china">
          <h2>Why China?</h2>
          <div className="cards-container">
            <div className="description-card">
              <div className="contents">
                <img data-src={chinaFour} alt="" className="lazyload"></img>
                <div className="description">
                  <h3>Rich History Meets Modernity</h3>
                  <p>With a unique combination of rich history and rapidly growing economic advancement, China is an unmatched treasure trove of cultural beauty, exquisite natural wonders, and unparalleled modern achievements. </p>
                </div>
              </div>
            </div>
            <div className="description-card">
              <div className="contents">
                <img data-src={chinaOne} alt="" className="lazyload"></img>
                <div className="description">
                  <h3>Rapidly Growing Cities</h3>
                  <p>Teaching in China gives you the opportunity to experience everything this country has to offer. The Great Wall and the Terracotta Army. The modern allure of the Pudong Skyline, the 798 Art District and the bustling Victoria Harbor. The ancient beauty of the Potala Palace and the Forbidden City, and so much more.</p>
                </div>
              </div>
            </div>
            <div className="description-card">
              <div className="contents">
                <img data-src={chinaTwo} alt="" className="lazyload"></img>
                <div className="description">
                  <h3>Immerse Yourself</h3>
                  <p>Be more than a teacher. Be more than a tourist. Immerse yourself in a vast tapestry of living history, cultural beauty and modern achievements. Teaching in China is truly the opportunity of a lifetime</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="start">
          <h3>Start your adventure today!</h3>
          <Link to="/register">Apply - it's free!</Link>
        </section>
      </div>
    )
  }
}

export default LandingPage