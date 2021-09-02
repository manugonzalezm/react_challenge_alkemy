import React from 'react';
import HeroDetail from './HeroDetail';
import { useHeroesContext } from '../../context/HeroesContext'
import { useParams } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'

// Contenedor del detalle de superhéroe.
/* Aquí ejecutamos la petición a la API obteniendo la información que se utilizará
en el componente anidado HeroDetail */
export default function HeroDetailContainer() {
    const { heroes } = useHeroesContext();
    const idHero = useParams()
    const hero = heroes.find(h => h.id === idHero.idHero)
    console.log(idHero.idHero)
    console.log(hero)
    return (
        <>
        <Container className="my-3" id="detailContainer">
            < HeroDetail
                name={hero.name}
                image={hero.image.url}
                alias={hero.biography.aliases[0]}
                height={hero.appearance.height[1]}
                weight={hero.appearance.weight[1]}
                eyeColor={hero.appearance["eye-color"]}
                hairColor={hero.appearance["hair-color"]}
                workplace={hero.work.base}
            />
        </Container>
        <div id="buttonHome">
            <Button
                variant="primary"
                bg="primary"
            >
                Volver al home
            </Button>
        </div>
        </>
    )
}
