import React, {useState} from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function Projects(props){

    const [name, setName] = useState();
    const [github, setGithub] = useState();
    const [demo, setDemo] = useState();
    const [img, setImg] = useState();

    const [success, setSuccess] = useState(false);
    const [successElement, setSuccessElement] = useState('')

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setSuccess(false)
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      
    }
  
    function closeModal() {
      setIsOpen(false);
      setSuccess(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#0d0f11'
        },
    };

    const createProject = () =>{
        axios.post('https://ancient-escarpment-01509.herokuapp.com/api/projects/create', {
            name: name,
            github: github,
            demo: demo,
            img: img
          })
          .then(function (response) {
            console.log(response);
            setSuccess(true);
            if(response.status === 200){
                setSuccessElement('Successfuly created project!')
            }
          })
          .catch(function (error) {
            console.log(error);
            setSuccess(true);
            setSuccessElement('Error! See console.')

          });
    }

    const content = (
        <div className="content">
            <div className="project-text-container">
                <h2 className="projects-text" style={{margin: '0'}}>Projects</h2>
                <i className="fas fa-plus-circle plus-icon" onClick={() => {openModal()}}></i>
            </div>
            <div className="content-items">
                {
                    props.loaded ? 
                    props.data.map(project =>( 
                        <div className="item-button" key={project.id} onClick={() => {props.getProject(true, project.id, project.name, project.github, project.demo, project.img)}}>
                            <div className="colored-dot"></div>
                            <h3>{project.name}</h3>
                        </div>
                    )) : <h3>Loading</h3>
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {success ? 
                <div>
                    <h3>{successElement}</h3>
                    <button className="create-button" onClick={closeModal}>Close</button>
                </div> :
                <div className="modal-container">
                    <div className="project-input-container">
                        <h3>Project Name</h3>
                        <input className="project-input input-bg-dark" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="project-input-container">
                        <h3>Gihub link</h3>
                        <input className="project-input input-bg-dark" value={github} onChange={(e) => setGithub(e.target.value)}/>
                    </div>
                    <div className="project-input-container">
                        <h3>Demo link</h3>
                        <input className="project-input input-bg-dark" value={demo} onChange={(e) => setDemo(e.target.value)}/>
                    </div>
                    <div className="project-input-container">
                        <h3>Image link</h3>
                        <input className="project-input input-bg-dark" value={img} onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    <button className="create-button" onClick={createProject}>Create</button>
                </div>}
                
            </Modal>
        </div>
    )    
    return(
        <div className="main-content" style={{width: '100%'}}>
            {props.loaded ? content : 'Loading...'}
        </div>
    );
}

export default Projects;