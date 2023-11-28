import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router';

const Login = () => {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

const login = async () => {
    await axios.post('/login', {
        username: username,
        password: password
    }).then((response) => {
        if (response.data.message) {
            setLoginStatus(response.data.message)
        } else {
            setLoginStatus(response.data[0].username)
        }
        console.log(response.data)
        navigate("/itemTable")
    })
} 

    return (
        <div>
            <div className='login'>
                <form>
                <h1>Login</h1>
                <input
                    type='text'
                    placeholder='Username'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <br></br>
                <input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <br></br>
                <br></br>
                <button type="submit" onClick={login}>Login</button>
                <br />
                <br />
                <a href='/register'>New to Home Inventory? Create an account here</a>
                </form>
            </div>
            <h3>{loginStatus}</h3>
        </div>
    );
}

export default Login