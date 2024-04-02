import React from 'react'
import BasicExample from '../components/NavBar'


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

            <div className='aboutDiv d-flex'>

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

                </div>

                <div style={{ position: "relative" }} className='mini2'>

                    <img style={{ position: "absolute", left: "440px", borderRadius: "10px" }} src='/src/assets/about_img04.jpg' />

                    <img style={{ position: "absolute", left: "440px", top: "300px", borderRadius: "10px" }} src='/src/assets/about_img05.jpg' />

                    <img src=''/>

                </div>


            </div>




        </>
    )
}

export default About