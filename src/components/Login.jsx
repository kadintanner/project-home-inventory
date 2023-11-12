import React from 'react';
import { useState } from 'react'
import axios from 'axios'

const Login = () => {

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
                <button onClick={login}>Login</button>
                </form>
            </div>
            <h3>{loginStatus}</h3>
        </div>
    );
}

export default Login