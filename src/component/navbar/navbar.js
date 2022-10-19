import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './navbar.css'

export default function Navbar() {

    const navigate = useNavigate()

    useEffect(() =>{
        if(!localStorage.getItem('token')){
            navigate('/')
        }
    }, [])


    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active nav-font" aria-current="page" href="#">React Task</a>
                                </li>
                            </ul>
                            <button class="btn btn-create" type="submit" onClick={() =>{
                                localStorage.removeItem('token'); window.location.reload()}} 
                                >Logout</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
