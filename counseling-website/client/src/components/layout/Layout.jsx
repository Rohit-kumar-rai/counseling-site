import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 3xl:pt-40">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 