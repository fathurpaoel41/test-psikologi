import React from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function CardSoal(props) {
    const styleLink = {
        textDecoration: "none",
        color: "black",
    }

    return (
        <>
            <Col md={4} style={{ padding: "10px", color: "black" }} >
                <Link to={`/soal/${props.id}`} style={styleLink}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={props.img} />
                        <Card.Body>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    )
}
