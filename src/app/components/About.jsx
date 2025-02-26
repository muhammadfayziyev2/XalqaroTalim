'use client'

import React from 'react'

const About = () => {
  return (
    <section id='About'>
      <div>
        <span className='span_about'>Bizning o'quv markaz haqida</span>
        <div className='home_about'>
          <div className='home_about_2'>
            <img src="bayroq.jpg" alt="" className='img_about' />
            <div className='word_span'>
              <p className='p_about'> Xalqaro sertifikatlar </p>
              <p className='p_about_2'>IELTS, SAT va boshqa dasturlar</p>
            </div>
          </div>
          <div className='home_about_2'>
            <img src="muhit.jpg" alt="" className='img_about' />
            <div className="word_span">
              <p className='p_about'> Qulay muhit </p>
              <p className='p_about_2'> Zamonaviy sinfxonalar va qulay o‘quv muhiti</p>
            </div>
          </div>
          <div className='home_about_2'>
            <img src="metod.jpg" alt="" className='img_about' />
            <div className="word_span">
              <p className='p_about'> Interaktiv metodlar </p>
              <p className='p_about_2'>Smart doskalar, onlayn platformalar, video darslar</p>
            </div>
          </div>
          <div className='home_about_2'>
            <img src="zamonaviy.jpg" alt="" className='img_about' />
            <div className="word_span">
              <p className='p_about'> Zamonaviy dizayn </p>
              <p className='p_about_2'>Bizning o'quv markaz jahon standartlariga to'laqonli javob bera oladi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About