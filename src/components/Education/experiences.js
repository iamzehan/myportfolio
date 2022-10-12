import React, {Component} from 'react';
import QUERY from '../Query';
import EXPERIENCE_QUERY from './query/experience';
class Experience extends Component{
render(){
  return(
  <QUERY query={EXPERIENCE_QUERY} id={null}>
  {({ data: { experiences } }) => {
    return(
      <div>
      {experiences.map((item,i)=>{
        return(
          <div className="resume-item">
            <div key={item.id}>
              <h4>{item.Title}</h4>
              <p><a><i class="icofont-google-map" aria-hidden="true" style={{color: 'red'}}></i></a> {item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}}
  </QUERY>
  );
}
}
export default Experience;
