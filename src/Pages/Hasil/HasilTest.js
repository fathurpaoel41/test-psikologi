import React, { Component } from "react"
import Content from "../../Components/Content"
import { Card, Col, Row } from "react-bootstrap"
import CardSoal from "../../Components/CardSoal"

export default class HasilTest extends Component {
    constructor(props) {
        super(props)
        
        const getTotalPoint = localStorage.getItem("totalPoint")

        this.state = {
            total_points: getTotalPoint,
        }
    }
    render() {
        return (
            <Content>
                <Col md={12} style={{ color: "black" }}>
                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>Hasil Test Anda</Card.Title>
                            <Card.Text>
                                <h2>
                                    <center>
                                        <b>Skor Anda : {this.state.total_points}</b>
                                    </center>
                                </h2>
                                <br />
                                hasil yag kamu dapatkan bla blablablabla
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="py-4">
                    <Row className="show-grid">
                        <Col lg={12}>
                            <h1>
                                <center>
                                    Daftar Soal yang bisa kamu coba !
                                </center>
                            </h1>
                            <Row className="show-grid d-flex justify-content-center">
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}
