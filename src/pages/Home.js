import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Heart, ShoppingCart } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productsSlice';
import { Link } from 'react-router-dom';

function Home() {

    const dispatch = useDispatch()

    const { allProducts, loading, error } = useSelector((state) => state.productsSlice)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <div>

            <div className='mt-5 text-center'>

                <Carousel>
                    <Carousel.Item >
                        <img
                            alt=''
                            src="https://i.postimg.cc/ZnzhnLM4/DT-G18-E-commerce-Animated-GIF-Icon.webp"
                            style={{ width: '100%', height: '500px' }}
                            
                            text="First slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt=''
                            src="https://i.postimg.cc/pXPgSyNG/Shopping-E-Commerce-Animated-GIF-Icon-Pack-2.webp"
                            style={{ width: '100%', height: '500px' }}
                            
                            text="Second slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt=''
                            src="https://i.postimg.cc/4xDQHMXw/360-F-271775672-yo8-Zgra-N2-IHGbfq-P2k0-Ps-Ljwvmat-UNUJ.jpg"
                            style={{ width: '100%', height: '500px' }}
                            
                            text="Third slide" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

            <div className='mt-5'>
                <Container className='text-center'>
                    <h4>Technology that grows with your online business</h4>
                    <h1>Accomplish more than just selling.</h1>
                </Container>
            </div>
            <hr className='mt-5'></hr>

            <div>
                <Row >
                    <Col lg={6} md={6} sm={12}>
                        <img
                            alt=''
                            width={400}
                            src="https://i.postimg.cc/VLghWbyd/61f3f1cb7c1ada62775b8a2d-53902-online-shopping-and-delivery.gif"
                        />
                    </Col>
                    <Col lg={6} md={6} sm={12} className='text-center mt-5'>
                        <h1 >EASY <span className='text-warning'>!!!</span></h1>
                        <h1>&</h1>
                        <h1><span className='text-warning'>SAFE</span> Payment</h1>
                    </Col>

                </Row>

            </div>
            <hr className='mt-5'></hr>
            <h1 className='container text-center mt-5'>PRODUCTS</h1>

            <Row className='mt-4'>
                {
                    loading &&
                    <div className='text-center p-5 mt-5'>
                        <i class="fa-duotone fa-spinner fa-spin-pulse fa-5x"></i>
                    </div>

                }
                {
                    allProducts.length > 0 && allProducts.map(i => (
                        <Col lg={3} md={4} sm={6} className='p-5'>
                            <Card style={{ width: '18rem' }} className='text-center p-2'>
                                <Card.Img variant="top"
                                    style={{ height: '300px' }}
                                    src={i.image} />

                                <Card.Body>
                                    <Card.Title><h4>{i.title.length > 30 ? i.title.slice(0, 30) + "..." : i.title}</h4></Card.Title>
                                    <Card.Text>
                                        <b>$ {i.price}</b> <br></br>
                                        <b>Rating {i.rating.rate}
                                            <i class="fa-solid fa-star" style={{ color: " #FFD700" }}></i>
                                        </b>
                                    </Card.Text>
                                    <Button onClick={() => dispatch(addToCart(i))} variant='dark' className='w-50'>
                                        <ShoppingCart size={24}></ShoppingCart>
                                    </Button>
                                    <Button onClick={() => dispatch(addToWishlist(i))} variant='light' className='w-50'
                                    >
                                        <Heart size={24} style={{ fill: 'red', border: 'none' }}></Heart>
                                    </Button> <br></br>
                                    {/* new btn */}
                                    <Link to={'/cart'}>
                                        <Button onClick={() => dispatch(addToCart(i))} className='bnt btn-warning w-100 mt-3'>BUY</Button>

                                    </Link>

                                </Card.Body>
                            </Card>

                        </Col>

                    ))
                }

            </Row>

        </div>
    )
}

export default Home