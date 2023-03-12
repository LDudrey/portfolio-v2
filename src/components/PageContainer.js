import React, { useState } from 'react';
import Navigation from './Navigation';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';

export default function PageContainer() {
  // Setting the State variable and State management method
  // Setting home as the starting page
  const [currentPage, setCurrentPage] = useState('About');

  // Rendering the page based on which page is selected
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div id="pagecontainer" className='row p-0'>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
  }
