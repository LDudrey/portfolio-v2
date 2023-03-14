import React from 'react';
import resume from '../../assets/files/LydiaDudreyResume.pdf'

export default function Resume() {
  return (
    <div id="resume" className='col vw-100 bg-dark'>
      <h1>Resume</h1>
      <p>
        Download my 
        <a href={resume}> Resume</a>
      </p>

    </div>
  );
}
