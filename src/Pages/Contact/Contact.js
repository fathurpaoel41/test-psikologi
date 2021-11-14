import React, { Component } from 'react'
import Content from '../../Components/Content'
import {Col,Image} from "react-bootstrap"
import fathur from "../../Assets/images/fathur2.jpg"

export default class Contact extends Component {
    render() {
        return (
            <Content>
                <center>
                    <Image src={fathur} roundedCircle width={350} height={350} alt="foto fathur" />
                </center>
                <br />
                Instagram : <a href="https://www.instagram.com/mfrfathur09/">@mfrfathur09</a> <br />
                Email : <a href="mailto:fathurpaoel41@gmail.com">fathurpaoel41@gmail.com</a>
            </Content>
        )
    }
}
