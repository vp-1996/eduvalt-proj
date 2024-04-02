import React from 'react'
import BasicExample from '../components/NavBar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';


const About = () => {
    return (
        <>
            <BasicExample />

            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    About Us
                </h3>
            </div>
            <br /><br />
            {/* /////////////////////////////////// */}

            <div className='aboutDiv d-flex mt-5 ms-5'>

                <div className='mini1'>

                    <h2 style={{ color: "#082A5E", fontFamily: "Lexend Deca,sans-serif", fontWeight: "600", fontSize: "36px", }}>
                        The Leading Global<br /><span style={{ color: "#1363DF" }}> Marketplace </span>For Learning<br /> And Instruction
                    </h2>

                    <p style={{ color: "#082A5E", fontSize: "18px", fontFamily: "Hind,sans-serif", fontWeight: "500", background: "RGBA(0, 0, 0, 0)" }}>
                        Borem ipsum dolor sit amet, consectetur adipiscing eliawe<br /> ellus luctus nec ullamcorper mattisBorem
                    </p>

                    <p style={{ color: "#39557E", fontFamily: "Hind,sans-serif", fontWeight: "400", fontSize: "16px" }}>
                        Bipsum dolor awtnse awctetur adipis we followelit. Borem.Borem<br /> ipsum dolamet consectetur adipiscing eliawe awUt elit ellutnse<br /> awcon sectetur adipiscing ectetur.
                    </p>

                    <button className='bannerButton'>EXPLORE COURSES</button>

                </div>

                <div style={{ position: "relative" }} className='mini2'>

                    <img style={{ position: "absolute", left: "440px", borderRadius: "10px" }} src='/src/assets/about_img04.jpg' />

                    <img style={{ position: "absolute", left: "440px", top: "300px", borderRadius: "10px" }} src='/src/assets/about_img05.jpg' />

                    <img style={{ position: "absolute", left: "100px", top: "50px", borderRadius: "10px" }} src='/src/assets/about_img03.jpg' />

                </div>
            </div> <br /><br /><br /><br /><br /><br /><br /><br />

            {/* //////////////////////////////////// */}
            <hr></hr><br />

            <h2 style={{ fontFamily: "Lexend Deca,sans-serif", fontSize: "36px", fontWeight: "600", color: "#082A5E", textAlign: "center" }}>
                Grow You<span style={{ color: "#1363DF" }}> Skills</span> To Advance
            </h2>

            <div className='row ms-4 ' style={{ background: "#F4F7FC", marginTop: "5%" }}>
                <Card style={{ width: '18rem', height: "15rem", border: "none", boxShadow: "0px 4px 24px #EBEEF2" }}>
                    <Card.Img style={{ width: "85px", height: "74px", marginLeft: "35%", marginTop: "10%" }} variant="top" src="/src/assets/icon-4.png" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "700", fontSize: "30px" }}>500+</Card.Title>
                        <Card.Text className='text-center'>Awards Received</Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: "15rem", border: "none", boxShadow: "0px 4px 24px #EBEEF2", marginLeft: "2%" }}>
                    <Card.Img style={{ width: "85px", height: "74px", marginLeft: "35%", marginTop: "10%" }} variant="top" src="/src/assets/icon-2.png" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "700", fontSize: "30px" }}>11,400</Card.Title>
                        <Card.Text className='text-center'>Top Class Courses</Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: "15rem", border: "none", boxShadow: "0px 4px 24px #EBEEF2", marginLeft: "5%" }}>
                    <Card.Img style={{ width: "85px", height: "74px", marginLeft: "35%", marginTop: "10%" }} variant="top" src="/src/assets/icon-3.png" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "700", fontSize: "30px" }}>312</Card.Title>
                        <Card.Text className='text-center'>World Countries</Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem', height: "15rem", border: "none", boxShadow: "0px 4px 24px #EBEEF2", marginLeft: "5%" }}>
                    <Card.Img style={{ width: "85px", height: "74px", marginLeft: "35%", marginTop: "10%" }} variant="top" src="/src/assets/icon-3.png" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: "center", fontWeight: "700", fontSize: "30px" }}>312</Card.Title>
                        <Card.Text className='text-center'>World Countries</Card.Text>
                    </Card.Body>
                </Card>

            </div> <br />

            {/* /////////////////////////////////// */}

            {/* <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    About Us
                </h3>
            </div>
            <br /><br />  <br /> */}

            <div className='studentDivOverlay'>
                <div className='studentDiv'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "400px", left: "350px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    50% Offer For Very First 50
                </h3>

                <h5 style={{ fontWeight: "300", fontFamily: "Lexend Deca,sans-serif", fontSize: "30px", color: "white", zIndex: "100", position: "absolute", left: "550px", bottom: "300px" }}>
                    Students & Mentors
                </h5>

                <button style={{ background: "#1363DF", color: "white", height: "50px", width: "200px", fontWeight: "500", borderRadius: "6px", position: "absolute", bottom: "190px", left: "600px", zIndex: "100", border: "none" }}>EXPLORE COURSES</button>

            </div>
            <br /><br /><br /><br />

            <Footer />

        </>
    )
}

export default About