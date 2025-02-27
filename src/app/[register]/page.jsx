"use client";

import React, { useState } from "react";
import RegisterPage from "../components/RegisterPage";
import axios from "axios";

const page = () => {
  const [dispatch, setDispatch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendData = async (FullName, phone, courses) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(
        `https://xalqarotalimzayavkabackend-production.up.railway.app/submit`,
        {
          FullName,
          phone,
          courses,
        }
      );
      if (res.status === 200) {
        setDispatch(res.data);
        console.log("Server ishladi:", res.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <RegisterPage sendData={sendData} loading={loading} />
    </div>
  );
};

export default page;