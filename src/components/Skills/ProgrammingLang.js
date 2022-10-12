import React, {Component} from 'react';
import QUERY from '../Query';
import PROGRAMMINGLANG_QUERY from './query/Programming_lang_query';
import ProgressBar from 'react-bootstrap/ProgressBar';
class ProgrammingLang extends Component{
render(){
  const mystyle={
    marginTop: '7px'
  }
  return(
  <>
  <QUERY query={PROGRAMMINGLANG_QUERY} id={null}>
  {({ data: { skill } }) => {
    return(
      <div data-aos="fade-right">
      {skill.Programming_lang.map((item,i)=>{
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
  </>
  );
}
}
export default ProgrammingLang;
