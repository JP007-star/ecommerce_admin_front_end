import React, {  useState } from 'react'
import { Layout } from '../../components/Layout'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Input } from '../../components/UI/Input'
import { login } from '../../actions'
import { useDispatch ,useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

/**
* @author JAYA PRASAD
* @function SignIn
**/

export const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth =useSelector(state =>state.auth)

    const dispatch = useDispatch()
    const userLogin = (e) => {
        e.preventDefault()
        const user = {
            email, password
        }
        dispatch(login(user));
    }

    if(auth.authenticate){
        return <Navigate to='/' replace />
    }

    return (
        <>
            <Layout>
                <Container>
                    <Row  style={{ marginTop: '100px' }}>
                        <Col className='card p-5' md={{ span: 6, offset: 3 }}>
     
                            <Form onSubmit={userLogin}>
                                <Input
                                    label="Email Address"
                                    placeholder="Email Address"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />

                                <Input
                                    label="Password"
                                    placeholder="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}

                                />

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>

                </Container>
            </Layout>

        </>
    )

}