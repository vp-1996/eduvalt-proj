import React, { useState, useEffect, useContext } from 'react'
import BasicExample from '../components/NavBar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import { CartContext } from '../../context/CartContext';
import ScaleLoader from "react-spinners/ScaleLoader";
import {useNavigate} from 'react-router-dom'

const AllCourses = () => {
    const [categories, setCategories] = useState([])
    const [course, setCourse] = useState([])
    const [temp, setTemp] = useState([])
    let [loading, setLoading] = useState(false);
    // let [color, setColor] = useState("#1363DF");
    const [search, setSearch] = useState('')
    const { state, dispatch } = useContext(CartContext)
    const redirect = useNavigate()

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

    let AddToCart = (item) => {
        console.log(item);
        const add =  localStorage.setItem('CartItems', item)
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
            const filteredCourses = temp.filter(item => arr.includes(item.Category.name));
            setCourse(filteredCourses);
            //  console.log(filteredCourses);
        }
    }, [arr]);


    useEffect(() => {
        getAllCategories()
        getAllCourses()
    }, [])


    return (
        <>
            <BasicExample />

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

                            <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "16%" }}>
                                Categories
                            </p>

                            {

                                categories.map((i, k) => (
                                    <>

                                        <input
                                            checked={arr.includes(i.name)}
                                            onChange={handleChange}
                                            value={i.name
                                            } style={{ marginLeft: "17%", marginTop: "7%" }} type='checkbox' />
                                        <label style={{ fontFamily: "Hind, sans-serif", marginLeft: "2%" }}>
                                            {i.name}
                                        </label> <br />
                                    </>
                                ))
                            }
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
                                                style={{ width: '18rem', height: "24rem" }}>

                                                <Card.Img style={{ width: "245px", height: "181px", paddingLeft: "8%", borderRadius: "5px", marginTop: "2%" }} variant="top" src={'http://localhost:5000/uploads/Images/' + item.Image} />
                                                <Card.Body>

                                                    <Card.Title
                                                        style={{ fontFamily: "Hind, sans-serif", fontWeight: "600", fontSize: "13px", lineHeight: "15px", borderRadius: "20px", border: "0.1px solid gray", width: "120px", height: "25px", background: "#F5F0FF", borderStyle: "none", color: "#7A0EF0", paddingTop: "2%", paddingLeft: "8%", marginLeft: "22%" }}
                                                    >
                                                        {item.Category.name}
                                                    </Card.Title>

                                                    <Card.Text
                                                     onClick={()=>viewCourse(item._id)}
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

                                                {/* <img style={{ width: "200px", marginLeft: "15%" }} src='/src/assets/Screenshot 2024-03-30 205942.jpg' /> <br /> */}

                                                <button
                                                    className='AddToCartButton'
                                                    onClick={() => AddToCart(item)}
                                                >
                                                    Add To Cart
                                                </button>

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