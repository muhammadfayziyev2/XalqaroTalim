"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const aboutData = [
    {
      img: "bayroq.jpg",
      title: "Xalqaro sertifikatlar",
      desc: "IELTS, SAT va boshqa dasturlar",
    },
    {
      img: "muhit.jpg",
      title: "Qulay muhit",
      desc: "Zamonaviy sinfxonalar va qulay o‘quv muhiti",
    },
    {
      img: "metod.jpg",
      title: "Interaktiv metodlar",
      desc: "Smart doskalar, onlayn platformalar, video darslar",
    },
    {
      img: "zamonaviy.jpg",
      title: "Zamonaviy dizayn",
      desc: "Bizning o'quv markaz jahon standartlariga to'laqonli javob bera oladi",
    },
    {
      img: "intelekt.jpg",
      title: "Qulay sharoit",
      desc: "O‘quvchilar va talabalar uchun qulay sharoit bilim olish jarayonini yaxshilaydi",
    },
  ];

  return (
    <section id="About">
      <div>
        <span className="span_about">Bizning o'quv markaz haqida</span>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
        >
          {aboutData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="home_about_2">
                <img src={item.img} alt="" className="img_about" />
                <div className="word_span">
                  <p className="p_about">{item.title}</p>
                  <p className="p_about_2">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
