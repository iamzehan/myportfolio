import React, {Component, lazy, Suspense} from 'react';
const ProfileImage=lazy(()=>import('./ProfileImage'));
class LeftMenuHeader extends Component {

  render(){
    const { myName } = this.props;
    return(
      <div className="d-flex flex-column" >
      <div className="profile img-fluid rounded-circle">
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileImage/>
      </Suspense>
        <h1  className="text-light"><a>{ myName }</a></h1>
        <div className="header social-links mt-3 text-center">
          <a href="https://www.twitter.com/i_am_zehan" className="twitter" target="blank"><i className="bx bxl-twitter" /></a>
          <a href="https://www.facebook.com/i.am.zehan" className="facebook" target="blank"><i className="bx bxl-facebook" /></a>
          <a href="https://www.instagram.com/__iamzehan__" className="instagram" target="blank"><i className="bx bxl-instagram" /></a>
          <a href="https://github.com/iamzehan" className="google-plus" target="blank"><i className="bx bxl-github"/></a>
          <a href="https://www.linkedin.com/in/ziaul-karim-b45456140" className="linkedin" target="blank"><i className="bx bxl-linkedin" /></a>
        </div>
        </div>
      </div>
    );
  }
}
export default LeftMenuHeader;
