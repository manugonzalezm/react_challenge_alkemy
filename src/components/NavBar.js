import React from 'react'
import SearchHero from './SearchHero';
import { Row, Col, Container, Navbar, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function NavBar() {
    let history= useHistory();
    const logOut = () => {
        localStorage.removeItem('hero_token');
        window.location.reload();
    }

    return (
        <div>
            <Navbar 
                fixed="top" 
                bg="dark" 
                variant="dark"
            >
                <Container>
                    <Row id="rowNavbar">
                        <Col xs={4} sm={4} md={6} lg={5} id="homeIcon">
                            <Link to='/'>
                                <Navbar.Brand id="brand">
                                    <span className="material-icons xs-36">home</span>
                                </Navbar.Brand>
                            </Link>
                        </Col>
                        <Col xs={8} sm={8} md={6} lg={5}>
                            <SearchHero />
                        </Col>
                        <Col lg={2}>
                            <Button variant="danger" bg="danger" onClick={logOut}>
                            Cerrar Sesión
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}
