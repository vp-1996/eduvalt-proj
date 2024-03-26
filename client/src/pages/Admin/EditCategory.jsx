import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const EditCategory = () => {

    const { id } = useParams()
    const [cat, setCat] = useState('')
    const { name } = cat
    const navigate = useNavigate()

    let singleCategory = () => {
        axios.get('http://localhost:5000/category/getSingleCategory/' + id)
            .then((res) => {
                console.log(res.data)
                setCat(res.data.category)
            })

            .catch((err) => {
                console.log(err);
            })

    }

    let handleUpdate = () => {

        // var catData = new FormData()
        // catData.append('name',name)

        axios.put('http://localhost:5000/category/updateCategory/' + id, cat)
            .then((res) => {
                console.log(res);
                navigate('/getAllCategories')
            })

            .catch((err) => {
                console.log(err);
            })
    }



    let handleChange = (e) => {
        const { name, value } = e.target
        setCat({ ...cat, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        handleUpdate()
    }

    useEffect(() => {
        singleCategory()
    }, [])


    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                    <Nav className="me-auto">
                        <Nav.Link href="/getAllCategories">All Categories</Nav.Link>
                        <Nav.Link href="/CreateCategory"> Create New Category</Nav.Link>
                        <Nav.Link href="AllUsers">All Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
            {/* <div
                style={{ fontSize: "20px", width: "80%", height: "50px", textAlign: "center", marginLeft: "40%", backgroundColor: "#9AD0C2", color: "whitesmoke", fontWeight: "700", letterSpacing: "2px", marginTop: "4%" }}
            >
                <p>
                    UPDATE CATEGORY
                </p>
            </div> */}


            <form
                style={{ marginLeft: "15%", marginTop: "5%" }}
                onSubmit={handleSubmit}
            >

                <input
                    value={name}
                    type='text'
                    onChange={handleChange}
                    style={{ width: "297px", height: "40px", background: "white", color: "black" }}
                    name='name'
                />

                <br />
                <button
                    type='submit'
                    style={{ marginTop: "2%", marginLeft: "5%", background: "#1976D2", width: "100px", height: "39px", color: "white", border: "none", borderRadius: "5px" }}
                >
                    Submit
                </button>


            </form>



        </>
    )
}

export default EditCategory