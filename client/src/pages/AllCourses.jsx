import React, { useState, useEffect } from 'react'
import BasicExample from '../components/NavBar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';

const AllCourses = () => {
    const [categories, setCategories] = useState([])
    const [course, setCourse] = useState([])
    const [temp, setTemp] = useState([])

    let getAllCategoies = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
            .then((resp) => {
                console.log(resp.data);
                setCategories(resp.data.data)
                
            })
    }

    let getAllCourses = () => {
        axios.get('http://localhost:5000/course/GetAllCourses')
            .then((resp) => {
               // console.log(resp.data);
                setCourse(resp.data.Data)
                setTemp(resp.data.Data)
            })
    }
    console.log(temp);

     const [arr,setArr] = useState([])
     console.log(arr);
     
      const handleChange=(e)=>{
         const {value,checked} = e.target;
         if (checked) {
            setArr([...arr,value])
            
         }
         else{
            setArr(arr.filter(i=>i!==value))
         }

      

        //  setCourse(
        //     arr.length==0?course : 
        //     course.filter((item)=>arr.some(element=>element===item.Category.name))
        //  )
         
      }
// console.log(course);
// console.log(arr);

    useEffect(() => {
        if (arr.length === 0) {
            // If no categories selected, show all courses
            
            getAllCourses()
        } 
        else {
           // getAllCourses()
            // Filter courses based on selected categories
            const filteredCourses = temp.filter(item => arr.includes(item.Category.name));
            setCourse(filteredCourses);
          //  console.log(filteredCourses);

            // const filteredCourses = [];
            // course.forEach(item => {
            //     if (arr.includes(item.Category.name)) {
            //         filteredCourses.push(item);
            //     }
            // });
            // setCourse(filteredCourses);
        }
    }, [arr]);


    useEffect(() => {
        getAllCategoies()
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

            <div className='main d-flex'>

                <div className='filterSection'>

                    <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "16%" }}>
                        Categories
                    </p>


                    {/* <input type='checkbox' />
                <label>BHKB</label><br />
                <input type='checkbox' />
                <label>BHKB</label> */}

                    {
                        categories.map((i, k) => (
                            <>

                        <input checked={arr.includes(i.name)} onChange={handleChange} value={i.name} style={{ marginLeft: "17%", marginTop: "7%" }} type='checkbox' />
                        <label style={{ fontFamily: "Hind, sans-serif", marginLeft: "2%" }}>{i.name}</label> <br />
                            </>
                        ))
                    }
                </div>

                <div className='row ms-5'>
                    {
                        course.map((item, k) => (
                            <>
                                <Card style={{ width: '18rem', marginTop: "4%", marginLeft: "3%", height: "24rem" }}>

                                    <Card.Img style={{ width: "245px", height: "181px", paddingLeft: "8%", borderRadius: "5px", marginTop: "2%" }} variant="top" src={'http://localhost:5000/uploads/Images/' + item.Image} />
                                    <Card.Body>

                                        <Card.Title
                                            style={{ fontFamily: "Hind, sans-serif", fontWeight: "600", fontSize: "13px", lineHeight: "15px", borderRadius: "20px", border: "0.1px solid gray", textAlign: "center", width: "120px", height: "25px", background: "#F5F0FF", borderStyle: "none", color: "#7A0EF0", paddingTop: "2%" }}
                                           >
                                            {item.Category.name}
                                        </Card.Title>

                                        <Card.Text style={{ color: "#082A5E", fontWeight: "600", fontFamily: "Lexend Deca,sans-serif", fontStyle: "normal", fontStretch: "100%" }}>
                                            {item.Description}
                                        </Card.Text>

                                        <Button variant='light' style={{ width: "200px" }}>
                                            <img src='/src/assets/time.png' />
                                            {item.Duration}

                                            <img style={{ paddingLeft: "08%" }} src='/src/assets/food.png' />
                                            {item.Lessons}
                                        </Button>
                                    </Card.Body>

                                    <img style={{ width: "200px", marginLeft: "15%" }} src='/src/assets/Screenshot 2024-03-30 205942.jpg' /> <br />

                                </Card>
                            </>
                        ))
                    }
                </div>

            </div>

            <br /><br /><br /><br />

            <Footer />


        </>
    )
}

export default AllCourses