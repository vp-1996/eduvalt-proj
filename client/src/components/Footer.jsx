import React from 'react'

const Footer = () => {
    return (
        <>

            <div className='footerDiv d-flex'>

                <p
                    style={{ color: "#B2BDCD", fontFamily: "Hind,sans-serif", fontSize: "16px", marginTop: "2%", marginLeft: "5%" }}
                >
                   
                    <br /><br />

                    <span style={{ color: "white", fontWeight: "600" }}>
                        463 7TH AVE, NY 10018, USA <br /><br />+123 88 9900 456

                    </span>
                </p>

                {/* <img style={{ marginLeft: "5%" }} src='/src/assets/Screenshot 2024-03-31 001309.jpg' /> */}

                <div className='innerDiv d-flex '>
                    <div className='resourceDiv'>
                        <h3 style={{ color: "white", marginTop: "70px", marginLeft: "21%" }}>Resources</h3>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>About</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Privacy Policy</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Refund</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Conditions</li>
                        </ul>
                    </div>

                    <div className='courseDiv'>
                        <h3 style={{ color: "white", marginTop: "70px", marginLeft: "21%" }}>Courses</h3>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Development</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Business</li>
                            {/* <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Development</li> */}
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Design</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>SEO</li>
                        </ul>
                    </div>

                    <img style={{ height: "180px", width: "200px", marginLeft: "30%", marginTop: "70px" }} src='/src/assets/footerImg.jpg' />

                </div>
                <hr></hr>

            </div>

        </>
    )
}

export default Footer