import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "../../Components/NavigationBar"
import FooterBar from "../../Components/FooterBar"
import { Container, Row, Col } from "react-bootstrap"
import "../../Assets/Style.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div className="jumbotron">
                    <Container>
                        <div className="py-4">
                            ffsd
                        </div>
                        <div className="py-4">
                            ffsd
                        </div>
                    </Container>
                    <FooterBar />
                </div>
            </div>
        )
    }
}
