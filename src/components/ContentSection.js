import React, { useState } from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactMe from './ContactMe';
import Resume from './Resume';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function ContentSection(props) {
  
  return (
    
    (props.activeMenu==='Portfolio')?
    <>
      <Portfolio/>
    </>
    : (props.activeMenu==='Contact me')?
    <>
      <ContactMe/>
    </>
    : (props.activeMenu==='Resume')?
    <>
      <Resume/>
    </>
    :
    <>
      <AboutMe/>
    </>
  );
}
export default ContentSection;
