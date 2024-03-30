import React from 'react'
import BasicExample from '../components/NavBar'

const Home = () => {
  return (

    <>

      <BasicExample />

      <div style={{ display: "flex", marginTop: "-1100px", width: "1330px" }} className='mainDiv'>

        <div className='part1' style={{ width: "200px" }}>
          <h5
            style={{ color: "#1363DF", background: "#E7EFFC", marginTop: "20%", width: "190%", marginLeft: "30%" }}
          >
            100% Satisfaction...
          </h5>

          <p style={{ fontSize: "45px" }}>
            Learn <span>Skills</span> From <br />
            Our Top Instructors
          </p>


        </div>

        {/* <div style={{ paddingLeft: "50%" }} className='part2'> */}
        <img style={{ width: "502px", height: "529px", marginLeft: "600px" }} src='/src/assets/banner_img.png' />
        {/* </div> */}

      </div>

    </>
  )
}

export default Home