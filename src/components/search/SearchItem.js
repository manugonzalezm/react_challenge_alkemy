import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function SearchItem(props) {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img className="img_hero" variant="top" src={props.image} />
            <Card.Body className="searchItem">
                <Card.Title className="m-0"><h3>{props.name}</h3></Card.Title>
                <div className="containerHero">
                    <Button onClick={() => props.addHero(props.id)} variant="success">
                        <span className="material-icons xs-25">add</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
