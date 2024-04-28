import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import BasicExample from '../components/NavBar'    
import Footer from '../components/Footer'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext'; 
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListGroup from 'react-bootstrap/ListGroup';

const ViewCourse = () => {
       const [course,setCourse] = useState([])
       const {id} = useParams()
       const [value, setValue] = React.useState('1');

       const handleChange = (event, newValue) => {
         setValue(newValue);
         };

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
            style={{color:"white",fontFamily:"Lexend Deca,sans-serif",fontSize:"36px",fontWeight:"600",fontStretch:"100%",marginLeft:"100px",marginTop:"30px",}}
            >
            <span style={{textDecoration:"underline"}} >{course.Description}</span>
             ' Illustrator for Graphic Design'
            </h3>

           <p style={{color:"#B2BDCD",marginLeft:"07.5%"}}>
            Learn How To Build The Perfect Diet & Meal Plan For Improved Health, Better Weight Loss And…
           </p>

           <div>
           <img
            style={{height:"41px",width:"41px",borderRadius:"100%",marginLeft:"7%"}}
            src='/src/assets/author_img-150x150.png'
            />

            <span style={{paddingRight:"6%"}}>

             <img style={{marginLeft:"5%"}} src='/src/assets/document.png'/>
             <span style={{color:"white",opacity:"55%"}} className='ms-1'>
             {course.Lessons}
             </span>

             <img className='ms-4' src='/src/assets/clock.png'/>
             <span style={{color:"white",marginLeft:"0.6",opacity:"55%"}}>
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

         
        <iframe style={{marginTop:"120px",marginLeft:"100px"}} width="800" height="450" src="https://www.youtube.com/embed/yGDwk4z9EEg?si=ir16fb_TyyRGCJhA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>

               {/*////////////////// Accordion Section////////////// */}
            <Box style={{marginTop:"10%",marginLeft:"4%"}} sx={{ width: '85%', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Course Info" value="1" />
            <Tab label="Curriculam" value="2" />
            <Tab label="Announcements" value="3" />
            </TabList>
            </Box>
            <TabPanel value="1">
               <p style={{color:"#39557E",fontFamily:"Hind,sans-serif",fontWeight:"400",fontSize:"16px",textDecoration:"none solid rgb(57, 85, 126)"}}>
               <span style={{fontWeight:"700",color:"#39557E"}}> Are you new to PHP or need a refresher ? </span>
             Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. <br/>
             <span style={{fontWeight:"700",color:"#39557E",lineHeight:"35px"}}>
             Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.
             </span>
              Being a PHP developer can allow anyone to make really good money online and offline, developing dynamic applications.
               </p>              
               </TabPanel>

              <TabPanel value="2">
              <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={{color:"#1363df",fontWeight:"600",fontSize:"25px"}}>
            Advance Concepts
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ListGroup >
      <ListGroup.Item >
         <h5 className='ListGrup' >
         Meal Planning Explained
         </h5>
         
         </ListGroup.Item>
         <ListGroup.Item >
         <h5 className='ListGrup' >
         Macronutrients Explained
         </h5>
         </ListGroup.Item>
      <ListGroup.Item>
          <h5 className='ListGrup'>
          Adjusting Your Diet To Build Muscle
          </h5>
         </ListGroup.Item>

      </ListGroup>
          </Typography> 
        </AccordionDetails>
      </Accordion>
      </TabPanel>

            <TabPanel value="3">
              <img src='/src/assets/emptystate.svg'/>
              <p style={{marginLeft:"25%",fontSize:"22px"}}>
               No New Announcements !!!
               </p>
               </TabPanel>
            </TabContext>
            </Box>

            
        
         <div style={{marginTop:"15%"}}>
        <Footer/>
        </div>
    
    </>
  )
}

export default ViewCourse