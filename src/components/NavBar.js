import React from 'react'
import TextInput from './TextInput'
import { Row, Col, Container, Navbar, OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup';

export default function NavBar() {
    let history = useHistory();

    return (
        <div>
            <Navbar 
                fixed="top" 
                bg="dark" 
                variant="dark"
            >
                <Container>
                    <Row id="rowNavbar">
                        <Col xs={4} sm={4} md={6} lg={6} id="homeIcon">
                            <Link to='/'>
                                <Navbar.Brand>
                                    <span className="material-icons xs-36">home</span>
                                </Navbar.Brand>
                            </Link>
                        </Col>
                        <Col xs={8} sm={8} md={6} lg={6}>
                            <Formik
                                initialValues={{
                                    heroName: '',
                                }}
                                validationSchema={Yup.object({
                                    heroName: Yup.string()
                                    .max(15, <span className="form_alert">Debe tener 15 caracteres o menos</span>)
                                    .required(<span className="form_alert">Requerido</span>)
                                })}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        console.log(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                        history.push(`/search/${values.heroName}`)
                                    }, 400);
                                }}
                            >
                                <Form id="searchBox">
                                    <TextInput 
                                        label=""
                                        name="heroName"
                                        type="text"
                                        placeholder="Buscá tu héroe"
                                    />
                                    <Button variant="info" bg="info" type="submit" id="searchIcon">
                                        <span className="material-icons xs-18">search</span>
                                    </Button>
                                </Form>
                            </Formik>
                            {/* <Form>
                                <Form.Control type="text" placeholder="Search" />
                            </Form> */}
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}
