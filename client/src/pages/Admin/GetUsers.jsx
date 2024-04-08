import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminNav from '../../components/adminNav';

const GetUsers = () => {
    let [users, setUsers] = useState([]) 

    let token = localStorage.getItem('AdminToken')
      if (token === null) {
    return alert('Login first to access this page ')
      }

    let allUsers = () => {
        axios.get('http://localhost:5000/admin/getUsers')
            .then((res) => {
                console.log(res);
                setUsers(res.data.userData)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        allUsers()
    }, [])

    return (
        <>
            <AdminNav />
            <br /><br /><br />

            <TableContainer
                component={Paper}
            >
                <Table
                    sx={{ minWidth: 650 }}
                    aria-label="simple table">
                    <TableHead style={{ background: " #B2BEB5" }}>
                        <TableRow>
                            <TableCell align='center' style={{ fontWeight: "700" }}>
                                Name
                            </TableCell>
                            <TableCell align='center' style={{ fontWeight: "700" }}>
                                Email
                            </TableCell>
                            <TableCell align='center' style={{ fontWeight: "700" }}>
                                Number
                            </TableCell>
                            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {

                            users.map((item) => (
                                <>
                                    <TableRow
                                    //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            align='center'
                                            style={{ fontFamily: "'Tilt Neon', sans-serif", background: "#E5E0E4" }}
                                        >
                                            {item.name}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            style={{ fontFamily: "'Roboto Slab', serif", background: "#E5E0E4" }}
                                        >
                                            {item.email}
                                        </TableCell>
                                        <TableCell
                                            align='center'
                                            style={{ fontFamily: "'Quicksand', sans-serif", background: "#E5E0E4" }}
                                        >
                                            {item.number}
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))


                        }
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default GetUsers