import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function SearchItem(props) {
    let history = useHistory();
    async function handleClick(){
        await props.addHero(props.id);
        history.push('/');
    }
    return (
        <Card className="card_search" style={{ width: '20rem' }}>
            <Card.Img className="img_hero" variant="top" src={props.image} />
            <Card.Body className="searchItem">
                <Card.Title className="m-0"><h3>{props.name}</h3></Card.Title>
                <div className="containerHero">
                    <Button onClick={handleClick} variant="success">
                        <span className="material-icons xs-25">add</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}
