import React, { Component } from "react"
import Content from "../../Components/Content"
import CountdownTest from "../../Components/CountdownTest"
import CardTestMultipleChoice from "../../Components/CardTestMultipleChoice"
import {Button} from "react-bootstrap"

export default class TesPsikologi extends Component {
    render() {
        return (
            <Content>
                <div className="d-flex flex-row-reverse">
                    <div className="p-2">
                        <CountdownTest />
                    </div>
                </div>
                
                <CardTestMultipleChoice />
                <CardTestMultipleChoice />
                <Button variant="primary" size="lg">Submit</Button>
            </Content>
        )
    }
}
