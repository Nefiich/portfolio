import React from 'react';


function Projects(props){
    const content = (
        <div className="content">
            <div className="project-text-container">
                <h2 className="projects-text" style={{margin: '0'}}>Projects</h2>
                <i class="fas fa-plus-circle plus-icon"></i>
            </div>
            <div className="content-items">

                {
                    props.loaded ? 
                    props.data.map(project =>( 
                        <div className="item-button" onClick={() => {props.getProject(true, project.id, project.name, project.github, project.demo, project.img)}}>
                            <div className="colored-dot"></div>
                            <h3>{project.name}</h3>
                        </div>
                    )) : <h3>Loading</h3>
                }
            </div>
        </div>
    )    
    return(
        <div style={{width: '100%'}}>
            {props.loaded ? content : 'Loading...'}
        </div>
    );
}

export default Projects;