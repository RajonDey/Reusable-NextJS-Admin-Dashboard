'use client';
import Login from '@/components/Login';
import Link from 'next/link';

import { ToastContainer } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

export default function loginPage() {
  const searchParams = useSearchParams();

  return (
    <div className="flex justify-evenly items-center h-full">
      {/* Left Column */}

      {/* Right Column: Login Form with Glassmorphism Background */}
      <div className="w-full max-w-[500px] mx-auto py-12 px-14 bg-white bg-opacity-20 backdrop-blur-lg backdrop-opacity-95 rounded-lg border border-[#78767A]">
        {/* Your login form components go here */}
        <Login />
        <div className="w-20 mx-auto">
          <hr className="my-2.5" />
        </div>

        <div className="text-center text-white pt-4">
          <p className="p-2.5 my-2 body-medium">
            Forgot your password ?{' '}
            <Link href="/forgot-password">
              <span className="font-[500] underline">Click here</span>
            </Link>
          </p>
          <p className="p-2.5 mt-2 body-medium">
            Don't have account,{' '}
            <Link
              href={{
                pathname: '/register',
                query: {
                  role: searchParams.get('role'),
                },
              }}
            >
              <span className="font-[500] underline">Register Here</span>
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
