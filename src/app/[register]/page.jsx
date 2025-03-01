"use client";

import React, { useState } from "react";
import RegisterPage from "../components/RegisterPage";
import axios from "axios";

const Page = () => {
  const [loading, setLoading] = useState(false);

  const sendData = async (FullName, phone, courses) => {
    setLoading(true);
    try {
      await axios.post(`https://xalqarotalimzayavkabackend-production.up.railway.app/submit`, {
        FullName,
        phone,
        courses,
      });
    } finally {
      setLoading(false);
    }
  };

  return <RegisterPage sendData={sendData} loading={loading} />;
};

export default Page;
