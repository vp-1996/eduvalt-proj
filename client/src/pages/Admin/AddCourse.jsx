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

const AddCourse = () => {
    const initialState = { description: "", lessons: "", duration: "", category: "" }
    const [course, setCourse] = useState(initialState);
    const [img, setImg] = useState(null);
    const imgRef = useRef();
    const { description, lessons, duration, category } = course
    let redirect = useNavigate();

    let createCourse = () => {

        let formData = new FormData()
        formData.append('Description', description)
        formData.append('Profession', lessons)
        formData.append('Duration', duration)
        formData.append('Category', category)
        formData.append('Image', imgRef.current.files[0])


        axios.post('http://localhost:5000/course/addCourse', formData)
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
        setCourse({ ...course, [name]: value })
    }

    const handleImg = (m) => {
        setImg(m.target.files[0])
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        createCourse()
    }

    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="/getAllCategories">All Categories</Nav.Link>
                        <Nav.Link href="/CreateCategory"> Create New Category</Nav.Link>
                        <Nav.Link href="/AddTutor"> Create New Tutor</Nav.Link>
                        <Nav.Link href="/getTutors">All Tutors</Nav.Link>
                        <Nav.Link href="AllUsers">All Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />


            <Form encType='multipart/form-data' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        name='name'
                        value={description}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Description"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        name='Lessons'
                        value={lessons}
                        onChange={handleChange}
                        type="number"
                        placeholder="Enter Number Of Lessons"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        name='profession'
                        value={duration}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Duration"
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

export default AddCourse