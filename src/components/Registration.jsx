import React from 'react';
import { useState } from 'react'
import axios from 'axios'
import './register.css'
import { useNavigate } from 'react-router';

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

    document.addEventListener('DOMContentLoaded', function () {
    ///////////// Super complicated math from StackOverFlow (it made the navbar pretty) //////////////
    const navbar = document.getElementById("navbar");
    let lastScrollTop = 0;
    addEventListener("scroll", () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const distance = scrollTop - lastScrollTop;
        const currentTop = parseInt(
            getComputedStyle(navbar).top.split("px")
        );
        let amount = Math.max(
            Math.min(
                currentTop +
                    (distance < 0
                        ? Math.abs(distance)
                        : -Math.abs(distance)
                        ) * 40, 0 ), -80
        );
        // console.log(amount, currentTop, Math.abs(distance));
        navbar.style.top = `${amount}px`;
        lastScrollTop = scrollTop;
    });
    //////////////////////////////////////////////////////////////////////////////////////////////////
    })

    return (
        <body className="register-body">
            <h1 className='title-reg'>Organize Your Life</h1>
            <h3 className='sub-title-reg'>With Home Inventory</h3>
            <a className='get-started-button' href="#create-account-h1">Get Started</a>

            <div id="navbar" >
                <a className="active" href="/">HOME INVENTORY</a>
                <i id='profile-icon' class="bi bi-person-circle"></i>
                <a className='profile'>PROFILE</a>
            </div>

            <div className='register-div'>
                <form>
                    <h1 id="create-account-h1">Create an Account</h1>
                    <br />
                    <label id='user-label'>Username</label>
                    <br />
                    <input className="user" type='text' onChange={(e) => { setUsernameReg(e.target.value) }} />
                    <br />
                    <label id="pass-label">Password</label>
                    <br />
                    <input className="pass" type='text' onChange={(e) => { setPasswordReg(e.target.value) }} />
                    <br />
                    <button className='reg-button' type="submit" onClick={register}>Create Account</button>
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <a className="link" href='/login'>Already have an account? Login here</a>
            </div>
            <div className='empty-div'>
                <h6>hello</h6>
            </div>
        </body>
    );
}

export default Registration;