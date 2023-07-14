import React, { useState } from 'react';
import {Container} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';



function FooterSection() {
  return (
    <Container>
        {/* <h1 className='text-center'>Diana Castro</h1> */}
        <hr/>
        <div className='singleCol social-media-icons-blue d-flex justify-content-evenly'>
          <a href='https://github.com/dimartoro' target="_blank">
            <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href='https://github.com/dimartoro' target="_blank">
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a href='https://github.com/dimartoro' target="_blank">
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href='https://github.com/dimartoro' target="_blank">
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
    </Container>
  );
}

export default FooterSection;
