import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditCourse = () => {
    const initialState = { Description: "", Lessons: "", Duration: "", Category: "" }
    const [course, setCourse] = useState(initialState);
    const [img, setImg] = useState(null);
    // let [cat, setCategory] = useState("")
    let [categories, setCategories] = useState([])
    const imgRef = useRef();
    const { Description, Lessons, Duration, Image
        , Category
    } = course
    let redirect = useNavigate();
    const { id } = useParams()
   // console.log(id);

    let getCategories = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
            .then((res) => {
                // console.log(res.data);
                setCategories(res.data.data)
            })

            .catch((err) => {
                console.log(err);
            })
    }

    const getSingleCourse = async () => {
        await axios.get('http://localhost:5000/course/getSingleCourse/' + id)
            .then((resp) => {
                // console.log(resp.data);
                setCourse(resp.data.data)
                // setCategory(resp.data.Category)
            })
            .catch((err) => {
                console.log(err);
            })
    }

   // console.log(course);

    let updateCourse = () => {
        let formData = new FormData()

        formData.append('Description', Description)
        formData.append('Lessons', Lessons)
        formData.append('Duration', Duration)
        formData.append('Category', Category._id ? Category._id : course.Category)
        formData.append('Image', imgRef.current.files[0] ? imgRef.current.files[0] : course.Image)
        formData.append('CoursePriceType',priceType)
        formData.append('Price',Price)

        // Display the key/value pairs
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }


        axios.put('http://localhost:5000/course/updateCourse/' + id, formData)
            .then((res) => {
                // console.log(res.data.Data);
                redirect('/GetCourses')
                alert('Updated Succesfullly')
            })

            .catch((err) => {
                console.log(err);
            })

    }

    let handleChange = (e) => {
        const { name, value } = e.target
        setCourse({ ...course, [name]: value })
        // Category._id = e.target.value
        // setCategory(e.target.value)
        }
   // console.log(course);

    // console.log(Category);

    const handleImg = (m) => {
        setImg(m.target.files[0])
    }

    const [Price,setPrice] = useState(0)
    const [priceType,setPriceType] = useState(course?.CoursePriceType)

      useEffect(()=>{
        setPriceType(course?.CoursePriceType)
        setPrice(course?.Price)
      },[course?.CoursePriceType])

    console.log(course?.CoursePriceType);

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

    //    console.log(handleChange());

    let handleSubmit = (e) => {
        e.preventDefault()
        updateCourse()
    }


    useEffect(() => {
        getSingleCourse()
        getCategories()
    }, [])

    return (
        <>
            <Form
            style={{width:"50%",border:"ridge",marginLeft:"30%",borderRadius:"20px",background:"#F8F6E3",boxShadow:"1px 1px 12px 10px gray",height:"800px"}}
             encType='multipart/form-data' onSubmit={handleSubmit}>

                    <select             
                    style={{ background: "#8B93FF", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", borderRadius: "7px",marginLeft:"30%",marginTop:"5%"}}
                    // value={Category?.name}
                    // defaultValue={Category.name}
                    name='Category'
                    onChange={handleChange}
                >

                    {
                        categories.map((i, k) => (
                            <option selected={Category.name === i.name ? true : false} key={k} value={i._id}>
                                {i.name}
                            </option>
                        ))
                    }
                </select>  <br /><br />

                <div style={{marginLeft:"35%"}}> 

                <p style={{fontWeight:"500"}}>Course Type:</p>

                <input checked={priceType==='Free' ? true : false} value='Free' id='free' onClick={disableInput} name='CourseType' type='radio'/>
                <label className='ms-1' htmlFor='free'>
                    Free
                    </label>  

                <input checked={priceType==='Paid' ? true : false} value='Paid' id='paid' onClick={enableInput} name='CourseType' style={{marginLeft:"5%"}} type='radio'/>
                    <label className='ms-1' htmlFor='paid'>
                    Paid
                    </label> <br/>

                <input
                onChange={handlePrice}
                value={Price} id='myInput' placeholder='Enter Price' type='number'/>

                  </div>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                    style={{marginLeft:"25%",fontWeight:"500",marginTop:"5%"}}
                    >
                        Name :
                    </Form.Label>

                    <Form.Control
                     style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}}
                     className='w-50' 
                    name='Description'
                     onChange={handleChange}
                      value={Description} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label
                    style={{marginLeft:"25%",fontWeight:"500"}}
                    >
                        Lessons :
                        </Form.Label>
                    <Form.Control
                     style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}}
                     className='w-50'
                      name='Lessons'
                      onChange={handleChange} value={Lessons} type="number" placeholder="Lessons" />
                </Form.Group>

                <Form.Group className="mb-3">
                     <Form.Label
                     style={{marginLeft:"25%",fontWeight:"500"}}
                     >
                        Duration :
                        </Form.Label>
                    <Form.Control
                     style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}}
                     className='w-50'
                     name='Duration'
                      onChange={handleChange} value={Duration}
                       type="text" placeholder="Duration" />
                </Form.Group>

                <div style={{marginLeft:"30%",marginTop:"5%"}}>
                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} />

                
                <img src={"http://localhost:5000/uploads/Images/" + Image} alt='' style={{ borderStyle: '', height: '130px', width: '170px', position: "absolute", left: "630px", top: "534px" }}
                    className={img ? 'none' : 'block'}
                />
                <br />

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> 
                 </div>  <br />

                 <Button style={{marginLeft:"35%",width:"150px"}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default EditCourse