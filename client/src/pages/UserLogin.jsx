import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BasicExample from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

    const initialState = { email: "", password: "" }
    const [user, setUser] = useState(initialState)
    const { email, password } = user
    const redirect = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    const Login = () => {
        axios.post('http://localhost:5000/user/loginUser', user)
            .then((res) => {
                console.log(res);
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.user._id)
                redirect('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Login()
    }


    return (
        <>

            <BasicExample />

            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Login
                </h3>
            </div>
            <br /><br />

            <div style={{ borderStyle: "ridge", width: "40%", height: "400px", marginLeft: "30%", background: "#F6F7FA", border: "1px solid #DCDFE5" }}>

                <form onSubmit={handleSubmit}>

                    <label style={{ marginLeft: "10%", marginTop: "10%" }}>Email</label> <br />
                    <input
                        name='email'
                        value={email}
                        onChange={handleChange}
                        style={{ width: "400px", border: "1px solid #DCDFE5", height: "50px", marginLeft: "10%", borderRadius: "5px" }} type='email' placeholder='Email' />



                    <label style={{ marginLeft: "10%", marginTop: "10%" }}>
                        Password
                    </label> <br />
                    <input
                        name='password'
                        value={password}
                        onChange={handleChange}
                        style={{ width: "400px", border: "1px solid #DCDFE5", height: "50px", marginLeft: "10%", borderRadius: "5px" }} type='password' placeholder='Password' /> <br /><br />

                    <button style={{ color: "white", background: "#1363DF", width: "400px", marginLeft: "10%", height: "50px", border: "none", borderRadius: "8px" }}>
                        Login
                    </button>


                </form>
            </div>
            <br />



        </>
    )
}

export default UserLogin