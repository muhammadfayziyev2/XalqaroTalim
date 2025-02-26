'use client'

import React from 'react'

const Main = () => {
    return (
        <main>
            <div className='main'>
                <div>
                    <span className='span_main'>Bizning o'quv markazimizda</span>
                    <p className='p_main'>Ingliz tili, Xitoy tili, Yapon tili, Turk tili hamda IT sohalari <br /> malakali uztozlar tomonidan mukammal o'rgatilinadi</p>
                </div>
                <div>
                    <img src="xalq.png" alt="#" className='img_main' />
                </div>
            </div>
            <div className='atmosfera'>
                <span className='atm_kurs'>Bizning atmosfera</span>
            </div>
            <div className='video_main'>
                <video height="auto" controls className='video'>
                    <source src="/videos/myvideo.mp4" type="video/mp4" />
                </video>
                <span className='span_video'>
                    "XALQARO TA‘LIM,ILMIY-AMALIY TADQIQOT MARKAZI"da <br /> Turk tilidan TYS imtihoni jarayoni
                </span>
            </div>
        </main>
    )
}

export default Main