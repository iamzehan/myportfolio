import React,{Component,lazy,Suspense} from 'react';
import logo from './logo.svg';
import $ from "jquery";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import { Ripple } from 'react-preloaders2';
// import LeftMenu from './components/LeftMenu';
const LeftMenu=lazy(()=>import('./components/LeftMenu'));
const Cover=lazy(()=>import('./components/Cover'));
const About=lazy(()=>import('./components/About/'));
const Education=lazy(()=>import('./components/Education'));
const Skills=lazy(()=>import('./components/Skills'));
const Contact=lazy(()=>import('./components/Contact'));
const Project=lazy(()=>import('./components/Projects'));
const Footer=lazy(()=>import('./components/Footer'));
function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Suspense fallback={null}>
      <LeftMenu/>
    </Suspense>
    <Suspense fallback={'Loading...'}>
    <main id="main">
      <Cover/>
      <About
        sectionTitle="About"
        professionHeader="Software Engineer"
        birthdate="Birth Date"
        website ="Website"
        phone= "Phone"
        city= "City"
        country="Country"
        age= "Age"
        degree="Education"
        email="Email"/>
      <Education/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      </main>
    </Suspense>
    <Ripple background={'#272829'} color={'#DB8962'} />
    </div>
    </React.Fragment>
  );
}

export default App;
