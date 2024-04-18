import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AdminNav = () => {

      

    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="/getAllCategories">All Categories</Nav.Link>
                    <Nav.Link href="/CreateCategory"> Create Category</Nav.Link>
                    <Nav.Link href="/AddTutor"> Create Tutor</Nav.Link>
                    <Nav.Link href="/CreateBlog"> Create Blog</Nav.Link>
                    <Nav.Link href="/GetAllBlogs">All Blogs</Nav.Link>
                    <Nav.Link href="/getTutors">All Tutors</Nav.Link>
                    <Nav.Link href="/GetCourses">All Courses</Nav.Link>
                    <Nav.Link href="/AddCourse">Add Course</Nav.Link>
                    <Nav.Link href="/GetUsers">All Users</Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    )
}

export default AdminNav