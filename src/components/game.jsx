import React from "react";
import {GameField, Score, CookiesContextProvider} from "../imports";
const Game = () => {
    return (
        <CookiesContextProvider>
            <Score/>
            <GameField/>
        </CookiesContextProvider>
    )
}
export default Game;