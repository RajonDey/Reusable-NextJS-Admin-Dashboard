"use client";

import React, { useState, useEffect } from "react";
import { axiosLocal } from "@/utils/axios";
import { toast } from "react-toastify";
import Link from "next/link";

const EditUserForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "USER",
  });

  useEffect(() => {
    // Fetch user data by userId and populate the form
    const fetchUserData = async () => {
      try {
        const response = await axiosLocal.get(`/users/${userId}`);
        const userData = response.data;
        setFormData(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        toast.error("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const response = await axiosLocal.put(`/users/${userId}`, formData);
      if (response.status === 200) {
        toast.success("User successfully updated."); // Ensure this line is inside the try block
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Failed to update user:", error);
      toast.error("Failed to update user.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gray-100 p-8 rounded shadow-lg max-w-lg mx-auto my-0 space-y-4 mt-5 relative"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="px-4 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button type="submit" className="main-btn">
        Update User
      </button>
    </form>
  );
};

export default EditUserForm;
