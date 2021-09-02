import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HeroItem from './HeroItem';

//Lista de los superhéroes del equipo. 
//Aquí obtenemos la información recibida de la API via props y la mapeamos con el componente "HeroItem".
export default function HeroList({ heroes, deleteHero }) {
    
    return (
        <Row>
            {heroes.map((item) => (
                    <Col key={item.id} lg={4} md={4} sm={6} className="containerCard my-3">
                        < HeroItem
                            id={item.id}
                            name={item.name}
                            image={item.image.url}
                            deleteHero={deleteHero}
                            powerstats={item.powerstats}
                            alignment={item.biography.alignment}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}
