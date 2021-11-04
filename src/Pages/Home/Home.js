import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "../../Components/NavigationBar"
import FooterBar from "../../Components/FooterBar"
import { Container, Row, Col, Image } from "react-bootstrap"
import "../../Assets/Style.css"
import brain from "../../Assets/images/brain.jpg"
import CardSoal from "../../Components/CardSoal"

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div className="jumbotron">
                    <Container>
                        <div className="py-4">
                            <Row>
                                <Col xs={6}>
                                    <p align="justify">
                                        Ini adalah website explorasi saya pada
                                        pembuatan Web Apps Sederhana. Website
                                        ini dibuat 100% Menggunakan ReactJs. Web
                                        Apps <b>In Your Brain </b>
                                        untuk tes psikologi anda dengan hasil
                                        sesuai dengan apa yang kamu jawab
                                    </p>
                                </Col>
                                <Col xs={6}>
                                    <Image src={brain} fluid style={{ borderRadius: "20px" }}/>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-4">
                            <Row className="show-grid">
                                <Col lg={12}>
                                    <Row className="show-grid d-flex justify-content-center">
                                            <CardSoal />
                                            <CardSoal />
                                            <CardSoal />
                                            <CardSoal />
                                            <CardSoal />
                                            <CardSoal />
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <FooterBar />
                </div>
            </div>
        )
    }
}
