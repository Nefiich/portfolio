import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar';

function NavBar (){
    return(
        <ResponsiveMenu
        menuOpenButton={
        <div className="navbar-mobile">
          <h5 className="navbar-logo">Nefiich</h5>
          <i class="fas fa-bars"></i>
        </div>
      }
        menuCloseButton={<div className="navbar-mobile">
        <h5 className="navbar-logo">Nefiich</h5>
        <i class="fas fa-times"></i>
      </div>}
        changeMenuOn="1140px"
        largeMenuClassName="navbar-desktop"
        smallMenuClassName="navbar-mobile"
        menu={
          <ul className="navbar-container">
            <li className="navbar-logo-desktop">Nefiich</li>
            <div className="navbar-items">
              <a href="#home"><li className="navbar-item">Home</li></a>
              <a href="#about-me"><li className="navbar-item">About Me</li></a>
              <a href="#experience"><li className="navbar-item" >Experience</li></a>
              <a href="#portfolio"><li className="navbar-item">Portfolio</li></a>
              <a href="#contact"><li className="navbar-item">Contact</li></a>
            </div>
          </ul>
        }
      />
    )

};

export default NavBar;