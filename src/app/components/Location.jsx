'use client'

import React from 'react'

const Location = () => {
  return (
    <section id='Location'>
      <div>
        <div className='location_name'>
          <span>Bizning manzilimiz</span>
        </div>
        <div className='location'>
          <div className='location_home'>
            <div>
              <a href="https://maps.app.goo.gl/joAhwv5mGZfzVtqy6" target='_blanke'><img src="lokatsiya.png" alt="" className='img_location' /></a>
            </div>
            <div>
              <p className='span_location'>Toshkent davlat transport universiteti</p>
              <p className='ish'>Ish vaqtimiz :</p>
              <p className='vaqt'>9:00 - 18:00</p>
              <p className='vaqt'>Dushanbadan Shanbagacha</p>
              <p className='ish'>Telefon:</p>
              <p className='vaqt'>+998 99 743 02 78</p>
            </div>
          </div>
          <div className='xafta'>
            <div className='xafta_green'>
              <span className='xafta_span'>DU</span>
            </div>
            <div className='xafta_green'>
              <span className='xafta_span'>SE</span>
            </div>
            <div className='xafta_green'>
              <span className='xafta_span'>ChO</span>
            </div>
            <div className='xafta_green'>
              <span className='xafta_span'>PA</span>
            </div>
            <div className='xafta_green'>
              <span className='xafta_span'>JU</span>
            </div>
            <div className='xafta_green'>
              <span className='xafta_span'>SHA</span>
            </div>
            <div className='xafta_red'>
              <span className='xafta_span'>YA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location