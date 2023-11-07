import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Facebook, GitHub, Instagram, Twitter } from 'react-feather';

function Footer() {
    return (
        <div className='bg-warning mt-5'>
            <hr></hr>
            <Container>

                <Row>
                    <b className='text-center'>Created and Designed by Harimoorthi A</b>
                    <p className='text-center'>All rights reserved 2023</p>


                    <Col lg={3} md={4} sm={6} xs={12} className='mt-3'>
                        <p>Get to Know Us</p><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>About Us</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Careers</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Press Releases</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Shopper Ave's Science</b></a>
                    </Col>

                    <Col lg={3} md={4} sm={6} xs={12} className='mt-3'>
                        <p>Connect with Us</p>
                        <b>Facebook</b><Facebook size={20} className='ms-2'></Facebook><br></br>
                        <b>Twitter</b><Twitter size={20} className='ms-2'></Twitter><br></br>
                        <b>Instagram</b><Instagram size={20} className='ms-2'></Instagram><br></br>
                        <b>GitHub</b><GitHub size={20} className='ms-2'></GitHub><br></br>
                    </Col>

                    <Col lg={3} md={4} sm={6} xs={12} className='mt-3'>
                        <p>Make Money with Us</p>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Sell on Shopper Ave</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Sell under Shopper Ave</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Protect and Build Your Brand</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Become an Affiliate</b></a><br></br>

                    </Col>

                    <Col lg={3} md={4} sm={6} xs={12} className='mt-3'>
                        <p>Let Us Help You</p><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>COVID-19 and Shopper Ave</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Your Account</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Return Centre</b></a><br></br>
                        <a href="" style={{ textDecoration: "none", color: "black" }}><b>Help</b></a><br></br>

                    </Col>

                </Row>

            </Container>
            <hr></hr>
        </div>
    )
}

export default Footer