import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const AdminLogin = () => {
    const initialState = { email: "", password: "" }
    let [admin, setAdmin] = useState(initialState)
    let { email, password } = admin
    const redirect = useNavigate()
    // console.log(redirect);
    const [lgShow, setLgShow] = useState(false);

    let handleChange = (e) => {
        const { name, value } = e.target
        setAdmin({ ...admin, [name]: value })
    }


    let Login = () => {
        axios.post('http://localhost:5000/admin/adminLogin', admin)
            .then((resp) => {
                console.log(resp)
                localStorage.setItem('AdminToken', resp.data.token)
                localStorage.setItem('admin_id', resp.data.admin._id)

                setAdmin({
                    email: "",
                    password: ""
                })

                setTimeout(() => {
                    redirect('/GetCourses')
                }, 2300)

            })

            .catch((error) => {
                console.log(error);
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
        <div style={{width:"100%",height:"100%",background:"#F3F4F7"}}>

            {/* <video height={'350px'} width={'270px'} muted loop autoPlay src='/src/assets/b8bd4e4273cceae2889d9d259b04f732.mp4'></video> */}

            {/*////// Modal to register for new user/////// */}


            {/* //////////////////////////////////// */}


             <h3 style={{ fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: "24px", fontWeight: "700", textAlign: "center", marginTop: "7%",paddingTop:"3%"}}>
                Enter Admin Credentials
                </h3>

                <img style={{width:"60px",height:"60px",marginLeft:"47.9%"}} src='/src/assets/user.png'/>
              <img />

            <br />
            {/* <video height={'300px'} loop autoPlay src='/src/assets/b8bd4e4273cceae2889d9d259b04f732.mp4'></video> */}

            <form style={{ textAlign: "center" }} className='loginForm' onSubmit={handleLogin}>

                <label>Email</label> <br />
                <input
                    style={{ background: "white", color: "brown", fontWeight: "500", border: "2px solid #DAE0E7",borderRadius:"100px",height:"40px",width:"300px" }}
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={email}
                /> <br /> <br /> <br />

                <label>Password</label>  <br />
                <input
                    style={{ background: "white", color: "brown", fontWeight: "500", border: "2px solid #DAE0E7",borderRadius:"100px",height:"40px",width:"300px"}}
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={password}
                /> <br /> <br />

                <button
                 style={{ background: "#57B847", color: "white", border: "none",width:"300px",borderRadius:"100px",height:"35px",marginTop:"40px"}}>
                    Sign In
                </button> <br /><br />


            </form>   <br />

            <br />


        </div>
    )
}

export default AdminLogin