import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer'
import AISummitLogo from './img/AISummitLogo.png';
import GDSCLogo from './img/GDSCMPSTME.png';
import Gameframe from './Gameframe/Gameframe'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <div className="row waverow">
            <svg className="wavebackground" width="100%" height="100%" id="svg" viewBox="0 35 1440 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#0693e3ff"></stop><stop offset="95%" stopColor="#9900efff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 105.89285714285714,180.39285714285714 211.78571428571428,160.78571428571428 322,179 C 432.2142857142857,197.21428571428572 546.7500000000001,253.25 684,252 C 821.2499999999999,250.75 981.2142857142858,192.21428571428572 1111,174 C 1240.7857142857142,155.78571428571428 1340.392857142857,177.89285714285714 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
            <img src={AISummitLogo} className="summitLogo" />
            <img src={GDSCLogo} className="gdscLogo" />
          </div>
          <div className="row framerow">
            {/* <Gameframe/> */}
            <Routes>
              <Route exact path='/' element={<Gameframe />} />
            </Routes>
          </div>
          <div className="row footerrow">
            <Footer />
          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;
