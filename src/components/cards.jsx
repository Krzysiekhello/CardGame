import React, {useContext} from "react";
import {GameContext, UIfx, woodenTapSound } from "../imports";
import "../styles/cardStyles.css";
const Cards = ({photoUrl}) => {
    const {currentlyClickedCards, setClickCounter, firstClickOnCard, setFirstClickOnCard} = useContext(GameContext);

    // Card click sound
    const woodenTap = new UIfx (
        woodenTapSound,
        {
            volume: 1,
            throttleMs: 1000
        }
    )

    // Function which handle click on the card
    const handleClicksOnCards = (event) => {
        woodenTap.play();
        currentlyClickedCards(event);
        event.target.classList.replace("hiddenCard", "flipAnimation");
        setClickCounter(prevState => prevState + 1);
        if (firstClickOnCard) {
            setFirstClickOnCard(false);
        }
    }
    return (
        <div data-card="card" className="card hiddenCard" style={{backgroundImage:`url(${photoUrl})`}} onClick={(event) => handleClicksOnCards(event)}></div>
    )
}
export default Cards;