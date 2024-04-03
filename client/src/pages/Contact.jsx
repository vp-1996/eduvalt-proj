import React from 'react'
import BasicExample from '../components/NavBar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
            <BasicExample />

            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Contact
                </h3>
            </div>
            <br /><br /><br /><br />

            {/* ////////////////////////////// */}

            <div className='d-flex ms-5'>

                <div className='innerDiv1'>

                    <h2 style={{ color: "#082A5E", fontSize: "27px", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif" }}
                    >
                        Keep In Touch With Us
                    </h2>

                    <p
                        style={{ fontWeight: "400", fontFamily: "Hind,sans-serif", fontSize: "16px" }}
                    >
                        Neque convallis cras semper auctor. Libero id<br />faucibus getnvallis.id faucibus nisl tincidunt<br />egetnvallis.
                    </p>

                    <span style={{ height: "100px", width: "54px", borderRadius: "50%", fontWeight: "600" }}>
                        <img src='/src/assets/placeholder.png' />
                        68 Street Holakt Street world
                    </span>
                    <br /><br />
                    <span style={{ height: "100px", width: "54px", borderRadius: "50%", fontWeight: "600" }}>
                        <img src='/src/assets/phone-call.png' />
                        +123 555 69090
                    </span> <br /><br />

                    <span style={{ height: "100px", width: "54px", borderRadius: "50%", fontWeight: "600" }}>
                        <img src='/src/assets/email.png' />
                        web@example.com
                    </span>

                </div>


                <div style={{ marginLeft: "15%", border: "1px solid #DAE0E7", width: "700px", background: "#F6F7FA", height: "400px" }} className='innerDiv2'>

                    <h3 className='ms-5 mt-4'>
                        Get In Touch
                    </h3>

                    <form>

                        <div className='ms-5 mt-4'>
                            <input style={{ width: "250px", height: "40px", border: "1px solid #DAE0E7" }} type='text' placeholder='Name' name='name' />

                            <input style={{ width: "250px", marginLeft: "04%", height: "40px", border: "1px solid #DAE0E7" }} type='email' placeholder='Email' name='email' />
                        </div>

                        <div className='ms-5 mt-4'>
                            <input style={{ width: "250px", height: "40px", border: "1px solid #DAE0E7" }} type='number' placeholder='Phone' name='number' />

                            <input style={{ width: "250px", marginLeft: "4%", height: "40px", border: "1px solid #DAE0E7" }} type='text' placeholder='Subject' name='subject' />
                        </div>

                        <textarea placeholder='Enter Message' style={{ width: "520px", marginLeft: "7%", marginTop: "5%", border: "1px solid #DAE0E7", height: "100px" }}></textarea>
                    </form>
                </div>
            </div> <br /><br />

            {/* //////////////////////////////// */}

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1242025869897!2d72.87209447395179!3d19.10220645115185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9dafbc1995f%3A0xc6f24901e2b0021!2sChhatrapati%20Shivaji%20Maharaj%20international%20airport!5e0!3m2!1sen!2sin!4v1712081714951!5m2!1sen!2sin" style={{ border: "0", height: "500px", width: "100%" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> <br /><br /><br />



            <Footer />


        </>
    )
}

export default Contact