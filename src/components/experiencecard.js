import React from 'react';
function ExperienceCard(props){
    return(
        <div className="experience-card">
        <h3>{props.title1} - <span className="school">{props.title2}</span></h3>
        <span className="year">{props.year}</span>
        {props.desc}
        </div>
    );
}
export default ExperienceCard;