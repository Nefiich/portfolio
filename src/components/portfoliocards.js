import React from 'react';

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

export default PortfolioCard;