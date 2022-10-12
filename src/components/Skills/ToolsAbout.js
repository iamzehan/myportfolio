import React, {Component} from 'react';
import QUERY from '../Query';
import TOOLS_ABOUT_QUERY from './query/toolsaboutquery';
class ToolsAbout extends Component{
render(){
  return(
  <QUERY query={TOOLS_ABOUT_QUERY} id={null}>
  {({ data: { tool } }) => {
    return(
      <p> {tool.About} </p>
  );
      }}
  </QUERY>
  );
}
}
export default ToolsAbout;
