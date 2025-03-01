"use client";

import React, { useContext } from "react";
import  LanguageContext from "../context/LanguageContext"; 

const translations = {
  uz: {
    title1: "XALQARO TA'LIM,",
    title2: "ILMIY-AMALIY TADQIQOT MARKAZI",
  },
  ru: {
    title1: "МЕЖДУНАРОДНОЕ ОБРАЗОВАНИЕ,",
    title2: "НАУЧНО-ПРАКТИЧЕСКИЙ ИССЛЕДОВАТЕЛЬСКИЙ ЦЕНТР",
  },
};

const Footer = () => {
  const { language } = useContext(LanguageContext); 
  const { title1, title2 } = translations[language]; 

  return (
    <footer className="footer">
      <div className="footer_home">
        <h1 className="h1_footer">{title1}</h1>
        <h1 className="h1_footer">{title2}</h1>
      </div>
    </footer>
  );
};

export default Footer;
