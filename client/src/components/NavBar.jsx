import { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
// import Badge from 'react-bootstrap/Badge';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';

function BasicExample() {
    let { state, dispatch } = useContext(CartContext)
    const [auth, setAuth] = useState(null)
    let redirect = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        setAuth(token)
    })

    const handleLogout = () => {
        if (window.confirm('Are You Sure You Want To LogOut ?'))
        {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            location.reload()
        }    
        }

    return (
        <>
            {
                !auth ?
                    (
                        <Navbar sticky="top" style={{ marginBottom: "05%", }} bg='dark' expand="lg" className="bg-body-tertiary">
                            <Container style={{ background: "#F8F9FA", marginRight: "190px" }}>
                                <Navbar.Brand href="/">
                                    <img style={{ width: "150px", marginLeft: "100px" }}
                                     src='/src/assets/logo.png' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">

                                        <Nav.Link  href='/' id='NavLink' className='navs'>
                                            Home
                                        </Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/AllCourses">
                                            Courses
                                        </Nav.Link>
                                        <Nav.Link id='NavLink' className='navs' href="/About">
                                            About
                                        </Nav.Link>

                                        <Nav.Link id='NavLink' className='navs' href="/Contact">
                                            Contact
                                        </Nav.Link>

                                        <Nav.Link id='NavLink' className='navs' href="/AllBlogs">
                                        Blogs
                                        </Nav.Link>

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
                        <Navbar style={{ marginBottom: "5%", }} bg='dark' expand="lg" className="bg-body-tertiary">
                            <Container style={{ background: "#F8F9FA", marginRight: "100px" }}>
                                <Navbar.Brand href="/">
                                    <img style={{ width: "150px", marginLeft: "100px" }}
                                     src='/src/assets/logo.png' />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link id='NavLink' className='navs' href="/">
                                            Home
                                            </Nav.Link>

                                        <Nav.Link id='NavLink' className='navs' href="/AllCourses"
                                        >
                                            Courses
                                        </Nav.Link>

                                        <Nav.Link id='NavLink' className='navs' href="/About">
                                            About Us
                                            </Nav.Link>

                                        <Nav.Link id='NavLink' className='navs' href="/Contact">
                                            Contact
                                            </Nav.Link>
                                            
                                        <Nav.Link id='NavLink' className='navs' href="/AllBlogs">
                                            Blogs
                                        </Nav.Link>

                                        <Nav.Link id='NavLink' className='navs'>
                                            <button onClick={handleLogout} style={{ borderRadius: "50px", border: "none", background: "#1363DF", color: "white" }}>
                                                Logout
                                            </button>
                                        </Nav.Link>

                                        <Link to={'/Cart'} id='NavLink' className='navs'>
                                            {/* <img style={{ height: "35px", width: "35px" }} src='/src/assets/shopping-bag.png' /> */}
                                            {/* <Badge bg="secondary">
                                                {state.cart.length}
                                            </Badge> */}

                                            <Badge badgeContent={state.cart?.length} color="primary">
                                                <img style={{ height: "35px", width: "35px" }} src='/src/assets/shopping-bag.png' />
                                            </Badge>
                                        </Link>
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