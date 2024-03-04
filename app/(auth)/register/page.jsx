'use client';

import Link from 'next/link';
import Register from '@/components/Register';
import { ToastContainer } from 'react-toastify';
export default function registerPage() {
  return (
    <div className="flex justify-evenly items-center h-full">
      {/* Left Column */}

      {/* Right Column: Login Form with Glassmorphism Background */}
      <div className="w-full max-w-[500px] mx-auto py-12 px-14 bg-white bg-opacity-20 backdrop-blur-lg backdrop-opacity-95 rounded-lg border border-[#78767A]">
        {/* Your login form components go here */}

        <Register />

        <div className="w-20 mx-auto">
          <hr className="my-2.5" />
        </div>

        <div className="text-center text-white pt-4">
          <p className="p-2.5 mt-2 body-medium">
            Already have an Account?{' '}
            <Link href="/login">
              <span className="font-[500] underline">Login Here</span>
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="colored"
      />
    </div>
  );
}
