import React, {createContext, useCallback, useState, useEffect} from "react";
export const GameContext = createContext();
const AppContextProvider = ({children}) => {
    const winComponent = document.getElementById("winComponentContainer");
    const [clickedCardsArray, setClickedCardsArray] = useState([]);
    const [firstClickOnCard, setFirstClickOnCard] = useState(true);
    const [score, setScore] = useState(0);
    const [clickCounter, setClickCounter] = useState(0)

    //Function which collect two clicked elements
    const currentlyClickedCards = (event) => {
        setClickedCardsArray(prevState => [...prevState, event.target]);
    }

    //Function which handle good cards pick. After good pick card is no more clickable and we can see congratulations words.
    const handleGoodCardsChoice = useCallback(() => {
        setScore(prevState => prevState + 1);
    },[clickedCardsArray,winComponent])

    // Function which handle bad cards pick. When user made mistake cards are going back to be hidden after flip animation
    const handleBadCardsChoice = useCallback(() => {
        const hiddenCards = Array.from(document.querySelectorAll(".hiddenCard"));
        for (let i = 0; i < hiddenCards.length ; i++) {
            hiddenCards[i].style.pointerEvents = "none";
        }
        setTimeout(() => {
            for (let i = 0; i < clickedCardsArray.length ; i++) {
                clickedCardsArray[i].classList.replace("flipAnimation", "hiddenCard");
                clickedCardsArray[i].classList.add("backFlipAnimation");
            }
        },1000)
        setTimeout(() => {
            for (let i = 0; i < hiddenCards.length ; i++) {
                hiddenCards[i].style.pointerEvents = "auto";
            }
            for (let i = 0; i < clickedCardsArray.length ; i++) {
                clickedCardsArray[i].classList.remove("backFlipAnimation");
                clickedCardsArray[i].style.pointerEvents = "auto";
            }
        },1500)
    },[clickedCardsArray] )

    //Hook which invoke "handleGoodCardsChoice" and "handleBadCardsChoice" when "clickedCardsArray" has been changed.
    useEffect(() => {
        for (let i = 0; i < clickedCardsArray.length ; i++) {
            clickedCardsArray[i].style.pointerEvents = "none";
        }
        if (clickedCardsArray.length === 2) {
            if (clickedCardsArray[0].style.backgroundImage === clickedCardsArray[1].style.backgroundImage) {
                handleGoodCardsChoice();
            } else {
                handleBadCardsChoice();
            }
            setClickedCardsArray([])

        }
    },[clickedCardsArray,handleGoodCardsChoice,handleBadCardsChoice])
    return (
        <GameContext.Provider value={{firstClickOnCard, setFirstClickOnCard, score, setScore, currentlyClickedCards, setClickCounter, clickCounter}}>
            {children}
        </GameContext.Provider>
    )
}
export default AppContextProvider;