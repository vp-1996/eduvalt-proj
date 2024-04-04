import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BasicExample from '../components/NavBar';
import { useNavigate } from 'react-router-dom';

const SignUP = () => {
    const initialState = { name: "", email: "", number: "", password: "" }
    const [user, setUser] = useState(initialState)
    const { name, email, number, password } = user
    const redirect = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    const regUser = () => {
        axios.post('http://localhost:5000/user/registerUser', user)
            .then((res) => {
                // console.log(res);
                alert('User Registered Successfully..Please Login')
                redirect('/UserLogin')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        regUser()
    }

    return (
        <>
            <BasicExample />


            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Registration
                </h3>
            </div>
            <br /><br />

            <div style={{ borderStyle: "ridge", width: "40%", height: "670px", marginLeft: "30%", background: "#F6F7FA", border: "1px solid #DCDFE5" }}>

                <form onSubmit={handleSubmit}>

                    <label style={{ marginLeft: "10%", marginTop: "10%" }}>Name</label> <br />
                    <input
                        name='name'
                        value={name}
                        onChange={handleChange}
                        style={{ width: "400px", border: "1px solid #DCDFE5", height: "50px", marginLeft: "10%", borderRadius: "5px" }} type='text' placeholder='Enter Name' />

                    <label style={{ marginLeft: "10%", marginTop: "10%" }}>Email</label> <br />
                    <input
                        name='email'
                        value={email}
                        onChange={handleChange}
                        style={{ width: "400px", border: "1px solid #DCDFE5", height: "50px", marginLeft: "10%", borderRadius: "5px" }} type='email' placeholder='Email' />

                    <label style={{ marginLeft: "10%", marginTop: "10%" }}>Number</label> <br />
                    <input
                        name='number'
                        value={number}
                        onChange={handleChange}
                        style={{ width: "400px", border: "1px solid #DCDFE5", height: "50px", marginLeft: "10%", borderRadius: "5px" }} type='number' placeholder='Phone' />

                    <label style={{ marginLeft: "10%", marginTop: "10%" }}>
                        Password
                    </label> <br />
                    <input
                        name='password'
                        value={password}
                        onChange={handleChange}
                        style={{ width: "400px", border: "1px solid #DCDFE5", height: "50px", marginLeft: "10%", borderRadius: "5px" }} type='password' placeholder='Password' /> <br /><br />

                    <button style={{ color: "white", background: "#1363DF", width: "400px", marginLeft: "10%", height: "50px", border: "none", borderRadius: "8px" }}>
                        Register
                    </button>


                </form>
            </div>
            <br />

        </>
    )
}

export default SignUP