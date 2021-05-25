import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "../styles/winComponentStyles.css";
import {CookiesContext,GameContext, pictures } from "../imports";
const WinComponent = () => {
    const {userName} = useContext(CookiesContext);
    const {score,setScore, clickCounter, setClickCounter} = useContext(GameContext);
    const scoreTime = score === pictures.length / 2 && document.querySelector("[data-scoreTime='scoreTime'] strong").innerHTML;

    // Function which handle game reset
    const handlePlayAgainButton = () => {
        window.history.pushState({},null, "/");
        setScore(0);
        setClickCounter(0);
    }
    return (
        <>
            {score === pictures.length / 2 && <div id="winComponentContainer">
                <div id="winComponent">
                    <h1>{userName}</h1>
                    <div id="statistics">
                        <p>You did <strong>{clickCounter}</strong> clicks</p>
                        <p>Your time was <strong>{scoreTime}</strong> seconds </p>
                        <button onClick={() => handlePlayAgainButton()}><Link to="/">Play Again</Link></button>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default WinComponent;