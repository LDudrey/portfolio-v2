import './App.css';
import React from "react";
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Project />
      <Project />
      <Project />
      <Footer />
    </div>
  );
}

export default App;