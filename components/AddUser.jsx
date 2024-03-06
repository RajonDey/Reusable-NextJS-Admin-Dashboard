"use client";

import React, { useState } from "react";
import { axiosLocal } from "@/utils/axios";
import { toast } from "react-toastify";
import Link from "next/link";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "USER", // Default role, could also be 'ADMIN' etc.
    userToken: "", // You would normally generate this on the server
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.password) {
      toast.error("All fields are required.");
      return;
    }

    try {
      // Assuming you are using the 'id' field as the ID
      const newUserData = { ...formData, id: Date.now() }; // Generates a new ID
      const response = await axiosLocal.post("/users", newUserData);
      if (response.status === 201) {
        toast.success("User successfully added.");
        // reset the form
        setFormData({
          fullName: "",
          email: "",
          password: "",
          role: "USER",
          userToken: "",
        });

        // You may want to refresh the user list or navigate away
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Failed to add user:", error);
      toast.error("Failed to add user.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-gray-100 p-8 rounded shadow-lg max-w-md mx-auto my-0 space-y-4 mt-20 relative"
      style={{
        minHeight: "60vh",
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
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
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
        Add User
      </button>
      <div className="absolute top-10 right-10">
        <Link href="/" passHref>
          <button className="main-btn transparent-btn">Go Back</button>
        </Link>
      </div>
    </form>
  );
};

export default AddUserForm;
