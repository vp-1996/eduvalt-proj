import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const AdminLogin = () => {
    const initialState = { email: "", password: "" }
    let [admin, setAdmin] = useState(initialState)
    let { email, password } = admin
    const redirect = useNavigate()
    const [lgShow, setLgShow] = useState(false);

    let handleChange = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value })
    }

    //   let regUser = ()=>{

    //     axios.post('http://localhost:5000/admin/adminLogin',admin)
    //     .then((resp)=>{
    //     console.log(resp.data);
    //         alert("user registered successfully...Please Login")
    //         redirect('/Login')
    //   })
    //    .catch((error) => {
    //     alert(error.resp.data)
    //     })   
    //     }

    // console.log();

    let Login = () => {
        axios.post('http://localhost:5000/admin/adminLogin', admin)
            .then((resp) => {
                console.log(resp.data)
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('id', resp.data.user._id)

                setAdmin({
                    email: "",
                    password: ""
                })

                setTimeout(() => {
                    redirect('/getAllCategories')
                }, 2300)

            })

            .catch((error) => {
                alert(error.response)
            })
    }

    //   const handleRegister = (e) => {
    //     e.preventDefault()
    //     regUser() 
    //   }

    let handleLogin = (j) => {
        j.preventDefault()
        Login()
    }

    return (
        <div>

            {/* <video height={'350px'} width={'270px'} muted loop autoPlay src='/src/assets/b8bd4e4273cceae2889d9d259b04f732.mp4'></video> */}

            {/*////// Modal to register for new user/////// */}


            {/* //////////////////////////////////// */}


            <h3 style={{ fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: "24px", fontWeight: "700", textAlign: "center", marginTop: "5%" }}>Admin Login</h3>
            <br />
            {/* <video height={'300px'} loop autoPlay src='/src/assets/b8bd4e4273cceae2889d9d259b04f732.mp4'></video> */}

            <form className='loginForm' onSubmit={handleLogin}>

                <label>Email</label> <br />
                <input
                    style={{ background: "white", color: "brown", fontWeight: "500" }}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={email}
                /> <br /> <br /> <br />

                <label>Password</label>  <br />
                <input
                    style={{ background: "white", color: "brown", fontWeight: "500" }}
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={password}
                /> <br /> <br />

                <button>Sign In</button> <br /><br />

                {/* <a style={{marginLeft:"4%",textDecoration:"none",color:"#0D0C22"}} onClick={() => setLgShow(true)} href='#'>Dont Have an Account? Create Here</a> */}

            </form>   <br />

            <br />


        </div>
    )
}

export default AdminLogin