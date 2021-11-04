import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';

import Projects from './projects';
import Project from './project';

function Admin() {

    const cookies = new Cookies();
    let history = useHistory();

    const [data, setData] = useState();
    const [loaded, setLoaded] = useState(false);


    const [id, setId] = useState();
    const [name, setName] = useState();
    const [github, setGithub] = useState();
    const [demo, setDemo] = useState();
    const [bgImage, setBgImage] = useState();

    const [flag, setFlag] = useState(false);

    

    useEffect( () => {


        const getCookies = cookies.get('user');

        if(getCookies === undefined){
            console.log("There is nothing!");
            return history.push("/login")
        }

        axios.get('https://ancient-escarpment-01509.herokuapp.com/api/projects')
        .then(res => {
            setData(res.data)
            setLoaded(true)
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
        }else{
            window.location.reload(false)
        }
    }

    const editProject = () =>{
        axios.put(`https://ancient-escarpment-01509.herokuapp.com/api/projects/edit/${id}`, {
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
    const deleteProject = () =>{
        axios.delete(`https://ancient-escarpment-01509.herokuapp.com/api/projects/remove/${id}`)
          .then(function (response) {
            console.log(response);
            window.location.reload(false)
          })
          .catch(function (error) {
            console.log(error);
          });
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
                        <span href="#" onClick={() => setFlag(false)}>
                            <i className="fas fa-project-diagram"></i>
                            <h3>Projects</h3>
                        </span>
                    </div>
                    <div className="side-menu-item">
                        <span href="#" onClick={() => {cookies.remove('user'); history.push("/login")}}>
                            <i className="fas fa-sign-out-alt"></i>
                            <h3>Logout</h3>
                        </span>
                    </div>
                </div>
                {flag ? <Project getProject={getProject} name={name} setName={setName} github={github} setGithub={setGithub} demo={demo} setDemo={setDemo} bgImage={bgImage} setBgImage={setBgImage} editProject={editProject} deleteProject={deleteProject}/> : <Projects data={data} getProject={getProject} loaded={loaded}/>}
            </div>
        </div>
    );
}

export default Admin;