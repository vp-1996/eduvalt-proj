import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import BasicExample from '../components/NavBar'

const ViewCourse = () => {
       const [course,setCourse] = useState([])
       const {id} = useParams()

       const getCourse=()=>{
        axios.get('http://localhost:5000/course/getSingleCourse/'+id)
       .then((res)=>{
          console.log(res);
          setCourse(res.data.data)
       })

       }
        
       useEffect(()=>{
        getCourse()
       },[])

  return (
    <>
      <BasicExample/>     
        
        {course.Description}
        
    </>
  )
}

export default ViewCourse