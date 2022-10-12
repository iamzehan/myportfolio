import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./index.css";

const Footer = () => {
  return (
    <section id ="Footer" className="font-small pt-4 mt-4 section-bg">
      <Container className="text-center">
        <br/>
        <Row className="d-flex justify-content-center">
          <Col className="col-lg-md-6">
                <i style={{color:"#fff",fontSize:"24px"}} className="bx bxl-facebook-circle px-2"></i>
                <i style={{color:"#fff",fontSize:"24px"}} className="bx bxl-youtube px-2"></i>
                <i style={{color:"#fff",fontSize:"24px"}} className="bx bxl-linkedin px-2"></i>
                <i style={{color:"#fff",fontSize:"24px"}} className="bx bxl-github px-2"></i>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container>
          <p style={{color: "#fff"}}> &copy; {new Date().getFullYear()} Copyright | Md. Ziaul Karim </p>
        </Container>
      </div>
    </section>
  );
}

export default Footer;
