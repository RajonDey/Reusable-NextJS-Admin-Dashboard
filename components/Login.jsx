'use client';
import React, { useState } from 'react';
import Form from './custom/Form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { axiosNonSecureInstance } from '@/utils/axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');

  const formFields = [
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      id: 'email',
      placeholder: 'Type email here',
      required: true,
      error: 'email is required',
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      id: 'password',
      placeholder: 'Type password',
      required: true,
      error: 'password is required',
    },
  ];

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here based on the form data
    console.log('Form submitted:', formData);
    
    (async () => {
      try {
        const response = await axiosNonSecureInstance.post('auth/login', {
          email: formData.email,
          password: formData.password,
        });
        console.log(response);
        localStorage.userID = response?.data?.userid;
        localStorage.userToken = response?.data?.token;
        localStorage.role = response?.data?.role;
        localStorage.fullName = response.data?.fullName;


        if (response?.status == 200) {
          toast.success('admin login successful');
          setTimeout(() => {
            router.push('/');
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
          toast.error('internal server error. Please try later');
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
