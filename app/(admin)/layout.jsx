'use client';
import Header from '@/components/Header';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
const Body = ({ children }) => <div className="max-container">{children}</div>;

const RootLayout = ({ children }) => {
  useEffect(() => {
    const authToken = localStorage.getItem('userToken');
    const role = localStorage.getItem('role');
    if (!authToken) {
      const authToken = localStorage.getItem('userToken');
      const role = localStorage.getItem('role');
      if (!authToken && !role) {
        redirect('/login');
      }
    } else if (authToken && role !== 'ADMIN' && role !== 'SUPER_ADMIN') {
      redirect('/login');
    }
  }, []);

  return (
    <div>
      <Header />
      <Body>{children}</Body>
    </div>
  );
};

export default RootLayout;
