import React from 'react'

const Footer = () => {
    return (
        <>

            <div className='footerDiv d-flex'>

                {/* <img
                    style={{ marginLeft: "5%", marginTop: "4%" }}
                    src='/src/assets/Screenshot 2024-03-30 235231.jpg'
                /> */}
                <p
                    style={{ color: "#B2BDCD", fontFamily: "Hind,sans-serif", fontSize: "16px", marginTop: "2%", marginLeft: "5%" }}
                >
                    {/* when an unknown printer took galley<br /> of type and scrambled it to make<br /> pspecimen bookt has. */}
                    <br /><br />

                    <span style={{ color: "white", fontWeight: "600" }}>
                        463 7TH AVE, NY 10018, USA <br /><br />+123 88 9900 456

                    </span>
                </p>

                {/* <img style={{ marginLeft: "5%" }} src='/src/assets/Screenshot 2024-03-31 001309.jpg' /> */}

                <div className='innerDiv d-flex '>
                    <div className='resourceDiv'>
                        <h3 style={{ color: "white", marginTop: "30px", marginLeft: "21%" }}>Resources</h3>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>About</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Privacy Policy</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Refund</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Conditions</li>
                        </ul>
                    </div>

                    <div className='courseDiv'>
                        <h3 style={{ color: "white", marginTop: "30px", marginLeft: "21%" }}>Courses</h3>
                        <ul style={{ listStyleType: "none" }}>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Development</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Business</li>
                            {/* <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Development</li> */}
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>Design</li>
                            <li style={{ color: "#B2BDC4", marginTop: "20px" }}>SEO</li>
                        </ul>
                    </div>

                </div>


            </div>



        </>
    )
}

export default Footer