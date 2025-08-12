import React from 'react';
import Navbar from '../comp/Navbar';
import Footer from '../comp/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

function MainLayout() {
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm.trim()}`);
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
