
import React from 'react';
import './App.css';

import ResponsiveMenu from 'react-responsive-navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ResponsiveMenu
          menuOpenButton={<div><i class="fas fa-bars"></i></div>}
          menuCloseButton={<div><i class="fas fa-times"></i></div>}
          changeMenuOn="500px"
          largeMenuClassName="navbar-desktop"
          smallMenuClassName="navbar-mobile"
          menu={
            <ul className="navbar-container">
              <li className="navbar-logo">Nefiich</li>
              <div className="navbar-items">
              <a href="#"><li className="navbar-item">Home</li></a>
              <a href="#"><li className="navbar-item">About Me</li></a>
              <a href="#"><li className="navbar-item" >Experience</li></a>
              <a href="#"><li className="navbar-item">Portfolio</li></a>
              <a href="#"><li className="navbar-item">Contact</li></a>
              </div>
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default App;
