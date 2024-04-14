import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import BasicExample from '../components/NavBar'
import Footer from '../components/Footer'

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

            <span>

            <img style={{marginLeft:"5%"}} src='/src/assets/document.png'/>
             <span style={{color:"white",opacity:"55%"}} className='ms-1'>
             {course.Lessons}
             </span>

             <img className='ms-4' src='/src/assets/clock.png'/>
             <span style={{color:"white",marginLeft:"0.4%",opacity:"55%"}}>
             {course.Duration}
             </span>
               
               
            </span>

           </div>

           <div style={{background:"white",position:"absolute",height:"370px",width:"240px",left:"1000px",border:"0.3px solid gray", top:"180px"}}>

               <h4 className='ms-4 mt-3' style={{fontWeight:"700",color:"#39557E"}}>
               {course.CoursePriceType}
               </h4>

               <button className='enrollButton'>
                  Enroll Now
               </button>

               <p style={{fontSize:"16px",textAlign:"center",marginTop:"7%",fontWeight:"500"}}>
               {course.CoursePriceType==='Free' ? 'Free Access This Course':'₹'+ course.Price}
               </p>

               <hr></hr>

               <ul className='mt-4 List'>
                 <li>All Levels</li>
                 <li>101 Total Enrolled</li>
                 <li>English</li>
               </ul>


           </div>
  
         
        </div> 

         {/* <div style={{marginTop:"200px"}}>
       <Footer/>
       </div> */}
        

    </>
  )
}

export default ViewCourse