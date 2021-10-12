import React from 'react';

function Project(props){
    return(
        <div className="content">
             <div className="project-text-container">
                <i class="fas fa-arrow-left back-icon" onClick={() => {props.getProject(false)}}></i>
                <h2 className="projects-text" style={{margin: '0'}}>{props.name}</h2>
            </div>
            <div className="project-conteiner">
                <div className="project-input-container">
                    <h3>Project Name</h3>
                    <input className="project-input" value={props.name} onChange={(e) => {props.setName(e.target.value)}}/>
                </div>
                <div className="project-input-container">
                    <h3>Gihub link</h3>
                    <input className="project-input" value={props.github} onChange={(e) => {props.setGithub(e.target.value)}}/>
                </div>
                <div className="project-input-container">
                    <h3>Demo link</h3>
                    <input className="project-input" value={props.demo} onChange={(e) => {props.setDemo(e.target.value)}}/>
                </div>
                <div className="project-input-container">
                    <h3>Image link</h3>
                    <input className="project-input" value={props.bgImage} onChange={(e) => {props.setBgImage(e.target.value)}}/>
                    <img src="./images/exploreba.jpg" className="project-img" alt="project"/>
                </div>
            </div>
            <div className="finish-button" onClick={() => {props.editProject()}}>
                <h3>Finish editing</h3>
            </div>
        </div>
    )
}


export default Project;