import React, { Component } from "react"
import Content from "../../Components/Content"
import { Card, Button, Col } from "react-bootstrap"
import {Link} from "react-router-dom"
export default class DesclaimerSoal extends Component {
    constructor(props){
        super(props)
        this.styleLink = {
            textDecoration: "none",
            color: "white",
        }
    }
    render() {
        return (
            <Content>
                <Col xs={12} style={{ color: "black" }}>
                    <Card >
                        <Card.Body>
                            <Card.Title>Desclaimer !!!</Card.Title>
                            <Card.Text>
                                <p align="justify">
                                Hal-hal yang harus diperhatikan :
                                <ol>
                                    <li>Waktu Pengerjaan hanya diberikan 7 menit </li>
                                    <li>Kerjakan dengan sejujurnya dan apa yang sedang kamu rasakan </li>
                                    <li>Ketika sedang mengerjakan soal tes dilarang untuk Merefresh halaman page, karena sama saja mengulang tes dari awal</li>
                                    <li>Tidak menjawab pertanyaan tidak mendapatkan nilai</li>
                                </ol>
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <br />
                <Col xs={12}>
                    <div className="py-4">
                    Deskripsi Soal :<br />
                    <p align="justify">
                    Tes kepribadian adalah seperangkat alat tes yang disusun untuk mendeskripsikan bagaimana kecenderungan seseorang bertingkah laku. Tes kepribadian sebenarnya adalah deskripsi kualitatif dari kepribadian, bukannya deskripsi kuantitatif (angka-angka), karena sebenarnya kepribadian tidak dapat diukur, tetapi hanya dapat dideskripsikan. Untuk membantu menjelaskan kepribadian, alat tes kepribadian menggunakan bantuan angka-angka dan kemudian hasilnya dintrepretasikan/dideskripsikan kedalam kualitatif.
                    </p>
                    </div>
                    <Button variant="primary" size="lg"><Link to="/test-psikologi" style={this.styleLink}>Mulai Kerjakan!</Link></Button>
                </Col>
            </Content>
        )
    }
}
