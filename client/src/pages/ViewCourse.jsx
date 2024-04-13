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

       .catch((err)=>{
          console.log(err);  
       })

       }
        
       useEffect(()=>{
        getCourse()
       },[])



  return (
    <>
        <BasicExample/>  

        <div className='myDiv' >

            <button style={{color:"white",background:"#04BC53",width:"100px",borderRadius:"20px",marginLeft:"100px",marginTop:"50px",border:"none",fontWeight:"600",letterSpacing:"1px"}}>
               {course.Category?.name}
            </button>

            <h3 
            style={{color:"white",fontFamily:"Lexend Deca,sans-serif",fontSize:"36px",fontWeight:"600",fontStretch:"100%",marginLeft:"100px",marginTop:"30px"}}
            >
            {course.Description+' Illustrator for Graphic Design'}
           </h3>

           <p style={{color:"#B2BDCD",marginLeft:"07.5%"}}>
            Learn How To Build The Perfect Diet & Meal Plan For Improved Health, Better Weight Loss And…
           </p>

           <div>

           <img
            style={{height:"41px",width:"41px",borderRadius:"100%",marginLeft:"7%"}}
            src='/src/assets/author_img-150x150.png'
            />

            <span style={{}}>
               <img style={{marginLeft:"5%"}} src='/src/assets/document.png'/>
               {course.Lessons}
            </span>

           </div>
  
         
        </div>

         

           
        

    </>
  )
}

export default ViewCourse