import React, {useContext, useEffect, useState} from "react";
import {GameContext, CookiesContext, pictures} from '../imports';
import "../styles/scoreStyles.css";
const Score = () => {
    const [time, setTime] = useState(0);
    const {clickCounter, score} = useContext(GameContext);
    const {userName} = useContext(CookiesContext);
    useEffect(() => {
        const timeInterval = score < pictures.length / 2 && setInterval(() =>{
            setTime(prevState => prevState + 1);
        }, 1000)
        return () => clearInterval(timeInterval);
    },[score])

    return (
        <div id="scoreContainer">
            <div id="scoreElements">
                <h3>{userName}</h3>
                <p id="clickCounter">Click Counter: <strong>{clickCounter}</strong></p>
                <p data-scoreTime="scoreTime" id="time">Time:  <strong>{time}</strong></p>
            </div>
        </div>
    )
}
export default Score;