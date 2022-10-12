import React,{Component} from 'react';
import {Row, Col, Container, Spinner} from 'react-bootstrap';
import './index.css';
import Query from '../Query';
import PROFILE_IMG_QUERY from '../LeftMenu/query/ProfileImg';
import ProfileImage from '../LeftMenu/ProfileImage';
class About extends Component {
  render(){
     const DOB ="1/17/1998";
     let today = new Date();
     let birthDate = new Date(DOB);
     let aged = today.getFullYear() - birthDate.getFullYear();
     let m= today.getMonth() - birthDate.getMonth();
     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
         aged = aged - 1;
     }
     const Age = ({}) => (
        <a>{aged.toString()}</a>
 )
    const { sectionTitle, professionHeader, birthdate, website, phone, city, age, degree, email,country } = this.props;
    return (
    <section id="about" className="about">
    <br/>
      <Container className="content">
        <div className="section-title">
            <h2>{sectionTitle}</h2>
              <p></p>
        </div>
        <Row className="mt-4 pt-4 mb-4 pb-4">
        <Col sm>
          <Query query={PROFILE_IMG_QUERY} id={null}>
            {({ data: { profile } }) => {
              return(
                <div>
                {profile.p_image.map((items,i)=>{
                  return(

                    <div key={items.id}>
                      <div data-aos="zoom-in"><img src={items.url} className="img-fluid" style={{border: "2px solid #fff"}} /></div>
                    </div>
                  );
                }
                )}
              </div>
            );
          }
            }
            </Query>
          </Col>
          <Col className="mt-6 pt-6">
            <div className="profession-title">
              <h3 style={{color: "#DB8962"}}><strong>{professionHeader}</strong> </h3>
            </div>
              <p className="font-italic">
                Guts - Resilience - Honesty - Hardwork - Passion
              </p>
              <Container className="mt-4 pt-4">
                  <ul data-aos="fade-left">
                    <li><i className="icofont-rounded-right"></i><strong>{birthdate}:</strong> 17<sup>th</sup> January, 1998</li>
                    {/*<li><i class="icofont-rounded-right"></i> <strong>{website}:</strong> </li>*/}
                    <li><i className="icofont-rounded-right"></i><strong>{age}:</strong> <Age/></li>
                    <li><i className="icofont-rounded-right"></i><strong>{degree}:</strong><a> B.Sc. in Software Engineering</a></li>
                    <li><i className="icofont-rounded-right"></i><strong>{city}:</strong> Chittagong</li>
                    <li><i className="icofont-rounded-right"></i><strong>{country} Born:</strong> Bangladesh</li>
                    <li><i className="icofont-rounded-right"></i><strong>Present Residence:</strong></li>
                    {/*<li><i className="icofont-rounded-right"></i><strong>{phone} 1:</strong><a>  01533902849</a></li>
                    <li><i className="icofont-rounded-right"></i><strong>{phone} 2:</strong><a>  01689093183</a></li>*/}
                    <li><i className="icofont-rounded-right"></i><strong>{email}</strong> ziaul.karim497@gmail.com</li>
                    {/*<li><i className="icofont-rounded-right"></i><strong>{email} 2:</strong> zehan.kareem@gmail.com</li>*/}
                    {/*<li><i className="icofont-rounded-right"></i><strong>Freelance:</strong> Available</li>*/}
                  </ul>
                <br/>
              </Container>
          </Col>
      </Row>
      </Container>
      <br/>
    </section>
  );
}
}

export default About;
