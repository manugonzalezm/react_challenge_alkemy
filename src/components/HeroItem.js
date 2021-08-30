import React from 'react';
import { Card, Button, ProgressBar, Row, Col } from 'react-bootstrap'

/* Componente individual para los superhéroes del equipo en el Home y en las búsquedas.
Dependiendo de las props que este reciba del componente padre se renderizarán o no ciertos elementos: 
como por ejemplo las powerstats si estamos en el home o el botón de "agregar al equipo" si estamos 
en la sección de búsqueda. */
export default function HeroItem() {
    const powerstats = [
        {
            name: "Intelligence",
            color: "info",
            value: 81
        },
        {
            name: "Strength",
            color: "success",
            value: 40
        },
        {
            name: "Speed",
            color: "warning",
            value: 29
        },
        {
            name: "Durability",
            color: "secondary",
            value: 55
        },
        {
            name: "Power",
            color: "primary",
            value: 63
        },
        {
            name: "Combat",
            color: "danger",
            value: 90
        }
    ]

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img className="img_hero" variant="top" src="https://www.superherodb.com/pictures2/portraits/10/100/639.jpg" />
            <Card.Body>
                <Card.Title className="m-0"><h3>Batman</h3></Card.Title>
                <div>
                    <Row>
                        {powerstats.map(item => (
                            <>
                                <Col className="my-1" lg={5}>
                                    {item.name}
                                </Col>
                                <Col className="my-1" lg={7}>
                                    <ProgressBar variant={item.color} now={item.value} />
                                </Col>
                            </>
                        ))}
                    </Row>
                </div>
                <div className="containerHero">
                    <Button variant="info">
                        Ver más
                    </Button>
                    <Button variant="danger">
                        <span class="material-icons xs-18">delete</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
