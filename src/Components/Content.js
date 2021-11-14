import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container} from "react-bootstrap"
import "../Assets/Style.css"
import FooterBar from "./FooterBar"

export default function Content (props){
    return (
        <div>
            <div className="jumbotron">
                <Container>
                    <div className="py-4">
                        {props.children}       
                    </div>
                </Container>
            <FooterBar />
            </div>
        </div>
    )
}