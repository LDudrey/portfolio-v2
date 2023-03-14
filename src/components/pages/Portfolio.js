import React from 'react';
import Project from '../elements/Project';
import parkimg from '../../assets/images/NationalParkLocator.png'
import yggimg from '../../assets/images/Yougoalgirl.png'
import crafter from '../../assets/images/crafterapi.png'
import cyber from '../../assets/images/cyberapi.png'

const projects = [
  {
    id: 1,
    image: parkimg,
    name: "National Park Locator",
    alt: "screenshot",
    description: "Team project demonstrating experience with Server Side APIs from Mapbox and National Parks.",
    repo: "https://github.com/LDudrey/National-Park-Locator-v2",
    link: "https://hmustain.github.io/National-Park-Locator/",
  },
  {
    id: 2,
    image: yggimg,
    name: "You Go Girl",
    alt: "screenshot",
    description: "Team goal-tracker app using MVC paradigm with RESTful API's and MySQL database",
    repo: "https://github.com/LDudrey/you-goal-girl-v2",
    link: "https://clj-yougoalgirl.herokuapp.com/",
  },
  {
    id: 3,
    image: cyber,
    name: "Cyber-Retail API",
    alt: "screenshot",
    description: "ORM example of an E-Commerce back end using Express.js API, Sequelize and MySQL database.",
    repo: "https://github.com/LDudrey/Cyber-Retail-BackEnd",
    link: "https://github.com/LDudrey/Cyber-Retail-BackEnd",
  },
  {
    id: 4,
    image: crafter,
    name: "Crafter Community API",
    alt: "screenshot",
    description: "A social network app demostrating use of NoSQL database MongoDB.",
    repo: "https://github.com/LDudrey/Crafters-Community-API",
    link: "https://github.com/LDudrey/Crafters-Community-API",
  },
  {
    id: 5,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    repo: "",
    link: "",
  },
  {
    id: 6,
    image: "",
    name: "Equitable Split Calculator",
    alt: "screenshot",
    description: "In-progress application using React.js and Node.js.",
    repo: "https://github.com/LDudrey/Equitable-Split-Calculator",
    link: "https://github.com/LDudrey/Equitable-Split-Calculator",
  },
];

export default function Portfolio() {
  return (
    <div id="portfolio" className='col bg-dark'>
      <h1>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}
