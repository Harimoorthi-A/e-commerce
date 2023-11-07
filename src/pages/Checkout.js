import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';

function Checkout() {
    return (
        <div>

            <div className='bg-light mt-5 container text-center'>
                <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <img
                            alt=''
                            width='100%'
                            height='100%'
                            src="https://i.postimg.cc/cCQKwSrN/app-online-store.gif"
                        />

                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Form.Control type="phone number" placeholder="Card number (MM/YY CVC)" />
                        <br />
                        <Form.Control type="text" placeholder="Street address" />
                        <br />
                        <Form.Control type="text" placeholder="Apt, unit, suite, etc..(options)" />
                        <br />
                        <Form.Control type="text" placeholder="Countrty" />
                        <br />
                        <Row>
                            <Col lg={4} md={4} sm={4} xs={6}>
                                <Form.Control type="text" placeholder="City" />
                                <br />
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={6}>
                                <Form.Control type="text" placeholder="State" />
                                <br />
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={6}>
                                <Form.Control type="text" placeholder="Zip code" />
                                <br />
                            </Col>
                        </Row>

                    </Col>

                </Row>

                <Button className='btn btn-warning w-100  mt-5'>PAY</Button>
            </div>

        </div >
    )
}

export default Checkout