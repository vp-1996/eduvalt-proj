import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function BasicExample() {

    const [auth, setAuth] = useState(null)
    let redirect = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        setAuth(token)
    })

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        location.reload()
    }

    return (
        <>
            {
                !auth ?
                    (
                        <Navbar style={{ marginBottom: "125%", }} bg='dark' expand="lg" className="bg-body-tertiary">
                            <Container style={{ background: "#F8F9FA", marginRight: "100px" }}>
                                <Navbar.Brand href="/">
                                    <img style={{ width: "150px", marginLeft: "100px" }} src='src/assets/logo.png' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link id='NavLink' className='navs' href="/">Home</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/AllCourses">Courses</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/About">About</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/Contact">Contact</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href='/UserLogin'>
                                            <button style={{ borderRadius: "50px", border: "none", background: "#1363DF", color: "white", width: "70px", fontWeight: "600" }}>
                                                Login
                                            </button>
                                        </Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href='/SignUP'>
                                            <button style={{ borderRadius: "50px", border: "none", background: "#1363DF", color: "white", width: "70px", fontWeight: "600", fontSize: "15px" }}>
                                                Sign Up
                                            </button>
                                        </Nav.Link>

                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    )
                    :
                    (
                        <Navbar style={{ marginBottom: "125%", }} bg='dark' expand="lg" className="bg-body-tertiary">
                            <Container style={{ background: "#F8F9FA", marginRight: "100px" }}>
                                <Navbar.Brand href="/">
                                    <img style={{ width: "150px", marginLeft: "100px" }} src='src/assets/logo.png' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link id='NavLink' className='navs' href="/">Home</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/AllCourses">Courses</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/About">About Us</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/Contact">Contact</Nav.Link>
                                        <Nav.Link id='NavLink' className='navs'>
                                            <button onClick={handleLogout} style={{ borderRadius: "50px", border: "none", background: "#1363DF", color: "white" }}>
                                                Logout
                                            </button>
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    )
            }



        </>
    );
}

export default BasicExample;