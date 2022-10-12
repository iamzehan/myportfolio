import React, {Component} from 'react';
import QUERY from '../Query';
import FRAMEWORK_QUERY from './query/frameworkquery';
import ProgressBar from 'react-bootstrap/ProgressBar';
class Framework extends Component{
render(){
  const mystyle={
    marginTop: '7px'
  }
  return(
  <QUERY query={FRAMEWORK_QUERY} id={null}>
  {({ data: { skill } }) => {
    return(
      <div data-aos="fade-left">
      {skill.Framework.map((item,i)=>{
        const progress= item.Percentage;
        return(
          <div>
          <br/>
            <div className="progress">
              <span className="skill"style={mystyle}>{item.Name} <i className="val">{progress}%</i></span>
              <div className="progress-bar-wrap">
                <ProgressBar className='ProgressBar' now={item.Percentage}/>
              </div>
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
export default Framework;
