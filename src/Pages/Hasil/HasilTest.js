import React, { Component } from "react"
import Content from "../../Components/Content"
import { Card, Col, Row,Spinner } from "react-bootstrap"
import CardSoal from "../../Components/CardSoal"
import DataSoalAPI from "../../API/DataSoalAPI"
import loadable from '@loadable/component'

const CardSoalLoad = loadable(() => import("../../Components/CardSoal"), {
    fallback: <div><center><Spinner animation="border" variant="primary" /></center></div>,
  })

export default class HasilTest extends Component {
    constructor(props) {
        super(props)
        this.dataSoalAPI = new DataSoalAPI()
        
        const getTotalPoint = localStorage.getItem("totalPoint")

        this.state = {
            dataSoal : [],
            total_points: getTotalPoint,
        }
    }

    async componentDidMount() {
        let api = await this.dataSoalAPI.getDataSoal().then((data) => {
            this.setState({dataSoal : data.data})
        }).catch((error) => {
            console.log("error = ",error)
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
                                hasil yag kamu dapatkan bla blablablabla
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <div className="py-4">
                    <Row className="show-grid">
                        <Col lg={12}>
                            <h1><center>Daftar Soal yang bisa kamu coba !</center></h1>
                            <Row className="show-grid d-flex justify-content-center">
                                {
                                    (this.state.dataSoal).length > 0 ? this.state.dataSoal.map(function(data) {
                                        return(<CardSoal 
                                            img={data.image}
                                            title={data.titleSoal}
                                            description={data.descriptionSoal}
                                            id={data.id}
                                        />)
                                    }) : <div><center><Spinner animation="border" variant="primary" /></center></div>
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Content>
        )
    }
}
