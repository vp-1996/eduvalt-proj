import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    return (
        <Navbar style={{ marginBottom: "125%", }} bg='dark' expand="lg" className="bg-body-tertiary">
            <Container style={{ background: "white" }}>
                <Navbar.Brand href="/">
                    <img style={{ width: "150px", marginLeft: "100px" }} src='src/assets/logo.png' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link id='NavLink' className='navs' href="/">Home</Nav.Link>
                        <Nav.Link id='NavLink' className='navs' href="/AllCourses">Courses</Nav.Link>
                        <Nav.Link id='NavLink' className='navs' href="/AboutUs">About Us</Nav.Link>
                        <Nav.Link id='NavLink' className='navs' href="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;