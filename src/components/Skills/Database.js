import React, {Component} from 'react';
import QUERY from '../Query';
import DATABASE_QUERY from './query/databasequery';
import ProgressBar from 'react-bootstrap/ProgressBar'
class Database extends Component{
render(){
  const mystyle={
    marginTop: '7px'
  }
  return(
  <QUERY query={DATABASE_QUERY} id={null}>
  {({ data: { skill } }) => {
    return(
      <div data-aos="fade-left">
      {skill.Database.map((item,i)=>{
        return(
          <div>
          <br/>
            <div className="progress">
              <span className="skill"style={mystyle}>{item.Name} <i className="val">{item.Percentage}%</i></span>
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
export default Database;
