
import React from 'react';
import './App.css';

import ResponsiveMenu from 'react-responsive-navbar';

function WhatIDoCard(props){
  return(
    <div className="card">
      {props.icon}
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

function ExperienceCard(props){
  return(
    <div className="experience-card">
      <h3>{props.title1} - <span className="school">{props.title2}</span></h3>
      <span className="year">{props.year}</span>
      {props.desc}
    </div>
  );
}

function PortfolioCard(props){
  return(
    <div className="portfolio-card">
      <img src={props.img} className="portfolio-card-img"/>
      <div className="portfolio-card-desc">
        <h2>{props.title}</h2>
        <div className="demo-github">
          <a href={props.demo}><p>Demo</p></a>
          <a href={props.github}><span>Github</span></a>
        </div>
      </div>
    </div>
  );
}

function ContactCard(props){
  return(
    <div className="contact-card">
      <div className="contact-icon">
        {props.icon}
      </div>
      <h2>{props.title}</h2>
      <h5>{props.info}</h5>
    </div>
  );
}

//Slow scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


function App() {
  return (
    <div className="App">
      <div className="container">
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
          changeMenuOn="500px"
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

        <div className="header" id="home">
          <div className="header-left">
            <h4>Hello I'm</h4>
            <h1>Emin Nefić</h1>
            <h3>Full Stack Web Developer</h3>
            <p>[dih-vel-uh-per]</p>
            <div className="header-icons-container">
              <a href="https://facebook.com/nefiiich"><i class="fab fa-facebook-f icon"></i></a>
              <a href="https://instagram.com/nefiich"><i class="fab fa-instagram icon"></i></a>
              <a href="https://github.com/nefiich"><i class="fab fa-github icon"></i></a>
              <a href="https://linkedin.com/nefiich"><i class="fab fa-linkedin-in icon"></i></a>
              <a href="mailto: emin.nefic@gmail.com"><i class="fas fa-envelope icon"></i></a>
            </div>
          </div>
          <div className="header-right">
            <div className="img-container">
               <img src="./images/emin.jpg" className="circle-img" alt="emin-img"/>
            </div>
          </div>
        </div>

        <div className="about-me" id="about-me">
          <div className="about-me-right">
            <div className="about-me-img-container">
              <img src="./images/about-me-img.svg" className="about-me-img"/>
            </div>
          </div>
          <div className="about-me-left">
            <h1>About me</h1>
            <p>Hello, I’m a Emin but you can call me Nefich. I'm a web-developer based in Bosnia. I have rich experience in web site design & development. Also I am good at </p>
            <div className="skills-container">
              <span className="skill">HTML5</span>
              <span className="skill">CSS</span>
              <span className="skill">JS</span>
              <span className="skill">React.js</span>
              <span className="skill">Node.js</span>
              <span className="skill">PHP</span>
              <span className="skill">Python</span>
            </div>
          </div>
        </div>
        
        <div className="what-i-do" id="what-i-do">
          <h1>What I do</h1>
          <div className="cards-container">
            <WhatIDoCard icon={<i class="fas fa-code what-i-do-icons"></i>} title="Web Development" desc="Web Devlopment is my main thing. I have strong knowladge of front-end development as well as back-end devlopment and deployment."/>
            <WhatIDoCard icon={<i class="fas fa-mobile-alt what-i-do-icons"></i>} title="Mobile Development" desc="In love with React Native framework, building and deploying reliable Mobile Apps to the App Store."/>
            <WhatIDoCard icon={<i class="fas fa-server what-i-do-icons"></i>} title="REST Apis" desc="Developmnet and Deployment of all types of RestAPIs using Node.js and Express framework"/>
          </div>
        </div>

        <div className="experience" id="experience">
          <div className="education">
            <h1 className="">Education</h1>
            <div className="experience-cards">
              <ExperienceCard title1="Information Technologies" title2="Internationa Burch University" year="2021 - 2024" desc={<p>Grade: Freshman <br/>GPA: 0</p>}/>
              <ExperienceCard title1="High School" title2="Gimnazija 'Gmnazija Muhsin Rizvić'" year="2017 - 2021" desc={<p>GPA: 3.8 / 4.0</p>}/>
            </div>
          </div>
          <div className="work">
            <h1 className="">Work Experience</h1>
            <div className="experience-cards">
              <ExperienceCard title1="Full Stack Developer" title2="Explore.ba" year="2021 - present" desc={<div><p>Responsibilities</p><ul><li>Full stack development of app MVP</li><li>Website development</li><li>UX Research</li><li>Managing the internal App Testing Program</li></ul></div>} />
              <ExperienceCard title1="Software Developer" title2="Zukan d.o.o" year="2020 - 2020" desc={<div><p>Responsibilities</p><ul><li>Created a Software solution for storage management as well as a invoicing program that was connected with the storage database</li></ul></div>}/>
              <ExperienceCard title1="Municipal First Aid Judge" title2="Red Cross Breza" year="2015 - 2018" desc={<div><p>Responsibilities</p><ul><li>Created and thought up competition tasks that middle-school contestants would be greaded on.</li><li>Worked with Doctors and the local Red Cross organisation on grading students.</li></ul></div>}/>
            </div>
          </div>
        </div>

        <div className="portfolio" id="portfolio">
          <h1>Portfolio</h1>
          <div className="portfolio-container">
            <div className="portfolio-cards">
              <PortfolioCard img="./images/portfolio-img.jpg" title="Rock-Paper-Scisors" demo="" github="https://github.com/Nefiich/rock-paper-scissors"/>
              <PortfolioCard img="./images/portfolio-img.jpg" title="Ip-Adress-Tracker" demo="" github="https://github.com/Nefiich/ip-address-tracker"/>
            </div>
            <div className="portfolio-cards">
              <PortfolioCard img="./images/portfolio-img.jpg" title="Countries API" demo="" github="https://github.com/Nefiich/see-countries"/>
              <PortfolioCard img="./images/portfolio-img.jpg" title="Shortly" demo="" github="https://github.com/Nefiich/url-shortener"/>
            </div>
            <div className="portfolio-cards">
              <PortfolioCard img="./images/portfolio-img.jpg" title="Portfolio" demo="" github="https://github.com/Nefiich/portfolio"/>
              
            </div>
          </div>
        </div>

        <div className="contact-me" id="contact">
          <h1>Contact Me</h1>
          <div className="contact-cards">
            <ContactCard icon={<i class="fas fa-envelope"></i>} title="Email" info="emin.nefic@gmail.com"/>
            <ContactCard icon={<i class="fas fa-phone"></i>} title="Phone" info="+387 61 667 477"/>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>All rights reserved © Emin Nefić 2021</h3>
        <div className="icon-container">
          <a href="https://facebook.com/nefiiich"><i class="fab fa-facebook-f icon" style={{padding: '10px 15px'}}></i></a>
          <a href="https://instagram.com/nefiich"><i class="fab fa-instagram icon" style={{padding: '10px 15px'}}></i></a>
          <a href="https://github.com/nefiich"><i class="fab fa-github icon" style={{padding: '10px 15px'}}></i></a>
          <a href="https://linkedin.com/nefiich"><i class="fab fa-linkedin-in icon" style={{padding: '10px 15px'}}></i></a>
          <a href="mailto: emin.nefic@gmail.com"><i class="fas fa-envelope icon" style={{padding: '10px 15px'}}></i></a>
        
        </div>  
      </div>
    </div>
  );
}

export default App;
