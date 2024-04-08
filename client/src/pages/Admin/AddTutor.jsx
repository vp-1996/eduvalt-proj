import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import productModel from '../../../server/model/product.model'
import { useRef } from 'react'
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import { useLocation, useNavigate } from 'react-router-dom';
// import BounceLoader from 'react-spinners/BounceLoader'
// import BasicExample from '../Components/Navbar2';
// import NavScrollExample from '../Components/NavBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AdminNav from '../../components/adminNav';

const AddTutor = () => {
    const initialState = { name: "", profession: "" }
    const [tutor, setTutor] = useState(initialState);
    const [img, setImg] = useState(null);
    const imgRef = useRef();
    const { name, profession } = tutor
    let redirect = useNavigate();

    let token = localStorage.getItem('AdminToken')
    if (token === null) {
        return alert('Login first to access this page ')
    }

    let createTutor = () => {

        let formData = new FormData()
        formData.append('name', name)
        formData.append('profession', profession)
        formData.append('Image', imgRef.current.files[0])

        axios.post('http://localhost:5000/tutor/addTutor', formData)
            .then((res) => {
                // setLoading(false)
                console.log(res.data.Data);
                redirect('/getTutors')
                alert('Add Succesfullly')

            })
            .catch((err) => {
                console.log(err);
            })

    }

    let handleChange = (e) => {
        const { name, value } = e.target
        setTutor({ ...tutor, [name]: value })
    }

    const handleImg = (m) => {
        setImg(m.target.files[0])
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        createTutor()
    }

    return (
        <>
            <AdminNav />
            <br />


            <Form encType='multipart/form-data' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        name='name'
                        value={name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Tutor Name"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control
                        name='profession'
                        value={profession}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Profession"
                    />
                </Form.Group>

                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} />

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> <br />


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default AddTutor