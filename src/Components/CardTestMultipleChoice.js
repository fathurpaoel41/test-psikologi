import { Test, QuestionGroup, Question, Option } from "react-multiple-choice"
import { Card } from "react-bootstrap"
import React from "react"

export default function CardTestMultipleChoice() {

    const StyleOptions = {
        option: {
            width: "100%"
          }
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <Card className="StyleCard">
                    <Card.Body>
                        <Test onOptionSelect={(selectedOptions) => console.log(selectedOptions)} style={{width: '100%'}}>
                            <QuestionGroup questionNumber={0}>
                                <Card.Text>
                                    <Question className="StyleQuestion">
                                        <p align="justify" style={{width: '100%',color: 'black'}}>
                                            pada suatu hari, andi sedang berjalan
                                            pada sebuah kapal yang sangat besar.
                                            sehingga tatapannya sangat luas. dan dia menemukan seseorang yang amat cantik
                                        </p>
                                    </Question>
                                </Card.Text>
                                <Option value="1" style={StyleOptions}>
                                    Steak
                                </Option>
                                <Option value="2" style={StyleOptions}>Sushi</Option>
                                <Option value="3" style={StyleOptions}>Pad Thai</Option>
                            </QuestionGroup>
                        </Test>
                    </Card.Body>
                </Card>
            </div>
        <br />
        </>
    )
}
