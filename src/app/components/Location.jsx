"use client";

import React, { useContext } from "react";
import  LanguageContext  from "../context/LanguageContext";

const translations = {
  uz: {
    title: "Bizning manzilimiz",
    university: "Toshkent davlat transport universiteti",
    phone: "Tel:",
    workHours: "Ish vaqtimiz:",
    time: "9:00 - 18:00",
    weekDays: ["DU", "SE", "ChO", "PA", "JU", "SHA", "YA"],
  },
  ru: {
    title: "Наш адрес",
    university: "Ташкентский государственный транспортный университет",
    phone: "Тел:",
    workHours: "Рабочее время:",
    time: "9:00 - 18:00",
    weekDays: ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"],
  }
};

const Location = () => {
  const { language } = useContext(LanguageContext); 
  const { title, university, phone, workHours, time, weekDays } = translations[language];

  return (
    <section id="Location">
      <div>
        <div className="location_name">
          <span>{title}</span>
        </div>
        <div className="location">
          <div className="location_home">
            <div>
              <a href="https://maps.app.goo.gl/joAhwv5mGZfzVtqy6" target="_blank">
                <img src="lokatsiya.png" alt="Location" className="img_location" />
              </a>
            </div>
            <div className="ish_vaqt">
              <p className="span_location">{university}</p>
              <span className="ish">{phone}</span>
              <span className="vaqt"> +998 99 743 02 78</span> <br />
              <span className="ish">{workHours}</span>
              <span className="vaqt"> {time}</span>
              <div className="xafta">
                {weekDays.map((day, index) => (
                  <div key={index} className={index === 6 ? "xafta_red" : "xafta_green"}>
                    <span className="xafta_span">{day}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
