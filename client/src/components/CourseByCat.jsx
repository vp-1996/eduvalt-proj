import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CourseByCat = () => {
    const [cat, setCat] = useState([])
    const [course, setCourse] = useState([])
    const [temp, setTemp] = useState([])

    // console.log(temp);

    // console.log(cat);

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

    let getAllCourses = () => {
        axios.get('http://localhost:5000/course/GetAllCourses')
            .then((resp) => {
                // console.log(resp.data);
                setCourse(resp.data.Data)
                setTemp(resp.data.Data)
            })
    }

    const getCourseByCat = (id) => {
        // console.log(id); 

        // axios.get('http://localhost:5000/course/getCourseByCategory/'+id )
        //     .then((resp) => {
        //         console.log(resp.data);
        //         setCourse(resp.data.course)
        //         // setCourse(resp.data.category)
        //         setCat(resp.data.category)
        //     })

        //     .catch((err) => {
        //         console.log(err);
        //     })

    }

    let handleAll = () => [
        // setCourse(resp.data.Data)
        getAllCourses()
    ]

    let handleClick = (catID) => {
        // getCourseByCat(catID)
        setCourse(temp.filter(item => item.Category.name === catID))
    }

    useEffect(() => {
        setCourse(temp.filter(item => item.Category.name === 'Marketing'))
    }, [])

    useEffect(() => {
        getCategories()
        getAllCourses()
        //  getCourseByCat() 
    }, [])


    return (
        <>
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
                    <Navbar.Collapse style={{ marginLeft: "15%" }} id="basic-navbar-nav">
                        <Nav className="me-auto">

                            <Nav.Link style={{ color: "#1363DF", fontFamily: "Hind,sans-serif", fontSize: "17px", fontWeight: "500", marginLeft: "0%", textDecoration: "none solid rgb(57, 85, 126)" }}
                                onClick={handleAll}
                            >
                                All Courses
                            </Nav.Link>
                            {
                                cat.map((i) => (
                                    <>
                                        <Nav.Link
                                            onClick={() => handleClick(i.name)}
                                            style={{ color: "RGB(57, 85, 126)", fontFamily: "Hind,sans-serif", fontSize: "17px", fontWeight: "500", marginLeft: "0%", textDecoration: "none solid rgb(57, 85, 126)" }}
                                        >
                                            {i.name}
                                        </Nav.Link>
                                    </>
                                ))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='row ms-5'>
                {
                    course.map((item) => (
                        <>
                            <Card style={{ width: '19rem', marginTop: "1%", marginLeft: "3%", height: "24rem" }}>

                                <Card.Img style={{ width: "245px", height: "181px", paddingLeft: "8%", borderRadius: "5px", marginTop: "2%" }} variant="top" src={'http://localhost:5000/uploads/Images/' + item.Image} />
                                <Card.Body>

                                    <Card.Title
                                        style={{ fontFamily: "Hind, sans-serif", fontWeight: "600", fontSize: "13px", lineHeight: "15px", borderRadius: "20px", border: "0.1px solid gray", textAlign: "center", width: "120px", height: "25px", background: "#F5F0FF", borderStyle: "none", color: "#7A0EF0", paddingTop: "2%" }}
                                    >
                                        {item.Category.name}
                                    </Card.Title>

                                    <Card.Text style={{ color: "#082A5E", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", fontStyle: "normal", fontStretch: "100%" }}>
                                        {item.Description}
                                    </Card.Text>

                                    <Button variant='light' style={{ width: "200px" }}>
                                        <img src='/src/assets/time.png' />
                                        {item.Duration}

                                        <img style={{ paddingLeft: "08%" }} src='/src/assets/food.png' />
                                        {item.Lessons}
                                    </Button>
                                </Card.Body>

                                <img style={{ width: "200px", marginLeft: "15%" }} src='/src/assets/Screenshot 2024-03-30 205942.jpg' /> <br />

                            </Card>
                        </>
                    ))
                }
            </div>

        </>
    )
}

export default CourseByCat