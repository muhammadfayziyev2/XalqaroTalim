"use client";

import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import LanguageContext  from "../context/LanguageContext"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const translations = {
    uz: {
        title: "Kurslar",
        register: "Sinov darsiga yoziling",
        kurslar: [
            { nomi: "Turk tili", narx: "650 000 so'm", darslar: ["Haftada 5 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "Yapon tili", narx: "600 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "Ingliz tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "Xitoy tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "IT", narx: "600 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "Koreys tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "Rus tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "CROWE sertifikat", darslar: ["Haftada 5 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
            { nomi: "FEATA sertifikat", darslar: ["Haftada 5 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        ],
    },
    ru: {
        title: "Курсы",
        register: "Записаться на пробный урок",
        kurslar: [
            { nomi: "Турецкий язык", narx: "650 000 сум", darslar: ["Занятия 5 раз в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "Японский язык", narx: "600 000 сум", darslar: ["Занятия 3 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "Английский язык", narx: "500 000 сум", darslar: ["Занятия 3 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "Китайский язык", narx: "500 000 сум", darslar: ["Занятия 3 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "IT", narx: "600 000 сум", darslar: ["Занятия 3 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "Корейский язык", narx: "500 000 сум", darslar: ["Занятия 3 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "Русский язык", narx: "500 000 сум", darslar: ["Занятия 3 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "CROWE сертификат", darslar: ["Занятия 5 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
            { nomi: "FEATA сертификат", darslar: ["Занятия 5 раза в неделю", "Группа: 10-12 учеников", "Длительность урока: 120 минут"] },
        ],
    }
};

const Kurs = () => {
    const { language } = useContext(LanguageContext); 
    const { title, register, kurslar } = translations[language]; 

    return (
        <section id="Kurs">
            <div>
                <div className="kurs_name">
                    <span>{title}</span>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }} 
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {kurslar.map((kurs, index) => (
                        <SwiperSlide key={index}>
                            <div className="kurs_home">
                                <div className="kurs_home_2">
                                    <span className="p_kurs">{kurs.nomi}</span>
                                    <span className="p_kurs">{kurs.narx}</span>
                                    <div className="malumot">
                                        {kurs.darslar.map((dars, i) => (
                                            <p key={i} className="p_kurs_2">- {dars}</p>
                                        ))}
                                    </div>
                                    <Link target="_blank" href='/register' className="btn_kurs">{register}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Kurs;
