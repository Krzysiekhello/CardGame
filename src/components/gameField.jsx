import React from "react";
import {Cards, pictures, WinComponent} from "../imports";
import "../styles/gameFiledStyles.css";
const GameField = ({rerender}) => {
    //Sorting pictures in random order
    pictures.sort(() => Math.random() - 0.5 );

    // Mapping pictures array to Cards component
    const mappingCards = pictures.map((photo, index) => {
        return <Cards key={index} photoUrl={photo} />
    })
    return (
        <div id="gameField">
            <WinComponent rerender={rerender}/>
            <div id="cardsContainer">
                {mappingCards}
            </div>
        </div>
    )
}
export default GameField;