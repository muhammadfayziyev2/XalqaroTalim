"use client";

import React, { useContext } from "react";
import LanguageContext  from "../context/LanguageContext"; // Tilni olish uchun Context

const translations = {
    uz: {
        mainText: "Bizning o'quv markazimizda",
        description:
            "Ingliz, Xitoy, Yapon, Koreys, Rus va Turk tillari hamda IT sohasida\nmalakali ustozlar tomonidan mukammal o'rgatiladi \nva logistika bo'yicha FEAT sertifikati, \nxalqarto CROW sertifikatlariga tayyorlov kurslari mavjud",
        atmosphere: "Bizning atmosfera",
        videoText:
            '"XALQARO TA‘LIM, ILMIY-AMALIY TADQIQOT MARKAZI"da \nTurk tilidan TYS imtihoni jarayoni',
    },
    ru: {
        mainText: "В нашем учебном центре",
        description:
            "Английский, Китайский, Японский, Корейский, Русский и Турецкий языки, а также IT\nпреподаются опытными наставниками \nесть подготовительные курсы для получения сертификатов CROW и FEAT",
        atmosphere: "Наша атмосфера",
        videoText:
            'В "Международном образовательном,\n научно-практическом \nисследовательском центре"\nпроцесс экзамена TYS по турецкому языку',
    },
};

const Main = () => {
    const { language } = useContext(LanguageContext);
    const { mainText, description, atmosphere, videoText } = translations[language];

    return (
        <main>
            <div className="main">
                <div>
                    <span className="span_main">{mainText}</span>
                    <p className="p_main">
                        {description.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line} <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
            <div className="atmosfera">
                <span className="atm_kurs">{atmosphere}</span>
            </div>
            <div className="video_main">
                <video height="auto" controls className="video">
                    <source src="/videos/myvideo.mp4" type="video/mp4" />
                </video>
                <span className="span_video">
                    {videoText.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line} <br />
                        </React.Fragment>
                    ))}
                </span>
            </div>
        </main>
    );
};

export default Main;
