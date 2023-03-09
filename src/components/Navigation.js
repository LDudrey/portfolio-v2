import React from 'react';
import '../styles/Navigation.css';

const styles = {
    background: {
    },
   }
  
// Navbar
   function Navigation() {
    return (
      <nav style={styles.navigation} className="navigation">
        <a href="/">About Me</a>
        <a href="/">Portfolio</a>
        <a href="/">Contact</a>
        <a href="/">Resume</a>
      </nav>
    );
  }
  
  export default Navigation;
  