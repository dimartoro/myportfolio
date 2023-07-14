import React, { useState } from 'react';
import employeetracker from '../assets/images/EmployeeTracker.png'
import notetaker from '../assets/images/notetaker.png'
import vinylvibes from '../assets/images/vinylvibes.png'
import scheduler from '../assets/images/scheduler.png'
import sidehustle from '../assets/images/sidehustle.png'
import wherewedranking from '../assets/images/WhereWeDranking.png'
import weather from '../assets/images/weather.png'
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function Portfolio() {

  // const [sideHus,setSideHus] = useState(false);
  // const [noteT,setnoteT] = useState(false);
  // const [employeeT,setemployeeT] = useState(false);
  // const [whereTG,setwhereTG] = useState(false);
  // const [workD,setworkD] = useState(false);
  // const [weatherD,setweatherD] = useState(false);

  const handleMouseEnter = (e)=>{
  //   switch(e.target.id){
  //     case 'divSideHustle':
  //       setSideHus(true);
  //     break;
  //     case 'divNoteTaker':
  //       setnoteT(true);
  //     break;
  //     case 'divEmployeeTracker':
  //       setemployeeT(true);
  //     break;
  //     case 'divWhereToGo':
  //       setwhereTG(true);
  //     break;
  //     case 'divWorkDay':
  //       setworkD(true);
  //     break;
  //     case 'divWeather':
  //       setweatherD(true);
  //     break;
  //   default:
  //     break;
  //   }
  }

  const handleMouseLeave = (e)=>{
  //   switch(e.target.id){
  //     case 'divSideHustle':
  //       setSideHus(false);
  //     break;
  //     case 'divNoteTaker':
  //       setnoteT(false);
  //     break;
  //     case 'divEmployeeTracker':
  //       setemployeeT(false);
  //     break;
  //     case 'divWhereToGo':
  //       setwhereTG(false);
  //     break;
  //     case 'divWorkDay':
  //       setworkD(false);
  //     break;
  //     case 'divWeather':
  //       setweatherD(false);
  //     break;
  //   default:
  //     return;
  //     break;
  //   }
  }

  return (
    <section id="my-work" className="work grid-item-main">
      <div className="grid-container">
        <div className="grid-item">My Work</div>
        <div className="grid-item">
          <div className="grid-container-work">
          <div id="divVinyl"  className="grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
              <div><a href="https://vinyl-vibes-lp-cda464cf0a39.herokuapp.com/" target="_blank">Vinyl-Vibes</a></div>
                <a href='https://github.com/dimartoro/vinyl-vibes.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://vinyl-vibes-lp-cda464cf0a39.herokuapp.com/" target="_blank">
                <div className="main-app-bk">
                    <img src={vinylvibes}/>
                </div>
              </a>
            </div>
            <div id="divSideHustle" className="grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
                <div><a href="https://side-hustle.herokuapp.com/" target="_blank">Side Hustle</a></div>
                <a href='https://github.com/dimartoro/side-hustle.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://side-hustle.herokuapp.com/" target="_blank">
                <div className="main-app-bk">
                    <img src={sidehustle}/>
                </div>
              </a>
            </div>
            <div id="divNoteTaker"  className=" grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
              <div><a href="https://ch11-express-js-note-taker.herokuapp.com/" target="_blank">Note Taker</a></div>
                <a href='https://github.com/dimartoro/ch11-express-js-note-taker.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://ch11-express-js-note-taker.herokuapp.com/" target="_blank">
                <div className="main-app-bk">
                    <img src={notetaker}/>
                </div>
              </a>
            </div>
            <div id="divEmployeeTracker" className="grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
              <div><a href="https://github.com/dimartoro/ch12-sql-employee-tracker" target="_blank">Employee Tracker</a></div>
                <a href='https://github.com/dimartoro/ch12-sql-employee-tracker.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://github.com/dimartoro/ch12-sql-employee-tracker" target="_blank">
                <div className="main-app-bk">
                    <img src={employeetracker}/>
                </div>
              </a>
            </div>
            <div id="divWhereToGo"  className="grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
              <div><a href="https://dimartoro.github.io/what-to-do-and-where/" target="_blank">Where We Dranking</a></div>
                <a href='https://github.com/dimartoro/what-to-do-and-where.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://dimartoro.github.io/what-to-do-and-where/" target="_blank">
                <div className="main-app-bk">
                    <img src={wherewedranking}/>
                </div>
              </a>
            </div>
            <div id="divWorkDay" className="grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
              <div><a href="https://dimartoro.github.io/ch5-work-day-scheduler/" target="_blank">Day Scheduler</a></div>
                <a href='https://github.com/dimartoro/ch5-work-day-scheduler.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://dimartoro.github.io/ch5-work-day-scheduler/" target="_blank">
                <div className="main-app-bk">
                    <img src={scheduler}/>
                </div>
              </a>
            </div>
            <div id="divWeather" className="grid-item-work" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className={'singleCol social-media-icons-blue d-flex justify-content-evenly'}>
              <div><a href="https://dimartoro.github.io/ch6-weather-dashboard/" target="_blank">Weather Dashboard</a></div>
                <a href='https://github.com/dimartoro/ch6-weather-dashboard.git' target="_blank">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <a href="https://dimartoro.github.io/ch6-weather-dashboard/" target="_blank">
                <div className="main-app-bk">
                    <img src={weather}/>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  
}


export default Portfolio;
