import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import AdminNav from '../../components/adminNav';

const GetAllCategories = () => {
    const [category, getCategory] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    let navigate = useNavigate()

    // Pagination  
    const recordsPerPage = 4
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = category.slice(firstIndex, lastIndex)
    const npage = Math.ceil(category.length / recordsPerPage)
    const nums = [...Array(npage + 1).keys()].slice(1)

    let token = localStorage.getItem('AdminToken')
      if (token === null) {
    return alert('Login first to access this page ')
      }

    let allCategories = () => {
        axios.get('http://localhost:5000/category/getAllCategories')
            .then((resp) => {
                getCategory(resp.data.data)
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

    let deleteCat = (catID) => {

        if (window.confirm('Are You Sure You Want To Delete This ?')) {

            axios.delete('http://localhost:5000/category/deleteCategory/' + catID)
                .then(() => {
                    console.log('Deleted Sucessfully');
                    allCategories()
                })

                .catch((err) => {
                    console.log('Error while deleting');
                })
        }
    }

    let editButton = (id) => {
        navigate('/EditCategory/' + id)
    }


    useEffect(() => {
        allCategories()
    }, [])



    return (
        <>
           <AdminNav/>
            <br />

            <div
                style={{ fontSize: "20px", width: "65%", height: "40px", textAlign: "center", marginLeft: "20%", backgroundColor: "#9AD0C2", color: "whitesmoke", fontWeight: "700", letterSpacing: "2px", borderRadius:"10px"}}
            >
                <p>
                    ALL CATEGORIES
                </p>
            </div>

            <br />

            <Table style={{ width: "100%", marginLeft: "39%", height: "200px" }} bordered hover variant="">
                <thead>
                    {/* <tr> */}
                    <tbody>
                        <th style={{ borderBottom: "1px solid black" }}>
                            Category
                        </th>
                        {/* <th>Edit</th> */}
                        <th style={{ borderBottom: "1px solid black", width: "150px", textAlign: "center" }}>
                            Delete
                        </th>
                        <th style={{ width: "100px", textAlign: "center", borderBottom: "1px solid black" }}>
                            Edit
                        </th>
                        {

                            records.map((i, k) => (
                                <>

                                    <tr>
                                        <td style={{
                                            height: "55px",
                                            borderBottom: "1px solid black",
                                            fontFamily: "'Tilt Neon', sans-serif",
                                            fontSize: "14px"
                                        }}
                                        >
                                            {i.name}
                                        </td>

                                        <td style={{
                                            textAlign: "center",
                                            borderBottom: "1px solid black"
                                        }}>
                                            <button
                                                onClick={() => deleteCat(i._id)}
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
                {/* <Pagination.Ellipsis /> */}
                <Pagination
                    style={{ marginLeft: "48%" }}
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

export default GetAllCategories