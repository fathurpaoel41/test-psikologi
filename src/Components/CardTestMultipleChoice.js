import React, { Component } from 'react'
import { Test, QuestionGroup, Question, Option } from "react-multiple-choice"
import { Card } from "react-bootstrap"
export default class CardTestMultipleChoice extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            optionTest : props.pilihan,
        }
        this.StyleOPtions = {
            option: {
                width : "100%",
            }
        }

        this.savePoint = this.savePoint.bind(this)
    }

    savePoint(point){
        let firstKey = Object.keys(point)[0]
        let firstValue = Object.values(point)[0]
        let objectPoint = {
            nomor :firstKey,
            point : firstValue,
        }
     
        this.props.savePointCallback(objectPoint) 
    }

    render() {
        return (
            <>
            <div className="d-flex justify-content-center">
                <Card className="StyleCard">
                    <Card.Body>
                        <Test onOptionSelect={(selectedOptions) =>this.savePoint(selectedOptions)} style={{ width: "100%" }}>
                            <QuestionGroup questionNumber={this.state.optionTest.nomor}>
                                <Card.Text>
                                    <Question>
                                        <p
                                            align="justify"
                                            style={{
                                                width: "100%",
                                                color: "black",
                                            }}
                                        >
                                            {this.state.optionTest.pertanyaan}
                                        </p>
                                    </Question>
                                </Card.Text>
                                {this.state.optionTest.pilihan.map(function (res) {
                                    return (
                                        <Option
                                            value={res.point}
                                            style={{
                                                optionTest : {
                                                    width : '100%'
                                                }
                                            }}
                                        >
                                            <p
                                            align="justify"
                                            style={{
                                                width: "100%",
                                                color: "black",
                                            }}
                                        >{res.soal}</p>
                                            
                                        </Option>
                                    )
                                })}
                            </QuestionGroup>
                        </Test>
                    </Card.Body>
                </Card>
            </div>
            <br />
        </>
        )
    }
}
