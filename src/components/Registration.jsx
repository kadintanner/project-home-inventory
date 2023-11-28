import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router';
import Navbar from './Navbar'

const Registration = () => {

    const navigate = useNavigate()

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    const register = async (event) => {
        event.preventDefault()
        if (usernameReg === "" || passwordReg === "") {
            alert('No Username or Password entered')
        }
        await axios.post('/register', {
            username: usernameReg,
            password: passwordReg
        }).then((res) => {
            console.log(res)
            if (res.data === "Username already exists") {
                alert(res.data)
            } else {
                navigate("/itemTable")
            }
        }
        )

    }


    return (
      
            <div className='register'>
                <form>
                    <h1>Create an Account</h1>
                    <br />
                    <label>Username</label>
                    <br />
                    <input id="user" type='text' onChange={(e) => { setUsernameReg(e.target.value) }} />
                    <br />
                    <label>Password</label>
                    <br />
                    <input id="pass" type='text' onChange={(e) => { setPasswordReg(e.target.value) }} />
                    <br />
                    <button type="submit" onClick={register}>Create Account</button>
                </form>
                <br />
                <a href='/login'>Already have an account? Login here</a>
            </div>
    );
}

export default Registration;