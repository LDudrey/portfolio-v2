import React from 'react';
import Header from "./Header"

// Navbar
function Navigation({ currentPage, handlePageChange }) {
  return (
    <div id='side-wrapper' className='col'>
      <Header />
      <nav className="nav container-fluid flex-column bg-dark">
        <ul>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
              className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
