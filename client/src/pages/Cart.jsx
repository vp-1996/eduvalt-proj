import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import BasicExample from '../components/NavBar';
import Table from 'react-bootstrap/Table';
import Footer from '../components/Footer';


const Cart = () => {

    let { state, dispatch } = useContext(CartContext)
    console.log(state);

    localStorage.getItem('CartItems')


    return (
        <>
            <BasicExample />

            <div className='overlay'>
                <div className='bgBanner'></div>
                <h3
                    style={{ fontSize: "50px", bottom: "100px", left: "100px", position: "absolute", color: "white", zIndex: "10", fontFamily: "Lexend Deca, sans-serif", fontWeight: "600" }}>
                    Cart
                </h3>
            </div> <br /><br /><br />


            <Table style={{ width: "80%", marginLeft: "10%", border: "3px solid #E6EAEF" }} striped bordered hover>
                <thead>
                    <tr style={{ textAlign: "center" }}>
                        <th >Image</th>
                        <th>Course Name</th>
                        <th>Lessons</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody >

                    {
                        state.cart.map((x, id) => (
                            <>
                                <tr style={{ textAlign: "center", border: "3px solid #E6EAEF" }}>

                                    <td style={{ alignItems: "center", border: "3px solid #E6EAEF" }}>
                                        <img style={{ height: "65px", width: "65px" }} src={'http://localhost:5000/uploads/Images/' + x.Image} />
                                    </td>

                                    <td style={{ color: "#1363E1", fontWeight: "500", justifyContent: "center", paddingTop: "3%", border: "3px solid #E6EAEF" }}>
                                        {x.Description}
                                    </td>

                                    <td style={{ paddingTop: "3%", border: "3px solid #E6EAEF" }}>
                                        {x.Lessons}
                                    </td>

                                    <td style={{ paddingTop: "3%" }}>
                                        {x.Duration}
                                    </td>
                                </tr>

                            </>
                        ))
                    }

                </tbody>

            </Table> <br />

            <div style={{ marginLeft: "50%" }}>
                <input placeholder='Coupon code' className='couponInput' type='text' />

                <button className='couponButton'>
                    Apply Coupon
                </button>

                <br /><br />

                <button className='checkoutButton'>
                    Proceed To Checkout
                </button>
            </div>
            <br /> <br /><br /> <br /><br /> <br />


            <Footer />

        </>
    )
}

export default Cart