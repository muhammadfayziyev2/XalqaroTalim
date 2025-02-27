"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
 
const Kurs = () => { 
    const kurslar = [
        { nomi: "Turk tili", narx: "650 000 so'm", darslar: ["Haftada 5 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        { nomi: "Yapon tili", narx: "600 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        { nomi: "Ingliz tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        { nomi: "Xitoy tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        { nomi: "IT", narx: "600 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        { nomi: "Koreys tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
        { nomi: "Rus tili", narx: "500 000 so'm", darslar: ["Haftada 3 kun dars", "Guruh: 10-12 o'quvchi", "Dars vaqti: 120 daqiqa"] },
    ];

    return (
        <section id="Kurs">
            <div>
                <div className="kurs_name">
                    <span>Kurslar</span>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
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
                                    <Link target="_blank" href='/register' className="btn_kurs">Sinov darsiga yoziling</Link>
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
