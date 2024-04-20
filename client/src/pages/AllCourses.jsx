import React, { useState, useEffect, useContext } from 'react'
import BasicExample from '../components/NavBar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import { CartContext } from '../../context/CartContext';
import ScaleLoader from "react-spinners/ScaleLoader";
import {useNavigate} from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

const AllCourses = () => {
    const [categories, setCategories] = useState([])
    const [course, setCourse] = useState([])
    const [temp, setTemp] = useState([])
    let [loading, setLoading] = useState(false);
    // let [color, setColor] = useState("#1363DF");
    const [search, setSearch] = useState('')
    const { state, dispatch } = useContext(CartContext)
    const redirect = useNavigate()
    const [show, setShow] = useState(false);

    let getAllCategories = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
            .then((resp) => {
                // console.log(resp.data);
                setCategories(resp.data.data)

            })
    }


    const getAllCourses = () => {
        axios.get('http://localhost:5000/course/GetAllCourses')
            .then((resp) => {
                // setLoading(true)
                console.log(resp.data);
                setCourse(resp.data.Data)
                setTemp(resp.data.Data)
            })

    }

    const searchedCourses = course.filter(
        course => course.Description.toLowerCase().includes(search.toLowerCase())
    )

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

     let token = localStorage.getItem('token')
    //   if (token === null) {
    // return alert('Login first to access this page ')
    //   }
        


    let AddToCart = (item) => {
      //  console.log(item);
          if (token === null) {
        return alert('Login To Proceed')
          }

        setShow(true)
        const add = localStorage.setItem('CartItems', item)       
        dispatch({
            add,
            type: 'ADDTOCART',
            payload: item
        })
        //  console.log();
    }

    

     const viewCourse=(id)=>{
         redirect('/ViewCourse/'+id)
       // console.log(id);
     }
     
    // console.log(temp);

    const [arr, setArr] = useState([])
    // console.log(arr);

    const handleChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setArr([...arr, value])

        }
        else {
            setArr(arr.filter(i => i !== value))
        }
        }
    // console.log(course);
    // console.log(arr);

    useEffect(() => {
        if (arr.length === 0) {
            // If no categories selected, show all courses

            getAllCourses()
        }
        else {
            // Filter courses based on selected categories
            const filteredCourses = temp.filter(item => arr.includes(item.Category.name) || arr.includes(item.CoursePriceType) );
            setCourse(filteredCourses);
            //  console.log(filteredCourses);
        }
    }, [arr]);

    let enroll=()=>{


        
    }


    useEffect(() => {
        getAllCategories()
        getAllCourses()
    }, [])


    return (
        <>
                                                       <BasicExample />

                                                          <Row>
                                                           <Col xs={4}>
                                                           <Toast
                                                            style={{ position:"fixed",top:"0",zIndex:"1000",right:"370px"}}
                                                            onClose={() => setShow(false)}
                                                            show={show} delay={2500}
                                                            autohide={true}>
                                                             <Toast.Header
                                                                style={{ background: "#198754", color: "#AEB6B8" }}
                                                              >

                                                                <strong className="me-auto">
                                                                    Hey ....
                                                                </strong>
                                                            </Toast.Header>
                                                            <Toast.Body style={{ fontWeight: "500", background: "#198754", color: "white" }}>
                                                                Added To Cart Sucessfully ! !
                                                            </Toast.Body>
                                                        </Toast>
                                                    </Col>
                                                </Row>
                                        
                                           


            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Courses
                </h3>
            </div>
            <br /><br />

            <input
                onChange={handleSearch}
                type='search'
                placeholder='search...'
                className='courseSearch'
                spellCheck={false}
            />

                      

            <div className='container-fluid mt-5'>
                

                <div className='main row d-flex'>

                    <div className='col-md-2'>

                        <div className='filterSection'>

                            <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "16%",borderBottom:"2px solid blue",borderWidth:"3px",width:"40px",marginTop:"3%"}}>
                                Categories
                            </p>

                            {

                                categories.map((i, k) => (
                                    <>

                                        <input
                                            checked={arr.includes(i.name)}
                                            onChange={handleChange}
                                            value={i.name
                                            }
                                             style={{ marginLeft: "17%", marginTop: "7%" }} type='checkbox' />
                                        <label style={{ fontFamily: "Hind, sans-serif", marginLeft: "2%" }}>
                                            {i.name}
                                        </label> <br />
                                    </>
                                ))
                            }
                        </div>

                        <div className='priceFilter'>

                        <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "16%",marginTop:"3%",borderBottom:"2px solid blue",borderWidth:"3px",width:"40px"}}>
                                Prices
                            </p>

                          <p>
                         <input
                            style={{ marginLeft: "17%", marginTop: "7%" }}
                            value='Paid'
                            checked={arr.includes('Paid')}
                             onChange={handleChange}
                             type='checkbox'/>
                         <label className='ms-1'>Paid</label> 
                         </p>

                          <p>
                          <input
                            style={{ marginLeft: "17%", marginTop: "2%" }}
                            value='Free'
                            checked={arr.includes('Free')}
                            onChange={handleChange} type='checkbox'/>
                           <label className='ms-1'>
                            Free
                            </label> 
                         </p>

                        </div>

                    </div>


                    <div className='col-md-10 '>

                        <div className='row h-100 align-items-center ms-5'>
                            {
                                searchedCourses.length === 0 ?

                                    //  <h2 className='text-center'>No course to show in this category</h2>
                                    <div className='text-center'>
                                        <img style={{ width: "100px" }} src='/src/assets/not-found.png' />
                                    </div>


                                    :
                                    searchedCourses.map((item, k) => (
                                               <>
                                               <Card
                                                className='mx-3 mb-4'
                                                style={{ width: '18rem', height: "31rem" }}
                                                >
                                                    
                                                <div className='position-relative imgDiv'>  
                                                <Card.Img style={{ width: "260px", height: "181px", paddingLeft: "1%", borderRadius: "5px", marginTop: "2%" }} variant="top" src={'http://localhost:5000/uploads/Images/' + item.Image} />
                                                
                                                <img
                                                 onClick={()=>viewCourse(item._id)}
                                                 className='eyeButton'                 src='/src/assets/eye.png'
                                                 />
                                              
                                                </div>

                                                <Card.Body>

                                                    <Card.Title
                                                        style={{ fontFamily: "Hind, sans-serif", fontWeight: "600", fontSize: "13px", lineHeight: "15px", borderRadius: "20px", border: "0.1px solid gray", width: "120px", height: "25px", background: "#F5F0FF", borderStyle: "none", color: "#7A0EF0", paddingTop: "2%", paddingLeft: "14%", marginLeft: "22%" }}
                                                    >
                                                        {item.Category.name}
                                                    </Card.Title>

                                                    <Card.Text
                                                     
                                                     style={{ color: "#082A5E", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", fontStyle: "normal", fontStretch: "100%", textAlign: "center" }}>
                                                        {item.Description}
                                                    </Card.Text>

                                                    <Button variant='light' style={{ width: "200px" }}>
                                                        <img src='/src/assets/time.png' />
                                                        {item.Duration}

                                                        <img style={{ paddingLeft: "08%" }} src='/src/assets/food.png' />
                                                        {item.Lessons}
                                                    </Button>
                                                </Card.Body>
                                            
                                               
                                               
                                                <button
                                                 style={{border:"none",color:"#1679AB",fontSize:"18px",fontWeight:"600",fontFamily:"Lexend Deca,sans-serif",width:"100px",borderRadius:"100px",marginBottom:"30px", marginLeft:"70px"}}
                                                >
                                                {
                                                item.CoursePriceType==='Paid'?'₹'+ item.Price:'Free'
                                                }
                                                    
                                                </button>

                                                 {
                                                    item.CoursePriceType==='Paid'?
                                                    <button
                                                     style={{boxShadow:"1px 1px 2px 3px blue"}}
                                                    className='AddToCartButton'
                                                    onClick={() => AddToCart(item)}
                                                >
                                                    Add To Cart
                                                </button>
                                                :
                                                <button     
                                                style={{boxShadow:"1px 1px 2px 3px blue"}}                                        
                                                className='AddToCartButton'
                                                  >
                                                Enroll For Free
                                                 </button>
                                                 
                                                 }                                 
                                            </Card>

                                        </>
                                    ))
                            }
                        </div>

                    </div>

                </div>

            </div>

            <br /><br /><br /><br />

            <Footer />


        </>
    )
}

export default AllCourses