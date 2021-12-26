import React, { Component } from "react"
import Content from "../../Components/Content"
import CountdownTest from "../../Components/CountdownTest"
import CardTestMultipleChoice from "../../Components/CardTestMultipleChoice"
import { Button } from "react-bootstrap"
import SoalIdAPI from "../../API/SoalIdAPI"
import { Link } from "react-router-dom"
export default class TesPsikologi extends Component {
    constructor(props) {
        super(props)
        this.soalIdAPI = new SoalIdAPI()
        this.getDataSoalApi = this.getDataSoalApi.bind(this)
        this.savePoint = this.savePoint.bind(this)
        this.finishAttemp = this.finishAttemp.bind(this)

        this.state = {
            soalTest: [],
            id: [],
            point: [],
            titleSoal: "",
            temp: null,
            totalPoint: 0
        }

        this.style = {
            textDecoration: "none",
            color: "white",
        }
    }

    componentDidMount() {
        const idSoal = localStorage.getItem("idSoal")
        this.getDataSoalApi(idSoal)
    }

    componentDidUpdate() {
        console.log(this.state.point)
    }

    getDataSoalApi(idSoal) {
        this.soalIdAPI.getSoalTest(idSoal).then((data) => {
            this.setState({
                titleSoal: data.data.titleSoal,
                soalTest: data.data.Soal,
            })
        })
    }

    savePoint(point) {
        let arrPoint = this.state.point
        const found = arrPoint.some(el => el.nomor === point.nomor)
        if (!found) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    point: [...prevState.point, point],
                    totalPoint: this.state.totalPoint + point.point
                }
            })
        } else {
            let ArrPointElse = this.state.point
            let objIndex = ArrPointElse.findIndex((obj => obj.nomor == point.nomor));
            ArrPointElse[objIndex].point = point.point
            this.setState({ point: ArrPointElse, totalPoint: this.state.totalPoint + point.point })
        }
    }


    finishAttemp(e) {
        localStorage.setItem("totalPoint", this.state.totalPoint)
    }

    render() {
        return (
            <Content>
                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        <CountdownTest />
                    </div>
                </div>

                {
                    (this.state.soalTest.map((res) => {
                        return (
                            <CardTestMultipleChoice pilihan={res} savePointCallback={this.savePoint} />
                        )
                    }))
                }

                <Button variant="primary" size="lg" onClick={this.finishAttemp}><Link to="/hasil-test" style={this.style}>Finish Attemp</Link></Button>
            </Content>
        )
    }
}
