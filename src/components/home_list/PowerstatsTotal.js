import React, { useState } from 'react'
import { Card, Col, Row, ProgressBar } from 'react-bootstrap'

//Este componente mostrará las powerstats totales del equipo asi como tambien la altura y peso promedio.
export default function PowerstatsTotal({ heroes }) {

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
    console.log(powerstats)

    return (
        <Card className="p-2 my-3">
            <Row>
                <Col className="my-1" lg={7}>
                    <Row>
                        {powerstats.map(item => (
                            <>
                                <Col className="my-1" lg={3}>
                                    {item.name}
                                </Col>
                                <Col className="my-1" lg={8}>
                                    <ProgressBar variant={item.color} now={item.value} />
                                </Col>
                            </>
                        ))}
                    </Row>
                </Col>
                <Col className="my-1" lg={5}>
                    <Row>
                        <Col className="my-1" lg={12}>
                            Altura Promedio: {parseInt(totalHeight/heroes.length)} cm
                        </Col>
                        <Col className="my-1" lg={12}>
                            Peso Promedio: {parseInt(totalWeight/heroes.length)} kg
                        </Col>
                        { heroes.length<6 ?
                            <Col className="my-5" lg={12} id="textHelper">
                                Todavía podés elegir {6-heroes.length} superhéroes más.
                            </Col>
                            :
                            <Col className="my-1" lg={12} id="textHelper">
                                Alcanzaste el máximo de 6 miembros.
                            </Col>
                        }
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}
