import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Admin() {

    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);


    const [id, setId] = useState();
    const [name, setName] = useState();
    const [github, setGithub] = useState();
    const [demo, setDemo] = useState();
    const [bgImage, setBgImage] = useState();

    const [flag, setFlag] = useState(false);

    useEffect( () => {
        axios.get('https://ancient-escarpment-01509.herokuapp.com/api/projects')
        .then(res => {
            setData(res.data)
            setLoaded(true)
            console.log(res.data)
        });
    }, []);

    const getProject = (purpose, id, name, git, demo, img) =>{
        setFlag(purpose);
        if(purpose === true){
            setId(id);
            setName(name);
            setGithub(git);
            setDemo(demo);
            setBgImage(img);
        }
    }

    const editProject = () =>{
        axios.post(`https://ancient-escarpment-01509.herokuapp.com/api/projects/edit/${id}`, {
            name: name,
            github: github,
            demo: demo,
            img: bgImage
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function Projects(props){
        const content = (
            <div className="content">
                <div className="project-text-container">
                    <h2 className="projects-text" style={{margin: '0'}}>Projects</h2>
                    <i class="fas fa-plus-circle plus-icon"></i>
                </div>
                <div className="content-items">

                    {
                        loaded ? 
                        data.map(project =>( 
                            <div className="item-button" onClick={() => {getProject(true, project.id, project.name, project.github, project.demo, project.img)}}>
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
                {loaded ? content : 'Loading...'}
            </div>
        );
    }

    function Project(props){
        return(
            <div className="content">
                 <div className="project-text-container">
                    <i class="fas fa-arrow-left back-icon" onClick={() => {getProject(false)}}></i>
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
                <div className="finish-button" onClick={() => {editProject()}}>
                    <h3>Finish editing</h3>
                </div>
            </div>
        )
    }

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
                {flag ? Project() : <Projects/>}
            </div>
        </div>
    );
}

export default Admin;