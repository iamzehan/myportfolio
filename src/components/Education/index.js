import React, {Component} from 'react';
import QUERY from '../Query';
import './index.css';
import {Row, Col, Container,Button } from 'react-bootstrap';
import Experience from './experiences';
import MyPDFViewer from './pdfview';
import EDUCATION_QUERY from './query/education';
import CV_QUERY from './query/cv';

class Education extends Component{
  render(){
    return(
      <section id="resume" className="resume pt-4 mt-4">
          <Container>
              <div className="section-title">
              <br/>
                  <h2>Education & Experience</h2>
              </div>
              <Row>
                  <Col>
                    <div>
                    <QUERY query={CV_QUERY} id={null}>
                        {({ data: { cv } }) => {
                          return(
                                  <div className="resume-item">
                                    <div key={cv.id}>
                                      <h3>{cv.sec_title}</h3>
                                      <p>{cv.desc_text}</p>
                                    </div>
                                  </div>
                      );
                    }
                  }
                    </QUERY>
                    <MyPDFViewer/>
                    </div>
                    </Col>
                        <Row>
                          <Col>
                            <h3 className="resume-title">Education</h3>
                            <div>
                              <QUERY query={EDUCATION_QUERY} id={null}>
                                  {({ data: { almaMaters } }) => {
                                    return(
                                      <div>
                                        {almaMaters.slice(0).reverse().map((item,i)=>{
                                          return(
                                            <div className="resume-item">
                                              <div key={item.id}>
                                                <h4>{item.degree}</h4>
                                                <h6>{item.topic}</h6><br/>
                                                <h5><i class="fa fa-graduation-cap" aria-hidden="true" style={{color:'#17ad6f'}}></i>  {item.session}</h5> <br/>
                                                <p style={{color: '#fff'}}><em><i class="fa fa-university" aria-hidden="true" style={{color: '#39faed'}}></i>  {item.institute}</em></p><br/>
                                                <p style={{color: '#fff'}}><i class="icofont-google-map" aria-hidden="true" style={{color: 'red'}}></i><em>  {item.location}</em></p>
                                              </div>
                                            </div>
                                      );
                                    })}
                                    </div>
                                    );
                                  }
                                  }
                              </QUERY>
                          </div>
                        </Col>
                          <Col>
                            <h3 className="resume-title">Professional Experience</h3>
                            <Experience/>
                          </Col>
                        </Row>
                  </Row>
          </Container>
</section>
);
}
}
export default Education;
