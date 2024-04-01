import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const CourseByCat = () => {
    const [cat, setCat] = useState([])
    const [course, setCourse] = useState([])

    const getCategories = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
            .then((resp) => {
                console.log(resp.data);
                setCat(resp.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getCourseByCat = () => {

        axios.get('http://localhost:5000/course/getCourseByCategory' )
            .then((resp) => {
                console.log(resp.data);
                setCourse(resp.data.course)
                // setCourse(resp.data.category)
                setCat(resp.data.category)
            })

            .catch((err) => {
                console.log(err);
            })

    }

    let handleClick = (catID) => {
        getCourseByCat(catID)
    }

    useEffect(() => {
        getCategories()
         getCourseByCat() 
    }, [])


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand
                    href="#home"
                    style={{ fontFamily: "Lexend Deca,sans-serif", fontSize: "36px", fontWeight: "600", color: "#082A5E" }}
                >
                    Our <span style={{ fontFamily: "Lexend Deca,sans-serif", fontSize: "36px", fontWeight: "600", color: "#1363DF" }}>
                        Featured
                    </span> Courses
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {
                            cat.map((i) => (
                                <>
                                    <Nav.Link
                                        onClick={() => handleClick(i.id)}
                                        style={{ color: "#39557E", fontFamily: "Hind,sans-serif", fontSize: "17px", fontWeight: "500", marginLeft: "0%" }}
                                    >
                                        {i.name}
                                    </Nav.Link>
                                </>
                            ))
                        }

                        {
                            course.map((j) => (
                                <>
                                    <p>
                                        {j.Description}
                                    </p>
                                </>
                            ))
                        }

                        {/* <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default CourseByCat