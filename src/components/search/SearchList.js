import React from 'react';
import SearchItem from './SearchItem';
import { Row, Col } from 'react-bootstrap';

/* En este componente mapearemos los héroes que hayan coincidido con la búsqueda.
Se recibe la información del componente padre via props. */
export default function SearchList({ search, addHero }) {
    return (
        <Row>
            {search.map((item) => (
                    <Col key={item.id} lg={4} className="containerCard my-3">
                        < SearchItem
                            key={item.id}
                            addHero={addHero}
                            name={item.name}
                            image={item.image.url}
                        />
                    </Col>
                ))
            }
        </Row>
    )
}
