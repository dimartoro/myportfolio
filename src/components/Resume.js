import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import imageResume from '../assets/images/resume.png'
import myResume from '../assets/documents/Resume.docx'

function Resume() {
  return (
    <section id="about-me" className="about grid-item-main">
      <div>
        <div>
          <h1>Click on the image to get the latest version of my resume.</h1>
        </div>
        <a href={myResume} download>
          <img className='imgResume' src={imageResume} alt="resume"/>
        </a>
      </div>
    </section>
  );
}


export default Resume;
