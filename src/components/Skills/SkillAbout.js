import React, {Component} from 'react';
import QUERY from '../Query';
import ABOUT_QUERY from './query/skillaboutquery';
class SkillAbout extends Component{
render(){
  return(
  <QUERY query={ABOUT_QUERY} id={null}>
  {({ data: { skill } }) => {
    return(
      <p> {skill.About} </p>
  );
      }}
  </QUERY>
  );
}
}
export default SkillAbout;
