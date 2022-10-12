import React, {Component} from 'react';
import QUERY from '../Query';
import CLI_QUERY from './query/cliquery';
import ProgressBar from 'react-bootstrap/ProgressBar';
class CommanLineInterfaces extends Component{
render(){
  const mystyle={
    marginTop: '7px'
  }
  return(
  <QUERY query={CLI_QUERY} id={null}>
  {({ data: { tool } }) => {
    return(
      <div data-aos="fade-left">
      {tool.CLI.map((item,i)=>{
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
export default CommanLineInterfaces;
