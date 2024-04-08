import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EditTutor = () => {
  const initialState = { name: "", profession: "" }
  const [tutor, setTutor] = useState(initialState)
  const [img, setImg] = useState('');
  const imgRef = useRef()
  const { id } = useParams()
  const { name, profession, Image } = tutor
  let redirect = useNavigate()

  let token = localStorage.getItem('AdminToken')
  if (token === null) {
    return alert('Login first to access this page ')
  }

  let singleTutor = async () => {
    await axios.get('http://localhost:5000/tutor/getSingleTutor/' + id)
      .then((resp) => {
        console.log(resp.data);
        setTutor(resp.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  let updateTutor = () => {

    let formData = new FormData()
    formData.append('name', name)
    formData.append('profession', profession)
    formData.append('Image', imgRef.current.files[0])

    axios.put('http://localhost:5000/tutor/updateTutor/' + id, formData)
      .then((res) => {
        // setLoading(false)
        console.log(res.data.Data);
        redirect('/getTutors')
        alert('Updated Succesfullly')

      })
      .catch((err) => {
        console.log(err);
      })
  }

  let handleChange = (e) => {
    const { name, value } = e.target
    setTutor({ ...tutor, [name]: value })

  }

  const handleImg = (m) => {
    setImg(m.target.files[0])
  }

  //    console.log(handleChange());

  let handleSubmit = (e) => {
    e.preventDefault()
    updateTutor()
  }

  useEffect(() => {
    singleTutor()
  }, [])


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' onChange={handleChange} value={name} type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Profession</Form.Label>
          <Form.Control name='profession' onChange={handleChange} value={profession} type="text" placeholder="Profession" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>

        <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} />

        <img src={"http://localhost:5000/uploads/Images/" + Image} alt='' style={{ borderStyle: '', height: '130px', width: '170px', position: "absolute", left: "20px", top: "200px" }}
          className={img ? 'none' : 'block'}
        /> <br />

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

export default EditTutor 