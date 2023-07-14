import React, { useState } from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ContactMe() {

  const [formStatus, setFormStatus] = useState('Send');
  const [validationMessage, setValidationMessage] = useState('');

  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  const validate = (e)=>{
    var value = e.target.value;
    if(value==="" && e.target.id=="name"){
      setValidationMessage("Please enter a name.");
      return;
    }
    if(value==="" && e.target.id=="email"){
      setValidationMessage("Please enter an email.");
      return;
    }
    if(value==="" && e.target.id=="message"){
      setValidationMessage("Please enter a message.");
      return;
    }
    setValidationMessage("");
  }

  return (
      <div className="container mt-5 contact">
      <h2 className="mb-3">Have questions? Contact Me</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input onBlur={validate} className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input onBlur={validate}  className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea onBlur={validate}  className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
        <div className='invalidInput'>
          { validationMessage && validationMessage }
        </div>
      </form>
    </div>
  );
}
export default ContactMe;
