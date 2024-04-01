import React from 'react'
import BasicExample from '../components/NavBar'
import Table from 'react-bootstrap/Table';
import CourseByCat from '../components/CourseByCat';
// import Carousel from '../components/Carousel';
import ControlledCarousel from '../components/Carousel';

const Home = () => {
  return (

    <>

      <BasicExample />

      <div className='mainDiv d-flex'>

        <div className='part1'>
          <p style={{ fontSize: "55px", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", color: "#082A5E" }}>
            Learn<span style={{ color: "#1363DF" }}> Skills </span>From<br /> Our Top Instructors
          </p>

          <p style={{
            color: "#39557E", fontSize: "16px", fontFamily: "Hind,sans-serif", fontWeight: "400", textDecoration: "none solid rgb(57, 85, 126)"
          }}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit<br />tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet<br />consectetur adipiscing area we followelit.
          </p>

          <button className='bannerButton'>EXPLORE COURSES</button>

        </div>

        <div className='part2'>

          <img className='bnrImg' src='/src/assets/bshape_05.png' />

          <img style={{ position: "absolute", height: "70px", left: "100px" }} src='/src/assets/bshape_03.png' />

          <img style={{ position: "absolute", top: "150px", left: "60px", height: "170px" }} src='/src/assets/Screenshot 2024-03-29 231416.jpg' />

        </div>

      </div >
      <br /><br />

      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <img className='slideImg' src='/src/assets/brand01.png' />
        </li>
        <li className='slideImg'>
          <img src='/src/assets/brand02.png' />
        </li>
        <li className='slideImg'>
          <img src='/src/assets/brand03.png' />
        </li>
        <li className='slideImg'>
          <img src='/src/assets/brand04.png' />
        </li>
        <li className='slideImg'>
          <img src='/src/assets/brand05.png' />
        </li>
      </ul>
      <br /><br />
      <hr></hr>

      {/* ///////////////////////////////// */}

      <div className=' mainDiv2'>

        <div className='part3'>
          <img style={{ position: "absolute", left: "190px" }} src='/src/assets/about_img01.png' />
          <img style={{ position: "absolute", right: "1070px", top: "100px" }} src='/src/assets/about_img02.png' />
        </div>

        <div className='part4'>

          <button style={{ marginLeft: "700px", border: "none", background: "#E7EFFC", color: "#2763DF", fontWeight: "500" }}>Get To Know About Us</button>

          <p style={{ fontSize: "42px", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", color: "#082A5E", marginLeft: "700px" }}>
            Discover Top<span style={{ color: "#1363DF" }}> Instructors </span><br /> Around The World
          </p>

          <p style={{
            color: "#39557E", fontSize: "16px", fontFamily: "Hind,sans-serif", fontWeight: "400", textDecoration: "none solid rgb(57, 85, 126)", marginLeft: "52%"
          }}>
            Borem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit<br />tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet<br />consectetur adipiscing area we followelit.
          </p>

          <Table style={{ width: "30%", marginLeft: "49%" }}>
            <thead>
              <tr>
                {/* <th>#</th> */}
                {/* <th>First Name</th> */}
                {/* <th>Last Name</th> */}
                {/* <th>Username</th> */}
              </tr>
            </thead>
            <tbody>
              <tr >
                <td></td>
                <td style={{ border: "none" }} >
                  <span style={{ fontWeight: "500", fontSize: "16px" }}>
                    <img style={{ marginLeft: "10%", height: "30px" }} src='/src/assets/support.png' />
                    2000 Expert Tutors
                  </span>

                </td>
                <td style={{ border: "none" }}>
                  <span style={{ fontWeight: "500", fontSize: "16px" }}>
                    <img style={{ marginLeft: "10%", height: "30px" }} src='/src/assets/mortarboard.png' />
                    1000+ Students
                  </span>
                </td>

              </tr>
              <tr>
                <td></td>
                <td style={{ border: "none", paddingTop: "5%" }}>
                  <span style={{ fontWeight: "500", fontSize: "16px" }}>
                    <img style={{ marginLeft: "10%", height: "30px" }} src='/src/assets/open-book.png' />
                    1500 Top Lessons
                  </span>
                </td>
                <td style={{ border: "none", paddingTop: "5%" }}>
                  <span style={{ fontWeight: "500", fontSize: "16px" }}>
                    <img style={{ marginLeft: "10%", height: "30px" }} src='/src/assets/video-player.png' />
                    700 Pro Videos
                  </span>
                </td>
              </tr>
            </tbody>
          </Table>

          <button
            style={{ background: "#1363DF", border: "none", color: "white", marginLeft: "52%", height: "40px", width: "150px", fontWeight: "500", borderRadius: "5px" }}
          >
            Discover More
          </button>
        </div>
      </div>  <br /><br /><br /><br /><br />
      <hr></hr> <br /><br /><br />

      {/* ///////////////////////////////// */}

      <CourseByCat /> <br /><br />
      <hr></hr><br /><br />
      {/* ///////////////////////////////// */}

      <div className='mainDiv3 d-flex'>

        <div className='div1'>

          <button style={{ marginLeft: "5%", border: "none", background: "#E7EFFC", color: "#2763DF", fontWeight: "500" }}>Get To Know About Us</button>

          <p style={{ fontSize: "36px", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", marginLeft: "5%", lineHeight: "80px" }}>
            Browse By<span style={{ fontSize: "36px", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", color: "#1363DF" }} > Categories</span>
          </p>

          <p style={{
            color: "#39557E", fontSize: "16px", fontFamily: "Hind,sans-serif", fontWeight: "400", textDecoration: "none solid rgb(57, 85, 126)", marginLeft: "5%"
          }}>
            Borem ipsum dolor sit , consectetur adipiscing elit. Ut elit<br />tellus, luctus nec ullamcorper mattisBorem ipsum dolor sit amet<br />consectetur adipiscing area we followelit.
          </p>

          <button
            style={{ background: "#1363DF", border: "none", color: "white", marginLeft: "5%", height: "40px", width: "150px", fontWeight: "500", borderRadius: "5px", marginTop: "10%" }}
          >
            Discover More
          </button>

        </div>

        <div className='div2'>

          <Table style={{ width: "30%", marginLeft: "65%" }}>
            <thead>
              <tr>
                {/* <th>#</th> */}
                {/* <th>First Name</th> */}
                {/* <th>Last Name</th> */}
                {/* <th>Username</th> */}
              </tr>
            </thead>
            <tbody>
              <tr >
                <td></td>
                <td style={{ border: "none" }} >
                  <div style={{ border: "none", height: "190px", background: "#F4F7FB", paddingLeft: "30px", borderRadius: "10px", width: "200px" }}>
                    <div className='circle'>
                      <img style={{ paddingLeft: "32px", paddingTop: "29%" }} src='/src/assets/animation.png' />
                    </div>
                    <h4 style={{ paddingTop: "20px", fontSize: "20px" }}>3D Animation</h4>
                    <p style={{ paddingLeft: "20px" }}>06 Courses</p>
                  </div>
                </td>

                <td style={{ border: "none" }}>
                  <div style={{ border: "none", height: "190px", background: "#F4F7FB", paddingLeft: "20px", borderRadius: "10px", width: "200px" }}>
                    <div className='circle'>
                      <img style={{ paddingLeft: "32px", paddingTop: "29%" }} src='/src/assets/seo.png' />
                    </div>
                    <h4 style={{ paddingTop: "20px", fontSize: "20px", paddingLeft: "25px" }}>Marketing</h4>
                    <p style={{ paddingLeft: "30px" }}>09 Courses</p>
                  </div>
                </td>
              </tr>

              <tr>
                <td></td>
                <td style={{ border: "none" }}>
                  <div style={{ border: "none", height: "190px", background: "#F4F7FB", paddingLeft: "20px", borderRadius: "10px" }}>
                    <div className='circle'>
                      <img style={{ paddingLeft: "32px", paddingTop: "29%" }} src='/src/assets/hand.png' />
                    </div>
                    <h4 style={{ paddingTop: "20px", fontSize: "20px", paddingLeft: "35px" }}>Finance</h4>
                    <p style={{ paddingLeft: "30px" }}>04 Courses</p>
                  </div>
                </td>

                <td style={{ border: "none" }}>
                  <div style={{ border: "none", height: "190px", background: "#F4F7FB", paddingLeft: "20px", borderRadius: "10px" }}>
                    <div className='circle'>
                      <img style={{ paddingLeft: "32px", paddingTop: "29%" }} src='/src/assets/cooperation.png' />
                    </div>
                    <h4 style={{ paddingTop: "20px", fontSize: "20px", paddingLeft: "30px" }}>Business</h4>
                    <p style={{ paddingLeft: "30px" }}>11 Courses</p>
                  </div>
                </td>
              </tr>

            </tbody>
          </Table>

        </div>

      </div>
      <br /><br /><br />
      {/* ///////////////////////////////// */}

      <ControlledCarousel/>

    </>
  )
}

export default Home