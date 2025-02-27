'use client'

import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <header className="header">  
           <div>
                <img src="Xalqaro ta’lim.png" alt="" className="header_img" />
                <p className="logo_p">XALQARO TA'LIM, <br /> ILMIY-AMALIY</p>
                <p className="logo_p">TADQIQOT MARKAZI</p>
           </div>
            <ul className="ul_header">
                <li className="li">
                    <ScrollLink to="Kurs" smooth={true} duration={500} className="nav-link">Kurs</ScrollLink>
                </li>
                <li className="li">
                    <ScrollLink to="About" smooth={true} duration={500} className="nav-link">
                        Afzalliklar</ScrollLink>
                </li>
                <li className="li">
                    <ScrollLink to="Location" smooth={true} duration={500} className="nav-link">Manzilimiz</ScrollLink>
                </li>
            </ul>
            <div className="btn_header">
                <Link href="/register" target="_blank" className="btn">
                    Sinov darsiga yoziling
                </Link>
                <select name="language" id="language">
                    <option value="uz">UZ</option>
                    <option value="ru">RU</option>
                </select>
            </div>
        </header>
    );
};

export default Header;
