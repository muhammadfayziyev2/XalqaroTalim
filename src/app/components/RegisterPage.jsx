'use client'

import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const RegisterPage = ({ sendData, loading }) => {
    const [FullName, setFullName] = useState("")
    const [phone, setPhone] = useState("");
    const [courses, setCourses] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!FullName || !phone || !courses) {
            toast.error("Iltimos, barcha maydonlarni to'ldiring!");
            return;
        }

        sendData(FullName, phone, courses);
        toast.success("Ma'lumotlar muvaffaqiyatli yuborildi!");
        setFullName("");
        setPhone("");
        setCourses("");
    };

    return (
        <div>
            <div className='name_register'>
                <h1 className='h1_register'>XALQARO TA'LIM,</h1>
                <h1 className='h1_register'> ILMIY-AMALIY TADQIQOT MARKAZI</h1>
                <span className='span_register'>Uzingizni ma'lumotlaringizni qoldiring</span>
            </div>
            <div className='form_home'>
                <form className='form' onSubmit={handleSubmit}>
                    <label className='label_register'>Familiya va ismingiz</label>
                    <input
                        type="text"
                        className='input_register'
                        value={FullName}
                        onChange={(e) => setFullName(e.target.value)} />
                    <label className='label_register'>Telefon raqamingiz</label>
                    <input
                        type="number"
                        className='input_register'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                    <label className='label_register'>Kurslar</label>
                    <select
                        className='input_register'
                        value={courses}
                        onChange={(e) => setCourses(e.target.value)}>
                        <option value="">Kursni tanlang</option>
                        <option value="Turk tili">Turk tili</option>
                        <option value="Yapon tili">Yapon tili</option>
                        <option value="Xitoy tili">Xitoy tili</option>
                        <option value="Ingliz tili">Ingliz tili</option>
                        <option value="IELTS / CEFR">IELTS / CEFR</option>
                        <option value="IT">IT</option>
                    </select>
                    <div className='btn_register_home'>
                        <button className='btn_register' type="submit"
                            disabled={loading}>{loading ? "Jo'natilmoqda..." : "Jo'natish"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;
