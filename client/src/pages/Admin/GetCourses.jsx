import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const GetCourses = () => {
    const [course, setCourse] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    let [path, setPath] = useState('')
    let navigate = useNavigate()

    // Pagination  
    const recordsPerPage = 4
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = course.slice(firstIndex, lastIndex)
    const npage = Math.ceil(course.length / recordsPerPage)
    const nums = [...Array(npage + 1).keys()].slice(1)

    let allCourses = () => {
        axios.get('http://localhost:5000/course/GetAllCourses')
            .then((resp) => {
                setCourse(resp.data.Data)
                setPath(resp.data.path)
                console.log(resp.data);
            })

            .catch((err) => {
                console.log(err);
            })
    }

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + npage)
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changeCurrPage = (id) => {
        setCurrentPage(id)
    }

    let deleteCourse = (courseID) => {

        if (window.confirm('Are You Sure You Want To Delete This ?')) {

            axios.delete('http://localhost:5000/course/deleteCourse/' + courseID)
                .then(() => {
                    console.log('Deleted Sucessfully');
                    allCourses()
                })

                .catch((err) => {
                    console.log('Error while deleting');
                })
        }
    }

    let editButton = (id) => {
        navigate('/EditCourse/' + id)
    }


    useEffect(() => {
        allCourses()
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

            <div
                style={{ fontSize: "20px", width: "65%", height: "40px", textAlign: "center", marginLeft: "20%", backgroundColor: "#9AD0C2", color: "whitesmoke", fontWeight: "700", letterSpacing: "2px" }}
            >
                <p>
                    ALL COURSES
                </p>
            </div>

            <br />

            <Table style={{ width: "100%", marginLeft: "5%", height: "200px" }} bordered hover variant="">
                <thead>
                    {/* <tr> */}
                    <tbody>
                        <th style={{ borderBottom: "1px solid black", width: "200px" }}>
                            Category
                        </th>
                        <th style={{ borderBottom: "1px solid black" }}>
                            Description
                        </th>
                        <th style={{ borderBottom: "1px solid black" }}>
                            Lessons
                        </th>
                        <th style={{ borderBottom: "1px solid black" }}>
                            Duration
                        </th>
                        <th style={{ borderBottom: "1px solid black", width: "150px", textAlign: "center" }}>
                            Image
                        </th>
                        <th style={{ borderBottom: "1px solid black", width: "150px", textAlign: "center" }}>
                            Delete
                        </th>

                        <th style={{ width: "100px", textAlign: "center", borderBottom: "1px solid black" }}>
                            Edit
                        </th>
                        {

                            records.map((i, k) => (
                                <>

                                    <tr>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "12px"
                                        }}
                                        >
                                            {i.Category?.name}
                                        </td>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "14px"
                                        }}
                                        >
                                            {i.Description}
                                        </td>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "14px"
                                        }}
                                        >
                                            {i.Lessons}
                                        </td>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "14px"
                                        }}
                                        >
                                            {i.Duration}
                                        </td>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "14px"
                                        }}
                                        >
                                            <img src={path + '/' + i.Image} style={{ height: "100px", width: "120px", borderRadius: "15px" }} />
                                        </td>

                                        <td style={{
                                            textAlign: "center",
                                            borderBottom: "1px solid black"
                                        }}>
                                            <button
                                                onClick={() => deleteCourse(i._id)}
                                                style={{ border: "none", borderRadius: "15px", background: "white" }}
                                            >
                                                <img
                                                    src='/src/assets/delete.png' />
                                            </button>

                                        </td>

                                        <td
                                            style={{ textAlign: "center", borderBottom: "1px solid black" }}
                                        >
                                            <img
                                                src='/src/assets/pencil2.png'
                                                onClick={() => editButton(i._id)}
                                            />
                                        </td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                    {/* </tr> */}
                </thead>
            </Table>

            <div>
                {/* <Pagination.Ellipsis /> */}
                <Pagination
                    style={{ marginLeft: "40%" }}
                >
                    <Pagination.Prev onClick={prevPage} />
                    {
                        nums.map((n, k) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={k}>
                                <a className='page-link' href='#' onClick={() => changeCurrPage(n)} >{n}</a>
                            </li>
                        ))
                    }

                    <Pagination.Next onClick={nextPage} />
                </Pagination>
                <br />
            </div>
        </>
    )
}

export default GetCourses