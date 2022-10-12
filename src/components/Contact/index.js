import React,{Component} from "react";
import {Form, Button, Row, Col, Container} from 'react-bootstrap';
import SendMail from './SendMail';
import './index.css';

class Contact extends Component{
    render(){
      return(
        <section id="contact" className="contact pt-4 mt-4 section-bg">
          <Container className="contact-container">
            <div className="section-title">
            <br/>
              <h2>Contact</h2>
              <p>You can contact me through the email or phone number given below. </p>
            </div>
            <Row className="d-flex justify-content-center">
              {/*<Col>
              <br/>
                <div className="info">
                  <div className="address">
                    <i className="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>South Khulshi, Chittagong.</p>
                  </div>
                </div>
              </Col>*/}
              <Col>
              <br/>
              <div className="info">
                <div className="email">
                  <i className="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p>ziaul.karim497@gmail.com</p>
                  </div>
              </div>
              </Col>
              <Col>
              <br/>
              <div className="info">
                  <div className="phone">
                    <i className="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p>+8801533902849</p>
                  </div>
              </div>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col>
                <Container className="php-email-form">
                  {/*<SendMail/>*/}
                </Container>
              </Col>
            </Row>
          </Container>
        </section>
      );

    }
}

export default Contact;
