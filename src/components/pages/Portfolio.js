import React from 'react';
import Project from '../elements/Project';

const projects = [
  {
    id: 1,
    image: "images/NationalParkLocator.png",
    name: "National Park Locator",
    alt: "screenshot",
    description: "",
    link: "https://hmustain.github.io/National-Park-Locator/",
  },
  {
    id: 2,
    image: "",
    name: "You Go Girl",
    alt: "",
    description: "",
    link: "",
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
    <div id="portfolio" className='col'>
      <h1>Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
}
