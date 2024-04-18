import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import productModel from '../../../server/model/product.model'
import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AdminNav from '../../components/adminNav';
 import '../../styles/AddCourse.css'

const AddCourse = () => {
    const initialState = { Description: "", Lessons: "", Duration: "", Category: "" }
    const [course, setCourse] = useState(initialState);
    const [img, setImg] = useState(null);
    let [cat, setCategory] = useState([])
    const imgRef = useRef();
    const { Description, Lessons, Duration, Category } = course
    const redirect = useNavigate();

    let getCategories = async () => {

        await axios.get('http://localhost:5000/category/getAllCategories')
            .then((res) => {
                console.log(res.data);
                setCategory(res.data.data)
            })

            .catch((err) => {
                console.log(err);
            })
    }

    let createCourse = () => {

        let formData = new FormData()
        formData.append('Description', Description)
        formData.append('Lessons', Lessons)
        formData.append('Duration', Duration)
        formData.append('Category', Category)
        formData.append('Image', imgRef.current.files[0])
        formData.append('CoursePriceType',priceType)
        formData.append('Price',price)


        axios.post('http://localhost:5000/course/addCourse', formData)
            .then((res) => {
                // setLoading(false)
                 
                redirect('/GetCourses')
                alert('Added Succesfullly')

            })
            .catch((err) => {
                console.log(err);
            })

    }
    

    let handleChange = (e) => {
        const { name, value } = e.target
        setCourse({ ...course, [name]: value })
        // console.log(setCourse({ ...course, [name]: value }));
    }

    const handleImg = (m) => {
        setImg(m.target.files[0])
    }

    const [price,setPrice] = useState(0)
    const [priceType,setPriceType] = useState('Free')

    const enableInput=(e)=>{
        let inputField = document.getElementById('myInput')
        setPrice(0)
        setPriceType(e.target.value)
        inputField.disabled = false
        
    }

    const disableInput = (e)=>{
        let inputField = document.getElementById('myInput')
        setPrice(0)
        setPriceType(e.target.value)
        inputField.disabled = true
        
     }


     const handlePrice=(e)=>{
         setPrice(e.target.value)
     }
     console.log(price+''+priceType);

    let handleSubmit = (e) => {
        e.preventDefault()
        createCourse()
    }

    useEffect(() => {
        getCategories()
    }, [])

    

    return (
        <div>
            <AdminNav/>
            <br />


            <Form
             style={{width:"50%",border:"ridge",marginLeft:"30%",borderRadius:"20px",background:"#F8F6E3",boxShadow:"1px 1px 12px 10px gray",height:"700px"}}
              encType='multipart/form-data' onSubmit={handleSubmit}>

                <select
                    required
                    style={{ background: "#8B93FF", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", borderRadius: "7px",marginLeft:"30%",marginTop:"5%"}}
                    value={Category}
                    name='Category'
                    onChange={handleChange}>
                    <option value='' disabled>Select Category</option>
                    {
                        cat.map((i, k) => (
                            <option value={i._id}>{i.name}</option>
                        ))
                    }
                </select>  <br /><br />

                 <div style={{marginLeft:"35%"}}> 

                <p style={{fontWeight:"500"}}>Course Type:</p>

                <input checked={priceType==='Free' ? true : false} value='Free' id='free' onClick={disableInput} name='CourseType' type='radio'/>
                <label className='ms-1' htmlFor='free'>Free</label>  

                <input checked={priceType==='Paid' ? true : false} value='Paid' id='paid' onClick={enableInput} name='CourseType' style={{marginLeft:"5%"}} type='radio'/>
                <label className='ms-1' htmlFor='paid'>Paid</label> <br/>

                <input
                onChange={handlePrice}
                value={price} id='myInput' placeholder='Enter Price' disabled type='number'/>

                  </div>

                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Control
                        style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}} 
                        className='w-50'
                        maxLength={20}
                        name='Description'
                        value={Description}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Description(max 20 char allowed)"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}} 
                        className='w-50'
                        required
                        min={1}
                        name='Lessons'
                        value={Lessons}
                        onChange={handleChange}
                        type="number"
                        placeholder="Enter Number Of Lessons"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}} 
                        className='w-50'
                        required
                        name='Duration'
                        value={Duration}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Duration"
                    />
                </Form.Group>

                    <div style={{marginLeft:"30%",marginTop:"5%"}}>
                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} /> <br/> <br/>

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> <br />
                        </div>
                        <br/>

                <Button style={{marginLeft:"35%",width:"150px"}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
             <br/>
        </div>
    )
}

export default AddCourse