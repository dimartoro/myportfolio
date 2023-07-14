import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import myphoto from '../assets/images/myphoto.jpg';

function AboutMe() {
  return (
      <section id="about-me" className="about grid-item-main">
      <div className="grid-container">
        <div>
          <div className="grid-item">About me</div>
          <div className="grid-item-work">
                <div className="main-app-bk">
                    <img src={myphoto}/>
                </div>
            </div>
        </div>
        <div className="grid-item">
          <article>
            <p>
              I am an energetic and positive person, used to changes and interruptions to adjust my plans. Detailed and goal-oriented, with experience working in inclusive team works.
              I am used to work under pressure without affecting the exceeding results and good vibes of my team. 
              My hobbies are traveling, reading about historical battles, and starting every day with a cup of delicious hot coffee.
            </p>
          </article>

        </div>
      </div>
    </section>
  );

  
}


export default AboutMe;
