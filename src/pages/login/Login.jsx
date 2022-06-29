import React from 'react';
import { useState, useEffect, useContext } from 'react'
import {loginuser } from '../../context/authcontext/apiCalls';
import { AuthContext } from '../../context/authcontext/AuthContext';
import './login.css'

const Login = () => {
    let { dispatch } = useContext(AuthContext)

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handlelogin = (e) => {
        e.preventDefault()
        loginuser(dispatch, {email, password})
    }
    return (
        <div className='login_container'>
            <h className="login_heading">Login to Admin Pannel</h>
            <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='button' onClick={(e) =>handlelogin(e)} >Login</button>
        </div>
    )
}


export default Login