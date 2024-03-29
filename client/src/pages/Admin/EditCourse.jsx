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
    console.log(id);

    let getCategories = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
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
                // setCategory(resp.data.Category)
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
        formData.append('Category', Category._id ? Category._id : course.Category)
        formData.append('Image', imgRef.current.files[0] ? imgRef.current.files[0] : course.Image)

        // Display the key/value pairs
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }


        axios.put('http://localhost:5000/course/updateCourse/' + id, formData)
            .then((res) => {
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
        // Category._id = e.target.value
        // setCategory(e.target.value)
    }
    console.log(course);

    // console.log(Category);

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
            <Form encType='multipart/form-data' onSubmit={handleSubmit}>

                <select
                    style={{ background: "#42A5F5", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", marginLeft: "0%", borderRadius: "7px" }}
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

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='Description' onChange={handleChange} value={Description} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Lessons</Form.Label>
                    <Form.Control name='Lessons' onChange={handleChange} value={Lessons} type="number" placeholder="Lessons" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Control name='Duration' onChange={handleChange} value={Duration} type="text" placeholder="Duration" />
                </Form.Group>

                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} />

                <img src={"http://localhost:5000/uploads/Images/" + Image} alt='' style={{ borderStyle: '', height: '130px', width: '170px', position: "absolute", left: "600px", top: "385px" }}
                    className={img ? 'none' : 'block'}
                />
                <br />

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> <br />

                <Button style={{ marginTop: "40px" }} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default EditCourse