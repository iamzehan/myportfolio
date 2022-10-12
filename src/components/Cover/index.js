import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Typical from 'react-typical';
import DigitalClock from './DigitalClock';
import myCover from './my cover.png';
import './index.css';


const list=[
  {
    "id": 1,
    "Message": "Welcome!",
    "hobbies": [
      "I am Zia! 👋",1000,
      "You can call me Zehan",1000,
      "I am a Software Engineer </>",1000,
      "A Data Science enthusiast 📊",1000,
      "A WebApp Developer ",1000,
      "A Researcher",1000
    ]
  }
]
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state ={ list };
  }
  render(){
  // const { myName } = this.props;
  // const steps = ;
  return (
    <div className="text-center">
    {this.state.list.map(item => (
    <section id="hero" key={item.id} className="d-flex flex-column justify-content-center align-items-center">
        <Container className="hero hero-container" style={{alignment:"center"}}>
          <Row>
            <Col md>
              <h1>{item.Message}</h1>
              <h2><span className="typed"><Typical wrapper="span" steps={item.hobbies} loop={Infinity} className={'caca'} /></span></h2>
            </Col>
            <Col md>
            {/*<img src={myCover} style={{align:"right"}}/>*/}
              <DigitalClock/>
            </Col>
          </Row>
        </Container>
      </section>
    ))}
      </div>
  );
}
}
export default Cover;
