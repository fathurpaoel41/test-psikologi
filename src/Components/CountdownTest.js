import React from "react"
import Countdown, { zeroPad } from 'react-countdown';

export default function CountdownTest() {
    const Completionist = () => <span>You are good to go!</span>

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />
        } else {
            return (
                <span>
                    {zeroPad(minutes)}:{zeroPad(seconds)}
                </span>
            )
        }
    }

    return (
        <div>
            <Countdown date={Date.now() + 5000} renderer={renderer} />
        </div>
    )
}
