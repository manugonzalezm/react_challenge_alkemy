import React from 'react'
import SearchHero from './SearchHero';
import { Row, Col, Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NavBar() {

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
                                <Navbar.Brand id="brand">
                                    <span className="material-icons xs-36">home</span>
                                </Navbar.Brand>
                            </Link>
                        </Col>
                        <Col xs={8} sm={8} md={6} lg={6}>
                            <SearchHero />
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}
