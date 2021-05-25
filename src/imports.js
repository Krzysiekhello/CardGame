import woodenTap from "./soundEffexts/woodenTapSound.mp3";
import locker from "./img/locker.jpg";
import lizard from "./img/lizard.jpg";
import guitarMan from "./img/guitarMan.jpg";
import kite from "./img/kite.jpg";
import mice from "./img/mice.jpg";
import peacock from "./img/peacock.jpg";
export const woodenTapSound = woodenTap;
export const pictures = [locker,lizard,guitarMan,kite,mice,peacock,locker,lizard,guitarMan,kite,mice,peacock];
export {default as GameField} from "./components/gameField";
export {default as Cards} from "./components/cards";
export {default as AppContextProvider, GameContext} from "./context/gameContext";
export {default as UIfx} from "uifx";
export {default as Score} from "./components/score";
export {default as WinComponent} from "./components/winComponent";
export {default as Game} from "./components/game"
export {default as Login} from "./components/login"
export {default as CookiesContextProvider, CookiesContext} from "./context/cookiesContext"
