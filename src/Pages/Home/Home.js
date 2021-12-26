import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Image, Spinner } from "react-bootstrap"
import "../../Assets/Style.css"
import brain from "../../Assets/images/brain.jpg"
// import CardSoal from "../../Components/CardSoal"
import Content from "../../Components/Content"
import loadable from '@loadable/component'
import DataSoalAPI from "../../API/DataSoalAPI"

const CardSoal = loadable(() => import("../../Components/CardSoal"), {
    fallback: <div><center><Spinner animation="border" variant="primary" /></center></div>,
})
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.dataSoalAPI = new DataSoalAPI()

        this.state = {
            dataSoal: [],
            statusConsume: false
        }
    }

    async componentDidMount() {
        let api = await this.dataSoalAPI.getDataSoal().then((data) => {
            this.setState({ dataSoal: data.data })
        }).catch((error) => {
            console.log("error = ", error)
        })
    }

    render() {
        return (
            <Content>
                <div className="py-4">
                    <Row>
                        <Col xs={6}>
                            <p align="justify">
                                Ini adalah website explorasi saya pada pembuatan
                                Web Apps Sederhana. Website ini dibuat 100%
                                Menggunakan ReactJs. Web Apps{" "}
                                <b>In Your Brain </b>
                                untuk tes psikologi anda dengan hasil sesuai
                                dengan apa yang kamu jawab <br /> <br />
                                Tes psikologi ini hanya ingin memberikan informasi tentang apa yang sedang kalian rasakan
                                terhadap semua yang kamu jawab. <br /><br />
                                Tes Psikologi ini hanyalah pengungkapan tentang siapa dirimu serta akurasi tes psikologi ini
                                saya bisa berikan hanya 65%. Maka dari itu jangan memberikan stigma kepada dirimu atas hasil
                                apa yang telah kamu kerjakan <br /><br />
                                Jika hasil tes yang kamu lakukan itu menurutmu Related apa yang sedang kamu alami. Tenang, Website akan
                                memberikan solusi apa yang sedang kamu alami sebagai opsi untuk perkembangan diri.
                            </p>
                        </Col>
                        <Col xs={6}>
                            <Image src={brain} fluid style={{ borderRadius: "20px" }} />
                        </Col>
                    </Row>
                </div>
                <div style={{ marginLeft: "2rem" }}>
                    <Row className="show-grid">
                        <Col lg={12}>
                            <h1><center>Daftar Soal yang bisa kamu coba !</center></h1>
                            <Row className="show-grid d-flex justify-content-center">
                                {
                                    (this.state.dataSoal).length > 0 ? this.state.dataSoal.map(function (data) {
                                        return (<CardSoal
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
