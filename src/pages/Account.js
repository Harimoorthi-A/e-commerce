import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Account() {
    return (
        <div>
            <Container className='mt-5' style={{ width: '400px' }}>
                <div className='border p-5'>
                    <h1>Sign-In</h1>
                    <Form.Control className='mt-3' type="text" placeholder="Email/Phone-number" />
                    <br />
                    <Form.Control className='mt-3' type="text" placeholder="Password" />
                    <Button className='btn btn-primary w-100 mt-5'>Sign-in</Button>
                    <b>By continuing, you agree to <span className='text-warning'>Shopper Ave </span>
                        Conditions of Use and Privacy Notice.</b>
                    <hr></hr>
                    <Link to={'/sign-up'}>
                        <Button className='btn btn-light'>Create your Shopper Ave account</Button>

                    </Link>
                </div>

            </Container>
        </div>
    )
}

export default Account