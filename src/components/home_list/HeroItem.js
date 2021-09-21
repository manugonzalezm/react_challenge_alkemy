import React from 'react';
import { Card, Button, ProgressBar, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// Componente individual para los superhéroes del equipo en el Home.
export default function HeroItem(props) {
    const colors = ["info", "success", "warning", "secondary", "primary", "danger"]
    const names = ["intelligence", "strength", "speed", "durability", "power", "combat"]
    const powerstats = [];
    for(const p in props.powerstats){
        powerstats.push(
        {
            name: p.charAt(0).toUpperCase() + p.slice(1),
            color: colors[names.indexOf(p)],
            value: props.powerstats[p]
        })
    }

    return (
        <Card 
            className={`${props.alignment}`} 
            style={{ width: '20rem' }}
        >
            <Card.Img className="img_hero" variant="top" src={props.image} />
            <Card.Body>
                <Card.Title className="m-0"><h3>{props.name}</h3></Card.Title>
                <div>
                    <Row className="powerstats_item">
                        {powerstats.map(item => (
                            <div key={item.name+item.id}>
                                <Col className="my-1" lg={11}>
                                    {item.name}
                                </Col>
                                <Col className="my-1" lg={11}>
                                    <ProgressBar variant={item.color} now={item.value} />
                                </Col>
                            </div>
                        ))}
                    </Row>
                </div>
                <div className="containerHero">
                    <Link to={`/detail/${props.id}`}>
                        <Button variant="info" className="detail_button">
                            Ver más
                        </Button>
                    </Link>
                    <Button onClick={() => props.deleteHero(props.id)} variant="danger" className="delete_button">
                        <span className="material-icons xs-18">delete</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
