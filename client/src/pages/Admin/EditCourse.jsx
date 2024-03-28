import React, { useEffect, useState } from 'react';
import { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditCourse = () => {
    const initialState = { Description: "", Lessons: "", Duration: "" }
    const [course, setCourse] = useState(initialState);
    const [img, setImg] = useState(null);
    let [category, setCategory] = useState("")
    let [categories,setCategories] = useState([])
    const imgRef = useRef();
    const { Description, Lessons, Duration, Image } = course
    let redirect = useNavigate();
    const { id } = useParams()


    let getCategories = async () => {

        await axios.get('http://localhost:5000/category/getAllCategories')
            .then((res) => {
                console.log(res.data);
                setCategories(res.data.data)
            })

            .catch((err) => {
                console.log(err);
            })
    }

    const getSingleCourse = async () => {
        await axios.get('http://localhost:5000/course/getSingleCourse/' + id)
            .then((resp) => {
                console.log(resp.data);
                setCourse(resp.data.data)
                setCategory(resp.data.Category)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let updateCourse = () => {
        let formData = new FormData()
        formData.append('Description', Description)
        formData.append('Lessons', Lessons)
        formData.append('Duration', Duration)
        formData.append('Category', category)
        formData.append('Image', imgRef.current.files[0])

        axios.put('http://localhost:5000/course/updateCourse/' + id, formData)
            .then((res) => {
                // setLoading(false)
                console.log(res.data.Data);
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

    }

    const handleImg = (m) => {
        setImg(m.target.files[0])
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
            <Form onSubmit={handleSubmit}>

                <select
                    required
                    style={{ background: "#42A5F5", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", marginLeft: "15%", borderRadius: "7px" }}
                    value={category}
                    name='Category'
                   // onChange={handleChange}
                   onChange={(e)=>setCategory(e.target.value)}
                    >
                    <option value={category}>Select Category</option>
                    {
                        categories.map((i, k) => (
                            <option value={i._id}>{i.name}</option>
                        ))
                    }
                </select>  <br /><br />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='Description' onChange={handleChange} value={Description} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Lessons</Form.Label>
                    <Form.Control name='Lessons' onChange={handleChange} value={Lessons} type="number" placeholder="Lessons" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Lessons</Form.Label>
                    <Form.Control name='Duration' onChange={handleChange} value={Duration} type="text" placeholder="Duration" />
                </Form.Group>

                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} />

                <img src={"http://localhost:5000/uploads/Images/" + Image} alt='' style={{ borderStyle: '', height: '130px', width: '170px', position: "absolute", left: "600px", top: "320px" }}
                    className={img ? 'none' : 'block'}
                />
                <br />

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> <br />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default EditCourse