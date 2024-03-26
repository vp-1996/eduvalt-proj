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
  const { name, profession } = product
  let redirect = useNavigate()

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

      axios.put('http://localhost:5000/tutor/updateTutor/'+id, formData)
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


  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default EditTutor 