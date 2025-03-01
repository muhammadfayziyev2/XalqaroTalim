"use client";

import { createContext, useContext, useState } from "react";

// 🟢 Context yaratish
const LanguageContext = createContext(null);

// 🟢 Provider komponenti
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("uz"); // Default til

    // 🟢 Tilni o‘zgartirish funksiyasi
    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// 🟢 Custom hook
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export default LanguageContext;
