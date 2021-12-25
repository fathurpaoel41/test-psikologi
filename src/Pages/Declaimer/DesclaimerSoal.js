import React, { useEffect, useState } from "react"
import Content from "../../Components/Content"
import { Card, Button, Col } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import DataDesclaimerSoalAPI from "../../API/DataDesclaimerSoalAPI"

const DesclaimerSoal = () => {
    const [description, setDescription] = useState()
    const [titleSoal, setTitleSoal] = useState()
    let { id } = useParams();
    const styleLink = {
        textDecoration: "none",
        color: "white",
    }

    useEffect(() => {
        const dataDesclaimerSoalAPI = new DataDesclaimerSoalAPI()
        dataDesclaimerSoalAPI.getDesclaimerSoal(id).then((data) => {
            setTitleSoal(data.data.titleSoal)
            setDescription(data.data.descriptionSoal)
        })
        localStorage.setItem("idSoal", id)
    }, []);

    return (
        <div>
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
                        <h2><center>{titleSoal}</center></h2>
                        Deskripsi Soal :<br />
                        <p align="justify">
                            {description}
                        </p>
                    </div>
                    <Button variant="primary" size="lg"><Link to="/test-psikologi" style={styleLink}>Mulai Kerjakan!</Link></Button>
                </Col>
            </Content>
        </div>
    )
}

export default DesclaimerSoal
