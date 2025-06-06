import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "1rem" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
