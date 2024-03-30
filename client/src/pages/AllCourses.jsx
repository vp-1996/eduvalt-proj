import React, { useState, useEffect } from 'react'
import BasicExample from '../components/NavBar'
import axios from 'axios'

const AllCourses = () => {
 const[categories,setCategories] = useState([])



    return (
        <>
            <BasicExample />

            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Courses
                </h3>
            </div>
            <br /><br />


            <div className='filterSection'>

                <p style={{ fontFamily: "Lexend Deca, sans-serif", fontWeight: "500", fontSize: "19px", color: "rgb(8, 42, 94", lineHeight: "23px", marginLeft: "20%" }}>
                    Categories
                </p>

            </div>
            <br /><br />


        </>
    )
}

export default AllCourses