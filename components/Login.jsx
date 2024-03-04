"use client";
import React, { useState } from "react";
import Form from "./custom/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { axiosNonSecureInstance, axiosLocal } from "@/utils/axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  const formFields = [
    {
      label: "Email",
      name: "email",
      type: "email",
      id: "email",
      placeholder: "Type email here",
      required: true,
      error: "email is required",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      id: "password",
      placeholder: "Type password",
      required: true,
      error: "password is required",
    },
  ];

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here based on the form data
    console.log("Form submitted:", formData);

    (async () => {
      try {
        // Send a GET request to your local server to find a user with the given email
        const response = await axiosLocal.get(
          `/users?email=${formData.email}&password=${formData.password}`
        );

        // const response = await axiosNonSecureInstance.post("auth/login", {
        //   email: formData.email,
        //   password: formData.password,
        // });
        localStorage.userID = response?.data[0]?._id;
        localStorage.userToken = response?.data[0]?.userToken;
        localStorage.role = response?.data[0]?.role;
        localStorage.fullName = response?.data[0]?.fullName;

        console.log(response.data)

        if (response?.status == 200) {
          toast.success("admin login successful");
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }
      } catch (err) {
        console.log(err);
        if (err.response?.status === 401) {
          //   setShowToster(true);
          const error = err.response?.data.message;
          toast.error(error);
        } else if (err.response?.data === true) {
          const error = err.response?.data.message;
          toast.error(error);
        } else {
          toast.error("internal server error. Please try later");
        }
      }
    })();
  };

  return (
    <div>
      <Form
        formTitle="Login"
        formFields={formFields}
        onSubmit={handleFormSubmit}
        buttonText="Login"
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Login;
