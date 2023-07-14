import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ContactMe() {
  return (
    <section id="contact-me" className="contact grid-item-main">
      <div className="grid-container">
        <div className="grid-item">Contact me</div>
        <div className="grid-item">
        <ul className="ul-contact-me">
          <li>
            <a href="#phone">980-279-2784</a>
          </li>
          <li>
            <a href="#email">dimartoro@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/dimartoro" target="_blank">GitHub</a>
          </li>
        </ul>
      </div>
      </div>
    </section>
  );

  
}


export default ContactMe;
