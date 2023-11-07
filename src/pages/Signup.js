import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div>
            <Container className='mt-5' style={{ width: '400px' }}>
                <div className='border p-5'>
                    <h1>Sign-Up</h1>
                    <Form.Control className='mt-3' type="text" placeholder="Email/Phone-number" />
                    <br />
                    <Form.Control className='mt-3' type="text" placeholder="Set Password" />
                    <br />
                    <Form.Control className='mt-3' type="text" placeholder="Re-Enter Your Password" />
                    <Link to={'/sign-in'}>
                        <Button className='btn btn-primary w-100 mt-5'>Sign-Up</Button>

                    </Link>

                    <b>By continuing, you agree to <span className='text-warning'>Shopper Ave </span>
                        Conditions of Use and Privacy Notice.</b>
                    <hr></hr>
                </div>

            </Container>

        </div>
    )
}

export default Signup