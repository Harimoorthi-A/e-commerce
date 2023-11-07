import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Heart, ShoppingCart, User } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { searchProduct } from '../redux/productsSlice';

function Header() {

    const cartArray = useSelector(state => state.cart)

    const wishArray = useSelector(state => state.wishlist)

    const dispatch = useDispatch()

    return (
        <div>
            <Navbar expand="lg" className="bg-warning" >
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="https://i.postimg.cc/rs2CqJ6s/png-clipart-shopping-cart-logo-web-development-e-commerce-business-logo-itech-ecommerce-company-ecom.png"
                                width="70"
                                height="60"
                                className="d-inline-block align-top"
                            />
                            <b className='text-white fs-1'>Shopper Ave</b>
                        </Navbar.Brand>

                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='text-white' href="/">Home</Nav.Link>
                            {/* <Nav.Link className='text-white' href="#link">Link</Nav.Link> */}

                            <Form.Control onChange={(e)=>dispatch(searchProduct(e.target.value))} className='ms-5' type="text" placeholder="Search Product" />

                        </Nav>
                        <Nav >
                            <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>
                                <Nav.Link className='text-white' href="#home">
                                    <Heart size={25}></Heart>
                                    <button className='ms-2' 
                                        style={{borderRadius:'20px',width:'20px',border:'none',backgroundColor:'red'}}
                                    >{wishArray.length}</button>

                                </Nav.Link>
                            </Link>
                            <Link to={'/cart'} style={{ textDecoration: 'none' }}>
                                <Nav.Link className='text-white ' href="#link">
                                    <ShoppingCart size={25}></ShoppingCart>
                                    <button className='ms-2' 
                                        style={{borderRadius:'20px',width:'20px',border:'none',backgroundColor:'red'}}
                                    >{cartArray.length}</button>
                                </Nav.Link>

                            </Link>
                            <Link to={'/sign-in'} >
                                <Nav.Link className='text-white ' href="#link">
                                    <User size={25}></User>

                                </Nav.Link>
                            </Link>
                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header