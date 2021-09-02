import React from 'react'
import SearchHero from './SearchHero';
import { Row, Col, Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavBar() {
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
                id="navBar"
            >
                <Container>
                    <Row id="rowNavbar">
                        <Col xs={12} md={3} lg={3} id="homeIcon">
                            <Link to='/'>
                                <Navbar.Brand>
                                    <span id="brand" className="material-icons xs-36">home</span>
                                </Navbar.Brand>
                            </Link>
                        </Col>
                        <Col xs={10} sm={7} md={7} lg={7}>
                            <SearchHero />
                        </Col>
                        <Col xs={2} sm={2} md={2} lg={2}>
                            <Button id="logoutButton" variant="danger" bg="danger" size="sm" onClick={logOut}>
                                <span className="material-icons">logout</span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </div>
    )
}
