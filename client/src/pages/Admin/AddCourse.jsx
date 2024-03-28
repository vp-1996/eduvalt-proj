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
    const initialState = { Description: "", Lessons: "", Duration: "", Category: "" }
    const [course, setCourse] = useState(initialState);
    const [img, setImg] = useState(null);
    let [cat, setCategory] = useState([])
    const imgRef = useRef();
    const { Description, Lessons, Duration, Category } = course
    let redirect = useNavigate();

    let getCategories = async () => {

        await axios.get('http://localhost:5000/category/getAllCategories')
            .then((res) => {
                console.log(res.data);
                setCategory(res.data.data)
            })

            .catch((err) => {
                console.log(err);
            })
    }

    let createCourse = () => {

        let formData = new FormData()
        formData.append('Description', Description)
        formData.append('Lessons', Lessons)
        formData.append('Duration', Duration)
        formData.append('Category', Category)
        formData.append('Image', imgRef.current.files[0])


        axios.post('http://localhost:5000/course/addCourse', formData)
            .then((res) => {
                // setLoading(false)
                 
                redirect('/GetCourses')
                alert('Added Succesfullly')

            })
            .catch((err) => {
                console.log(err);
            })

    }
    

    let handleChange = (e) => {
        const { name, value } = e.target
        setCourse({ ...course, [name]: value })
        // console.log(setCourse({ ...course, [name]: value }));
    }

    const handleImg = (m) => {
        setImg(m.target.files[0])
    }


    let handleSubmit = (e) => {
        e.preventDefault()
        createCourse()
    }

    useEffect(() => {
        getCategories()
    }, [])

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
                        <Nav.Link href="/GetCourses">All Courses</Nav.Link>
                        <Nav.Link href="/AddCourse">Add Course</Nav.Link>
                        <Nav.Link href="AllUsers">All Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />


            <Form encType='multipart/form-data' onSubmit={handleSubmit}>

                <select
                    required
                    style={{ background: "#42A5F5", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", marginLeft: "15%", borderRadius: "7px" }}
                    value={Category}
                    name='Category'
                    onChange={handleChange}>
                    <option value='' disabled>Select Category</option>
                    {
                        cat.map((i, k) => (
                            <option value={i._id}>{i.name}</option>
                        ))
                    }
                </select>  <br /><br />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        maxLength={50}
                        name='Description'
                        value={Description}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Description(max 50 char allowed)"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        required
                        min={1}
                        name='Lessons'
                        value={Lessons}
                        onChange={handleChange}
                        type="number"
                        placeholder="Enter Number Of Lessons"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        required
                        name='Duration'
                        value={Duration}
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