import React, { useState, useEffect } from 'react'
import BasicExample from '../components/NavBar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

const AllBlogs = () => {
    const [categories, setCategories] = useState([])
    const [blog, setBlog] = useState([])
    const [temp, setTemp] = useState([])

    let getAllCategories = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
            .then((resp) => {

                // console.log(resp.data);
                setCategories(resp.data.data)

            })
    }

    const getAllBlogs = () => {
        axios.get('http://localhost:5000/blog/GetAllBlogs')
            .then((resp) => {
                // setLoading(true)
               // console.log(resp.data);
                setBlog(resp.data.Data)
                setTemp(resp.data.Data)
                // setTemp(resp.data.Data)
            })
          }

          let handleClick = (catID) => {
            // getCourseByCat(catID)
            setBlog(temp.filter(item => item.Category.name === catID))
        }

        useEffect(() => {
            setBlog(temp.filter(item => item.Category.name === 'Marketing'))
        }, [])
    


    useEffect(() => {
        getAllCategories()
        getAllBlogs()
    }, [])

    return (
        <>

            <BasicExample />


            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Blog
                </h3>
            </div>
            <br /><br />

            <div className='container-fluid mt-5'>

                <div className='main row d-flex'>

                    <div className='col-md-2'>

                        <div className='filterSection'>

                            <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "16%", borderBottom: "2px solid blue", borderWidth: "3px", width: "40px", marginTop: "10%" }}>
                                Categories
                            </p>

                            {

                                categories.map((i, k) => (
                                    <>

                                      <ul style={{listStyleType:"none"}}>
                                       
                                        <li
                                        onClick={() => handleClick(i.name)}
                                       style={{marginBottom:"-30px"}}
                                       >
                                         <button style={{border:"none",background:"#ffff"}}>
                                        {i.name}
                                        </button>
                                       </li> 
                                        
                                      
                                      </ul>
                                      
                                         <br />
                                    </>
                                ))
                            }
                        </div>


                          <div style={{border:"none",marginLeft:"20px",width:"200px",height:"150px",marginTop:"15%",boxShadow:"0px 0px 3px 0px rgba(0, 0, 0, 0.5)"}}>

                          <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "16%", borderBottom: "4px solid blue", borderWidth: "3px", width: "112px", marginTop: "14%" }}>
                                Popular Tags
                            </p>

                            <ul style={{listStyleType:"none"}} className='d-flex mt-2'>
                                <li style={{background:"#E6F2FF",color:"#1365DF",fontSize:"14px"}} className='ms-2'>
                                    Apps
                                </li>
                                <li style={{background:"#E6F2FF",color:"#1365DF",fontSize:"14px"}} className='ms-4'>
                                    Design
                                </li>
                            </ul>

                            <ul style={{listStyleType:"none"}} className='d-flex mt-2'>
                                <li style={{background:"#E6F2FF",color:"#1365DF",fontSize:"14px"}} className='ms-2'>
                                    Education
                                </li>
                                <li style={{background:"#E6F2FF",color:"#1365DF",fontSize:"14px"}} className='ms-4'>
                                    Learning
                                </li>
                            </ul>


                          </div>
                       

                    </div>


                    <div className='col-md-7 '>

                        <div className='row h-100 align-items-center ms-5'>
                            {
                                
                                    blog.map((item, k) => (
                                        <>

                                            <Card
                                                className='mb-4 '
                                                style={{ width: '800px', height: "40rem",marginLeft:"19%"}}>

                                                <div className='position-relative imgDiv'>
                                                    <Card.Img style={{ width: "100%", height: "380px", paddingLeft: "0%", borderRadius: "5px", marginTop: "2%" }}
                                                      src={'http://localhost:5000/uploads/Images/' + item.Image} />

                                                        {/* <img
                                                        onClick={() => viewCourse(item._id)}
                                                        className='eyeButton' src='/src/assets/eye.png'
                                                         /> */}

                                                </div>

                                                <Card.Body>

                                                    <Card.Title
                                                        style={{ fontFamily: "Hind, sans-serif", fontWeight: "600", fontSize: "13px", lineHeight: "15px", borderRadius: "20px", border: "0.1px solid gray", width: "140px", height: "25px", background: "#F5F0FF", borderStyle: "none", color: "#7A0EF0", paddingTop: "1%", paddingLeft: "2%", marginLeft: "35%",textAlign:"center" }}
                                                    >
                                                        {item.Category.name}
                                                    </Card.Title>

                                                    <Card.Text

                                                        style={{ color: "#082A5E", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", fontStyle: "normal", fontStretch: "100%", textAlign: "center",fontSize:"24px",letterSpacing:"1px"}}>
                                                        {item.Title}
                                                    </Card.Text>


                                                    <p
                                                    style={{color:"#39557E",fontWeight:"400",fontFamily:"Hind,sans-serif",fontSize:"16px"}}
                                                    >
                                                   Horem ipsum dolor sitter metting Great consectetur adipiscing idealorem ipsum dolor sitter mettingtablished of a page when lookinThe point of using Lorem Ipsu ss normal distribution.est, qui dolor emr ipsum
                                                    </p>
                                                    
                                                     <div
                                                      style={{marginLeft:"32%"}}
                                                      className='d-flex'>
                                                    <p style={{color:"#3F6293"}}>
                                                     <img src='/src/assets/calendar.png'/>   
                                                     June 2022 , 2023    
                                                    </p>

                                                   <p className='ms-3'>
                                                    <img src='/src/assets/chat-bubble.png'/>
                                                    {item.Comments+' Comments'}
                                                   </p>

                                                    </div>
                                                    
                                                </Card.Body>

                                                {/* <img style={{width:"45px"}} src='/src/assets/stars.png'/> */}

                                               

                                            </Card>

                                        </>
                                    ))
                            }
                        </div>

                    </div>

                </div>

            </div>

            <hr></hr>
              <div style={{marginTop:"5%"}}></div>
            <Footer/>


        </>
    )
}

export default AllBlogs