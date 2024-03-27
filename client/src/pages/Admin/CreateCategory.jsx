import React, { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


const CreateCategory = () => {
    const initialState = { name: '' }
    const [cat, addCat] = useState(initialState)
    const { name } = cat
    let navigate = useNavigate()

    let addCategory = () => {

        // var formData = new FormData()
        //  formData.append('name', drop)  
        //  console.log(formData);

        axios.post('http://localhost:5000/category/addcategory', cat)
            .then((res) => {
                console.log(res.data);
                navigate('/getAllCategories')
            })

            .catch((err) => {
                console.log(err);
            })
    }

    let handleChange = (e) => {
        const { name, value } = e.target
        // console.log(value);
        addCat({ ...cat, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        addCategory()
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
                        <Nav.Link href="/GetCourses">All Courses</Nav.Link>
                        <Nav.Link href="/AddCourse">Add Course</Nav.Link>
                        <Nav.Link href="AllUsers">All Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />

            <div
                style={{ fontSize: "20px", width: "50%", height: "40px", textAlign: "center", marginLeft: "30%", backgroundColor: "#9AD0C2", color: "whitesmoke", fontWeight: "700", letterSpacing: "2px" }}
            >
                <p>
                    ADD CATEGORY
                </p>
            </div>

            <form
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                style={{ marginLeft: "21%", marginTop: "5%" }}>

                <input
                    value={name}
                    type='text'
                    onChange={handleChange}
                    name='name'
                    placeholder='Enter New Category... '
                    style={{ width: "300px", height: "40px", background: "white", color: "black" }}
                />
                <br />
                <button type='submit'
                    style={{ marginTop: "2%", marginLeft: "0%", background: "#1976D2", width: "100px", height: "35px", color: "white", border: "none", borderRadius: "5px" }}
                >
                    Submit
                </button>
            </form>


        </>
    )
}

export default CreateCategory