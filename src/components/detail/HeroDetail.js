import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

/* Componente donde mostraremos el detalle del superhéroe del equipo.
Utilizamos la información obtenida de la API via props y la plasmamos aquí */
export default function HeroDetail(props) {

    return (
        <Card style={{ width: '40rem' }} id="detail">
            <Row>
                <Col lg={7}>
                    <Card.Title className="m-0 p-3"><h3>{props.name}</h3></Card.Title>
                    <Card.Body>
                        <Card.Text className="large_font">
                            <p>Alias: <span className="bold">{props.alias}</span></p>
                            <p>Lugar de trabajo: <span className="bold">{props.workplace}</span></p>
                            <p>Altura: <span className="bold">{props.height}</span></p>
                            <p>Peso: <span className="bold">{props.weight}</span></p>
                            <p>Color de ojos: <span className="bold">{props.eyeColor}</span></p>
                            <p>Color  de pelo: <span className="bold">{props.hairColor}</span></p>
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col lg={5}>
                    <Card.Img id="imgHeroDetail" variant="top" src={props.image} />
                </Col>
            </Row>
        </Card>
    )
}
