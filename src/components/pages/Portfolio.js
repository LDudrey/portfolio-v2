import React from 'react';
import Project from '../elements/Project';
import parkimg from '../../assets/images/NationalParkLocator.png'
import yggimg from '../../assets/images/Yougoalgirl.png'


const projects = [
  {
    id: 1,
    image: parkimg,
    name: "National Park Locator",
    alt: "screenshot",
    description: "",
    link: "https://hmustain.github.io/National-Park-Locator/",
  },
  {
    id: 2,
    image: yggimg,
    name: "You Go Girl",
    alt: "screenshot",
    description: "",
    link: "https://clj-yougoalgirl.herokuapp.com/",
  },
  {
    id: 3,
    image: "",
    name: "Cyber-Retail API",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 4,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 5,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    link: "",
  },
  {
    id: 6,
    image: "",
    name: "NoSQL",
    alt: "",
    description: "",
    link: "",
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
