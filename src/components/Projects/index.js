import React, {Component, useState, useEffect} from 'react';
import QUERY from '../Query';
import {Row, Col, Container} from 'react-bootstrap';
import './index.css';
import $ from 'jquery';
import mixitup from 'mixitup';
import 'aos';
import THUMBNAIL_IMG_QUERY from './query/projectsquery';

export function Projects(){
  const [filter, setFilter]=useState(["Website", "Application", "AI_Model"]);
  const[active, setActive]=useState("filter-active");
  const[aos, setAOS]=useState("zoom-in")
  function myCaller(sentFilter,activate,aos){
    setActive(activate);
    setFilter(sentFilter);
    setAOS(aos)
  }

    return(
      <section id="portfolio" className="portfolio d-flex section-bg pt-4 mt-4">
        <Container className="flex pb-4 mb-4">
          <div className="section-title">
            <h2>Projects & Achievements</h2>
            <p>Here are some of my projects and achievements. Feel free to check them out.</p>
          </div>
          <Row className="portfolio portfolio-filters d-flex justify-content-center pt-4 mt-4">
            {/*<Col md={4}></Col>*/}
            <Col md={5} className="portfolio">
              <ul id="portfolio-flters">
                <li data-filter="*" className={active} onClick={() => myCaller(["Website", "Application", "AI_Model"],'filter-active',aos)}>All</li>
                <li data-filter=".filter-card" onClick={() => myCaller(["AI_Model"],'filter-active',aos)}>AI Models</li>
                <li data-filter=".filter-web" onClick={() => myCaller(["Website"],'filter-active',aos)}>Web</li>
                <li data-filter=".filter-app" onClick={() => myCaller(["Application"],'filter-active',aos)}>Certificates</li>
              </ul>
            </Col>
          </Row>
          <Row data-aos="fade" data-aos-delay="100" id="cont">
            <Container>
              <QUERY query={THUMBNAIL_IMG_QUERY} id={1}>
              {({ data: { projects } }) => {
                return(
                  <div className="row portfolio-container d-flex justify-content-center">
                  {projects.map((item,i)=>{
                    if (filter.includes(item.Category)){
                    return(
                        <div className="portfolio-item col-lg-md-6 px-2" data-aos={aos} data-aos-delay="100">
                          <div className="portfolio-wrap">
                            <img src={item.Thumbnail.url} className="img-fluid" alt=""/>
                            <div className="portfolio-links">
                              <a href={item.Thumbnail.url} data-gall="portfolioGallery" className="venobox" title="All"><i className="bx bx-plus"></i></a>
                              <a href={item.URL} title="More Details" target="blank"><i className="bx bx-link"></i></a>
                            </div>
                            <br/>
                          </div>
                        </div>
                    );}})}
                </div>);}}
              </QUERY>
            </Container>
          </Row>
        </Container>
      </section>
    );
}
export default Projects;
