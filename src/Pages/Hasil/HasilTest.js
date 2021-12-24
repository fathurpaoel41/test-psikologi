import React, { Component } from "react"
import Content from "../../Components/Content"
import { Card, Col, Row, Spinner } from "react-bootstrap"
import CardSoal from "../../Components/CardSoal"
import DataSoalAPI from "../../API/DataSoalAPI"
import HasilTestApi from "../../API/HasilTestApi"
import loadable from '@loadable/component'

const CardSoalLoad = loadable(() => import("../../Components/CardSoal"), {
    fallback: <div><center><Spinner animation="border" variant="primary" /></center></div>,
})

export default class HasilTest extends Component {
    constructor(props) {
        super(props)
        this.dataSoalAPI = new DataSoalAPI()
        this.hasilTestApi = new HasilTestApi()

        this.state = {
            dataSoal: [],
            total_points: localStorage.getItem("totalPoint"),
            idSoal: localStorage.getItem("idSoal"),
            hasilTest: ""
        }

        this.CheckTotalPoint = this.CheckTotalPoint.bind(this)
    }

    async componentDidMount() {
        this.dataSoalAPI.getDataSoal().then((data) => {
            this.setState({ dataSoal: data.data })
        })
        this.CheckTotalPoint()
    }

    async CheckTotalPoint() {
        let hasilTest = null
        let api = await this.hasilTestApi.getDataHasilTest(this.state.idSoal).then((data) => {
            hasilTest = data.data.hasilTest
        })

        hasilTest.map((data) => {
            if (this.state.total_points >= data.from && this.state.total_points <= data.to) {
                this.setState({ hasilTest: data.deskripsi })
            }
        })
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
                                <p align="justify">{this.state.hasilTest}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <div style={{ marginLeft: "2rem" }}>
                    <Col lg={12}>
                        <h1><center>Daftar Tes yang bisa kamu coba !</center></h1>
                        <Row className="show-grid d-flex justify-content-center">
                            {
                                (this.state.dataSoal).length > 0 ? this.state.dataSoal.map(function (data, key) {
                                    return (<CardSoal
                                        key={key}
                                        img={data.image}
                                        title={data.titleSoal}
                                        description={data.descriptionSoal}
                                        id={data.id}
                                    />)
                                }) : <div><center><Spinner animation="border" variant="primary" /></center></div>
                            }
                        </Row>
                    </Col>
                </div>
            </Content>
        )
    }
}
