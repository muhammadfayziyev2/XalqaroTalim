"use client";

import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LanguageContext  from "../context/LanguageContext"; // Tilni olish uchun Context
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const translations = {
  uz: {
    title: "Bizning o'quv markaz haqida",
    aboutData: [
      { img: "bayroq.jpg", title: "Xalqaro sertifikatlar", desc: "IELTS, SAT va boshqa dasturlar" },
      { img: "muhit.jpg", title: "Qulay muhit", desc: "Zamonaviy sinfxonalar va qulay o‘quv muhiti" },
      { img: "metod.jpg", title: "Interaktiv metodlar", desc: "Smart doskalar, onlayn platformalar, video darslar" },
      { img: "zamonaviy.jpg", title: "Zamonaviy dizayn", desc: "Bizning o'quv markaz jahon standartlariga to'liq javob bera oladi" },
      { img: "intelekt.jpg", title: "Qulay sharoit", desc: "O‘quvchilar uchun bilim olish jarayonini yaxshilovchi qulay sharoitlar" },
    ],
  },
  ru: {
    title: "О нашем учебном центре",
    aboutData: [
      { img: "bayroq.jpg", title: "Международные сертификаты", desc: "IELTS, SAT и другие программы" },
      { img: "muhit.jpg", title: "Удобная среда", desc: "Современные классы и комфортная учебная атмосфера" },
      { img: "metod.jpg", title: "Интерактивные методы", desc: "Смарт-доски, онлайн-платформы, видеоуроки" },
      { img: "zamonaviy.jpg", title: "Современный дизайн", desc: "Наш учебный центр соответствует мировым стандартам" },
      { img: "intelekt.jpg", title: "Комфортные условия", desc: "Благоприятные условия для повышения знаний студентов" },
    ],
  }
};

const About = () => {
  const { language } = useContext(LanguageContext);
  const { title, aboutData } = translations[language]; // Hozirgi tilga mos matnlarni olish

  return (
    <section id="About">
      <div>
        <span className="span_about">{title}</span>
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
                <img src={item.img} alt={item.title} className="img_about" />
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
