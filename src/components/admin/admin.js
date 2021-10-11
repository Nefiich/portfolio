import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Projects(props){

    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);
    const content = (
        <div className="content">
            <div className="project-text-container">
                <h2 className="projects-text">Projects</h2>
            </div>
            <div className="content-items">
                <div className="item-button" onClick={props.onClick}>
                    <div className="colored-dot"></div>
                    <h3>Portfolio</h3>
                </div>
                {
                    data.map(project =>( 
                        <div className="item-button">
                        <div className="colored-dot"></div>
                        <h3>{project.name}</h3>
                    </div>
                    ))
                }
            </div>
        </div>
    )

    useEffect(async () => {
        const result = await axios.get(
          'https://ancient-escarpment-01509.herokuapp.com/api/projects',
        ).then(function(response) {
            setData(response.data)
            setLoaded(true)
            console.log(response.data)
        });
      }, []);


      
    console.log(loaded);

    console.log(data[1])
    return(
        <div>
            {loaded ? content : 'Loading...'}
       </div>
    );
}


function Project(props){

    const [name, setName] = useState();
    const [github, setGithub] = useState();
    const [demo, setDemo] = useState();
    const [bgImage, setBgImage] = useState();
    return(
        <div className="content">
             <div className="project-text-container">
                 <i class="fas fa-arrow-left" onClick={props.onClick}></i>
                <h2 className="projects-text" style={{margin: '0'}}>Portfolio</h2>
            </div>
            <div className="project-conteiner">
                <div className="project-input-container">
                    <h3>Project Name</h3>
                    <input className="project-input" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="project-input-container">
                    <h3>Gihub link</h3>
                    <input className="project-input" value={github} onChange={(e) => {setGithub(e.target.value)}}/>
                </div>
                <div className="project-input-container">
                    <h3>Demo link</h3>
                    <input className="project-input" value={demo} onChange={(e) => {setDemo(e.target.value)}}/>
                </div>
                <div className="project-input-container">
                    <h3>Image link</h3>
                    <input className="project-input" value={bgImage} onChange={(e) => {setBgImage(e.target.value)}}/>
                    <img src="./images/exploreba.jpg" className="project-img" alt="project"/>
                </div>
            </div>
            <div className="finish-button">
                <h3>Finish editing</h3>
            </div>
        </div>
    )
}

function Admin() {

    const [flag, setFlag] = useState(false);
    return(
        <div>
            <div className="top-nav">
                <h5 className="navbar-logo" style={{width: 'fit-content', marginLeft: '50px'}}>Nefiich</h5>
            </div>
            <div className="main">
                <div className="side-menu">
                    <div className="side-menu-item">
                        <a href="/">
                            <i className="fas fa-home"></i>
                            <h3>Home</h3>
                        </a>
                    </div>
                    <div className="side-menu-item">
                        <a onClick={() => setFlag(false)}>
                            <i className="fas fa-project-diagram"></i>
                            <h3>Projects</h3>
                        </a>
                    </div>
                </div>
                {flag ? <Project onClick={() => setFlag(false)}/> : <Projects onClick={() => setFlag(true)}/>}
            </div>
        </div>
    );
}

export default Admin;