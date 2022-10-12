import React, {Component} from "react";
import $ from 'jquery';
import './index.css';
import {Row, Col, Container } from 'react-bootstrap';
import ProgrammingLang from './ProgrammingLang';
import Framework from './Framework';
import SkillAbout from './SkillAbout';
import ToolsAbout from './ToolsAbout';
import Tools from './Tools';
import Database from './Database';
import CommanLineInterfaces from './CommandLineInterfaces';
import ContentManagementSystems from './ContentManagementSystems';
class Skills extends Component {
  componentWillMount(){
        $('.progress .progress-bar').each(function() {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }
render(){
  const mystyle={
    marginTop: '7px'
  }
  return (
    <section id="skills" className="skills pt-4 mt-4 section-bg">
      <Container>
        <div className="section-title">
        <br/>
          <h2>Skills</h2>
            <SkillAbout/>
        </div >
          <Row className="pt-4 mt-4">
            <Col xs={6} md={6}><h3  className="text-center"  style={{color: '#DB8962',fontWeight:"bold", fontSize:"24px"}}> Programming Languages</h3></Col>
            <Col xs={6} md={6}><h3  className="text-center"  style={{color: '#DB8962',fontWeight:"bold", fontSize:"24px"}}> Frameworks </h3></Col>
          </Row>
          <Row>
           <Col xs={6} md={6}><ProgrammingLang/></Col>
           <Col xs={6} md={6}><Framework/></Col>
          </Row>
      </Container>
      <Container>
        <br/>
        <div className="section-title pt-4 mt-4">
          <h2>Tools I can use</h2>
          <ToolsAbout/>
        </div>
        <br/>
          <Row className="pt-4 mt-4">
          <Col xs={6} md={6}><h3  className="text-center"  style={{color: '#DB8962', fontWeight:"bold",fontSize:"24px"}}> Tools & Softwares </h3></Col>
          <Col xs={6} md={6}><h3  className="text-center"  style={{color: '#DB8962', fontWeight:"bold",fontSize:"24px"}}> CLI </h3></Col>
          </Row>
          <Row>
          <Col xs={6} md={6}><Tools/></Col>
          <Col xs={6} md={6}><CommanLineInterfaces/></Col>
          </Row>
        <br/>
          <Row className="pt-4 mt-4">
            <Col xs={6} md={6}><h3 className="text-center" style={{color: '#DB8962', fontWeight:"bold",fontSize:"24px"}}> CMS </h3></Col>
            <Col xs={6} md={6}><h3 className="text-center" style={{color: '#DB8962', fontWeight:"bold",fontSize:"24px"}}> Database & Query</h3></Col>
          </Row>
          <Row>
          <Col xs={6} md={6}><ContentManagementSystems/></Col>
          <Col xs={6} md={6}><Database/></Col>
          </Row>
          <br/>
        </Container>
    </section>
  );
}
}


export default Skills;
