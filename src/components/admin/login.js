import React, {useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router';

function Login(){


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const cookies = new Cookies();

    let history = useHistory();

    const buttonLogin = () =>{

        axios.post('https://ancient-escarpment-01509.herokuapp.com/api/login', {
            username: username,
            password: password
        })
        .then(res => {
            if(res.status === 200){
                cookies.set('user', res.data);
                history.push("/admin")
            }
        });
    }

    return(
        <div className="login-container">
            <div className="login">
                <h3 className="login-text">Username</h3>
                <input className="login-input" type="text" value={username} onChange={(e) =>{setUsername(e.target.value)}}></input>
                <h3 className="login-text">Password</h3>
                <input className="login-input" type="password" value={password} onChange={(e) =>{setPassword(e.target.value)}}></input>
                <button className="login-button" onClick={buttonLogin}> Login </button>  
            </div>
        </div>
    );

}

export default Login;