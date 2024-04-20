import React, { useEffect, useState } from 'react'
import AdminNav from '../../components/adminNav'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

const GetAllBlogs = () => {

  const [blog, setBlog] = useState([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  let [path, setPath] = useState('')
  let navigate = useNavigate()

  // Pagination  
  const recordsPerPage = 4
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = blog.slice(firstIndex, lastIndex)
  const npage = Math.ceil(blog.length / recordsPerPage)
  const nums = [...Array(npage + 1).keys()].slice(1)

  let token = localStorage.getItem('AdminToken')
  if (token === null) {
    return alert('Login first to access this page ')
  }

  let allBlogs = () => {
    axios.get('http://localhost:5000/blog/GetAllBlogs')
      .then((resp) => {
        setBlog(resp.data.Data)
        setPath(resp.data.path)
        console.log(resp.data);
      })

      .catch((err) => {
        console.log(err);
      })
  }

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changeCurrPage = (id) => {
    setCurrentPage(id)
  }

  let deleteBlog = (blogID) => {

    if (window.confirm('Are You Sure You Want To Delete This ?')) {

      axios.delete('http://localhost:5000/blog/DeleteBlog/' + blogID)
        .then(() => {
          console.log('Deleted Sucessfully');
          allBlogs()
        })

        .catch((err) => {
          console.log('Error while deleting');
          console.log(err);
        })
    }
  }

  let editButton = (id) => {
    navigate('/EditBlog/' + id)
   }

  useEffect(() => {
    allBlogs()
  }, [])

  return (
    <>
      <AdminNav />

      <br />

    <div
    style={{ fontSize: "20px", width: "65%", height: "40px", textAlign: "center", marginLeft: "24%", backgroundColor: "#9AD0C2", color: "whitesmoke", fontWeight: "700",borderRadius:"10px",wordSpacing:"10px",letterSpacing:"5px"}} 
>
    <p>
        ALL BLOGS
    </p>
   </div>

   <br />

   <Table style={{ width: "100%", marginLeft: "23%", height: "200px" }} bordered>
                <thead>
                    {/* <tr> */}
                    <tbody>
                        <th style={{ borderBottom: "1px solid black", width: "200px", textAlign: "center", background: "#D1BB9E", color: "white" }}>
                            Category
                        </th>

                        <th style={{ borderBottom: "1px solid black", background: "#D1BB9E", color: "white",textAlign:"center"}}>
                            Title
                        </th>

                        <th style={{ borderBottom: "1px solid black", background: "#D1BB9E", color: "white" }}>
                            Comments
                        </th>
                    
                       
                        <th style={{ borderBottom: "1px solid black", width: "150px", textAlign: "center", background: "#D1BB9E", color: "white" }}>
                            Image
                        </th>

                        <th style={{ borderBottom: "1px solid black", width: "150px", textAlign: "center", background: "#D1BB9E", color: "white" }}>
                            Delete
                        </th>

                        <th style={{ width: "100px", textAlign: "center", borderBottom: "1px solid black", background: "#D1BB9E", color: "white" }}>
                            Edit
                        </th>


                        {
                            records.map((i, k) => (
                                <>

                                    <tr
                                        style={{ background: "#F8F6E3", fontWeight: "600" }}>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "13px",
                                            textAlign: "center"
                                        }}
                                        >
                                            {i.Category?.name}
                                        </td>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "13px"
                                        }}
                                        >
                                            {i.Title}
                                        </td>

                                        <td
                                            style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "13px",
                                            textAlign: "center"
                                        }}
                                        >
                                            {i.Comments}
                                        </td>

                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "14px"
                                        }}
                                        >
                                            <img src={path + '/' + i.Image} style={{ height: "100px", width: "120px", borderRadius: "15px" }} />
                                        </td>

                                        <td style={{
                                            textAlign: "center",
                                            borderBottom: "1px solid black"
                                        }}>
                                            <button
                                                onClick={() => deleteBlog(i._id)}
                                                style={{ border: "none", borderRadius: "15px", background: "white" }}
                                            >
                                                <img
                                                    src='/src/assets/delete.png' />
                                            </button>

                                        </td>

                                        <td
                                            style={{ textAlign: "center", borderBottom: "1px solid black" }}
                                        >
                                            <img
                                                src='/src/assets/pencil2.png'
                                                onClick={() => editButton(i._id)}
                                            />
                                        </td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                    {/* </tr> */}
                </thead>
            </Table>

            <div>
                <Pagination
                    style={{ marginLeft: "49%" }}
                >
                    <Pagination.Prev onClick={prevPage} />
                    {
                        nums.map((n, k) => (
                            <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={k}>
                                <a className='page-link' href='#' onClick={() => changeCurrPage(n)} >{n}</a>
                            </li>
                        ))
                    }

                    <Pagination.Next onClick={nextPage} />
                </Pagination>
                <br />
            </div>

    </>
  )
}

export default GetAllBlogs