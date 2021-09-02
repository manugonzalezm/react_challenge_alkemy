import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

/* Componente donde mostraremos el detalle del superhéroe del equipo.
Utilizamos la información obtenida de la API via props y la plasmamos aquí */
export default function HeroDetail(props) {

    return (
        <Card style={{ width: '40rem' }} id="detail">
            <Row>
                <Col lg={7} md={7} sm={7}>
                    <Card.Title className="m-0 p-3"><h3>{props.name}</h3></Card.Title>
                    <Card.Body>
                        <Card.Text id="textDetail">
                            <span className="detail_fields">Alias: <span className="bold">{props.alias}</span></span>
                            <span className="detail_fields">Lugar de trabajo: <span className="bold">{props.workplace}</span></span>
                            <span className="detail_fields">Altura: <span className="bold">{props.height}</span></span>
                            <span className="detail_fields">Peso: <span className="bold">{props.weight}</span></span>
                            <span className="detail_fields">Color de ojos: <span className="bold">{props.eyeColor}</span></span>
                            <span className="detail_fields">Color  de pelo: <span className="bold">{props.hairColor}</span></span>
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col lg={5} md={5} sm={5}>
                    <Card.Img id="imgHeroDetail" variant="top" src={props.image} />
                </Col>
            </Row>
        </Card>
    )
}
