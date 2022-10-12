import React from 'react';
import {Form,Button} from 'react-bootstrap';
import $ from 'jquery';
import emailjs from 'emailjs-com';
import contact from './contact.png';

export default function SendMail(){
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'zehank1998template', '.php-email-form', 'user_Ddw2DWOmKt2pmNczByuLZ')
      .then((result) => {
          console.log(result.text);
          window.location.reload(false);
          alert('Your Message has been sent!')
      }, (error) => {
          console.log(error.text);
      });
    };
    return(
      <div>
      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form onSubmit={sendEmail} method="post" action="#"role="form" className="php-email-form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="name">Your Name</label>
              <input type="text" name="user_name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="form-group col-md-6">
              <label for="name">Your Email</label>
              <input type="email" className="form-control" name="user_email" id="email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group">
            <label for="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validate"></div>
          </div>
          <div className="form-group">
            <label for="name">Message</label>
            <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="error-message"></div>
            <div className="sent-message">Your Message has been sent</div>
          </div>
          <div className="text-center"><button type="submit" value="Send">Send Message</button></div>
        </form>
      </div>
      </div>
    )
  }
