import React from 'react';
import Header from "./elements/Header"

// Navbar
function Navigation({ currentPage, handlePageChange }) {
  return (
    <header id='header-nav' className='col bg-dark'>
      <nav className="navbar navbar-expand-lg navbar-dark vh-100">
        <div className='container-fluid flex-lg-column'>
        <Header />
        <div className='collapse navbar-collapse' id="navbarContent">
          <ul className='navbar-nav flex-column'>
            <li className="nav-item m-2">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About Me
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </a>
            </li>
            <li className="nav-item m-2">
              <a
                href="#resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
    
  );
}

export default Navigation;
