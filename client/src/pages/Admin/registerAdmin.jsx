import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const RegisterAdmin = () => {
    const initialState = { email: "", password: "" }
    let [admin, setAdmin] = useState(initialState)
    let { email, password } = admin
    const redirect = useNavigate()

    let handleChange = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value })
    }

    let regAdmin = () => {

        axios.post('http://localhost:5000/admin/registerAdmin', admin)
            .then((resp) => {
                console.log(resp.data);
                alert("Admin registered successfully...Please Login")
                redirect('/adminLogin')
            })
            .catch((error) => {
                alert(error.response.data.message)
                // console.log(error);
            })
    }


    let handleRegister = (j) => {
        j.preventDefault()
        regAdmin()
    }




    return (
        <>

            <div>

                {/* <video height={'350px'} width={'270px'} muted loop autoPlay src='/src/assets/b8bd4e4273cceae2889d9d259b04f732.mp4'></video> */}

                {/*////// Modal to register for new user/////// */}


                {/* //////////////////////////////////// */}


                <h3 style={{ fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: "24px", fontWeight: "700", textAlign: "center", marginTop: "5%" }}>Create New Admin</h3>
                <br />
                {/* <video height={'300px'} loop autoPlay src='/src/assets/b8bd4e4273cceae2889d9d259b04f732.mp4'></video> */}

                <form className='loginForm' onSubmit={handleRegister}>

                    <label>Email</label> <br />
                    <input
                        spellCheck={false}
                        style={{ background: "white", color: "brown", fontWeight: "500" }}
                        name='email' type='email'
                        onChange={handleChange}
                        value={email} /> <br /> <br /> <br />

                    <label>Password</label>  <br />
                    <input
                        style={{ background: "white", color: "brown", fontWeight: "500" }}
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={password} /> <br /> <br />

                    <button>Submit</button> <br /><br />


                </form>   <br />

                <br />


            </div>

        </>
    )
}

export default RegisterAdmin    