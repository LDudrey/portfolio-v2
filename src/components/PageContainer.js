import React, { useState } from 'react';
import Navigation from './Navigation';
import Portfolio from './pages/Home';
import Aboutme from './pages/Aboutme';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // Setting the State variable and State management method
  // Setting home as the starting page
  const [currentPage, setCurrentPage] = useState('Aboutme');

  // Rendering the page based on which page is selected
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
  }
