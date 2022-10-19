import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    const loginApi = () => {
        console.log(email, password)

        axios.post('https://reqres.in/api/login', {
            email: email,
            password: password
        })
            .then(result => {
                console.log(result.data.token);
                localStorage.setItem('token',result.data.token)
                window.location.reload();
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <>
            <div className='login-box'>
                <div className='container-fluid'>
                    <div className='row justify-content-center align-items-center  '>
                        <div className='col-md-4 justify-content-center align-items-center p-0'>
                            <div className='login-wrapper'>
                                <div>
                                    <h1 className='l-heading'>Welcome to login</h1>
                                </div>
                                <p className='l-ph'>Login to contine using React task</p>
                                <div>
                                    <div className='mb-3'>
                                        <label htmlFor="" className='l-label'>Email or Username</label>
                                        <input type="text" value={email} onChange={handleEmail} className='form-control' placeholder='Enter Email' />
                                    </div>

                                    <div className='mb-3'>
                                        <label htmlFor="" className='l-label'>Password</label>
                                        <input type="password" value={password} onChange={handlePassword}
                                            className='form-control' placeholder='Enter Password' />
                                    </div>
                                </div>
                                <div className='py-3'>
                                    <button className='btn btn1 btn-primary' onClick={loginApi}>LOGIN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
