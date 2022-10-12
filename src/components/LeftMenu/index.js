import React, {Component,lazy, Suspense} from 'react';
import './index.css';
import $ from 'jquery';
import projicon from "./projicon.png";
const LeftMenuHeader=lazy(()=>import('./Header'));
// import mixitup from 'mixitup';
class LeftMenu extends Component {
componentDidMount(){
  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 10;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });
}

render(){
  return (
    <div>
            <button type="button" className="mobile-nav-toggle d-xl-none" data-aos="none"><i className="icofont-navigation-menu" /></button>
            <header id="header">
            <div className="d-flex flex-column">
            {/* the line above is where you can change the sidebar color */}
              <Suspense fallback={<div>Loading</div>}>
                <LeftMenuHeader myName="Md. Ziaul Karim" />
              </Suspense>
            <nav className="nav-menu">
              <ul>
                {/*<li className="active"><a href="#hero"><i className="bx bx-arrow-to-top" /> <span><h6>Top</h6></span></a></li>*/}
                <li className="active"><a href="#about"><i className="bx bx-user" /> <span><h6>About Me</h6></span></a></li>
                <li><a href="#resume"><i className="bx bx-file-blank" /> <span><h6>CV & Education</h6></span></a></li>
                <li><a href="#skills"><i className="fa fa-tasks" aria-hidden="true"/> <span> <h6>Skills</h6> </span></a></li>
                <li><a href="#portfolio"><i className="fa fa-briefcase"/><h6> Projects & Achievements </h6> </a></li>
                <li><a href="#contact"><i className="bx bx-envelope" /><h6> Contact </h6> </a></li>
              </ul>
            </nav>
            <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu" /></button>
          </div>
          </header>
        </div>
  );
}
}

export default LeftMenu;
