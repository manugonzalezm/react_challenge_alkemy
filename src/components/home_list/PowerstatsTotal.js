import React from 'react'
import { Card, Col, Row, ProgressBar, Container } from 'react-bootstrap'

//Este componente mostrará las powerstats totales del equipo asi como tambien la altura y peso promedio.
export default function PowerstatsTotal({ heroes, good, evil }) {

    //Lógica para powerstats, altura y peso promedio del equipo.
    const colors = ["info", "success", "warning", "secondary", "primary", "danger"]
    const names = ["intelligence", "strength", "speed", "durability", "power", "combat"]
    let totalHeight = 0;
    let totalWeight = 0;
    const powerTotal = {
        intelligence: 0,
        strength: 0,
        speed: 0,
        durability: 0,
        power: 0,
        combat:0
    }
    for(const h of heroes){
        powerTotal.intelligence = parseInt(powerTotal.intelligence) + parseInt(h.powerstats.intelligence);
        powerTotal.strength = parseInt(powerTotal.strength) + parseInt(h.powerstats.strength);
        powerTotal.speed = parseInt(powerTotal.speed) + parseInt(h.powerstats.speed);
        powerTotal.durability = parseInt(powerTotal.durability) + parseInt(h.powerstats.durability);
        powerTotal.power = parseInt(powerTotal.power) + parseInt(h.powerstats.power);
        powerTotal.combat = parseInt(powerTotal.combat) + parseInt(h.powerstats.combat);
        totalHeight += parseInt((h.appearance.height[1]).slice(0,-3));
        totalWeight += parseInt((h.appearance.weight[1]).slice(0,-3));
    }
    console.log(powerTotal)
    const powerstats = [];
    for(const p in powerTotal){
        console.log(p)
        powerstats.push(
        {
            name: p.charAt(0).toUpperCase() + p.slice(1),
            color: colors[names.indexOf(p)],
            value: parseInt((powerTotal[p])/(heroes.length))
        })
    }
    powerstats.sort(function (a, b) {
        if (a.value > b.value) {
            return -1;
        }
        if (a.value < b.value) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
    console.log(powerstats)

    return (
        <Card className="p-2 my-3" id="powerstatsTotal">
            <Container>
                <Row>
                    <Col xs={12}>
                        <p id="titlePowerstats">Estadísticas promedio del equipo</p>
                    </Col>
                    <Col className="m-2" lg={6} md={6} sm={6}>
                        <Row>
                            {powerstats.map(item => (
                                <div key={`${item.id}${item.name}`}>
                                    <Col className="my-0" lg={12}>
                                        {item.name}
                                    </Col>
                                    <Col className="my-1" lg={12}>
                                        <ProgressBar variant={item.color} now={item.value} />
                                    </Col>
                                </div>
                            ))}
                        </Row>
                    </Col>
                    <Col className="my-2" lg={5} md={5} sm={5}>
                        <Row>
                            <Col className="my-1 large_font" lg={12}>
                                Altura Promedio: <span className="bold">{parseInt(totalHeight/heroes.length)} cm</span>
                            </Col>
                            <Col className="my-1 large_font" lg={12}>
                                Peso Promedio: <span className="bold">{parseInt(totalWeight/heroes.length)} kg</span>
                            </Col>
                            { heroes.length<6 ?
                                <Col className="my-4" lg={12} id="textHelper"> {/* Operador condicional para manejar el singular y el plural de los superheroes restantes */}
                                    Todavía podés elegir {6-heroes.length} superhéroe{heroes.length !== 5 && <span>s</span>} más.
                                </Col>
                                :
                                <Col className="my-1" lg={12} id="textHelper">
                                    Alcanzaste el máximo de 6 miembros.
                                </Col>
                            }
                            <Col id="counterTitle" lg={12}>
                                Posiciones ocupadas:
                            </Col>
                            <Col className="my-1 count_alignment bg-success" xs={6}>
                                Buenos: {good}/3
                            </Col>
                            <Col className="my-1 count_alignment bg-danger" xs={6}>
                                Malos: {evil}/3
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}
