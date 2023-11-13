import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Registration = () => {

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = async (event) => {
        event.preventDefault()
        await axios.post('/register', {
            username: usernameReg,
            password: passwordReg
        })
    }

    return (
        <div>
            <div className='registration'>
                <form>
                    <h1>Create an Account</h1>
                    <label>Username</label>
                    <br></br>
                    <input type='text' onChange={(e) => { setUsernameReg(e.target.value) }} />
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input type='text' onChange={(e) => { setPasswordReg(e.target.value) }} />
                    <br></br>
                    <button onClick={register}>Create Account</button>
                </form>
                    <br></br>
                <a href='/login'>Already have an account? Login here</a>
            </div>
        </div>
    );
}

export default Registration;
