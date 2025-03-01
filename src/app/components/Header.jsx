'use client'

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import LanguageContext  from "../context/LanguageContext";


const translations = {
    uz: { 
        kurs: "Kurs",
        afzalliklar: "Afzalliklar",
        manzil: "Manzilimiz",
        register: "Sinov darsiga yoziling",
    },
    ru: {
        kurs: "Курс",
        afzalliklar: "Преимущества",
        manzil: "Наш адрес",
        register: "Запишитесь на пробный урок",
    }
};
const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    return (
        <header className="header">
            <div>
                <img src="xalq.png" alt="" className="header_img" />
            </div>
            <ul className="ul_header">
                <li className="li">
                    <ScrollLink to="Kurs" smooth={true} duration={500} className="nav-link">
                        {translations[language].kurs}
                    </ScrollLink>
                </li>
                <li className="li">
                    <ScrollLink to="About" smooth={true} duration={500} className="nav-link">
                        {translations[language].afzalliklar}
                        </ScrollLink>
                </li>
                <li className="li">
                    <ScrollLink to="Location" smooth={true} duration={500} className="nav-link">
                        {translations[language].manzil}
                    </ScrollLink>
                </li>
            </ul>
            <div className="btn_header">
                <Link href="/register" target="_blank" className="btn">
                    {translations[language].register}
                </Link>
                <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                </select>
            </div>
        </header>
    );
};

export default Header;