import React, {useState} from "react";
import {AppContextProvider, Game,Login} from "./imports";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import "./styles/App.css";
const App = () => {
    return (
        <Router>
            <Switch>
                <CookiesProvider>
                    <AppContextProvider>
                        <Route exact path="/">
                            <Login/>
                        </Route>
                        <Route path="/game">
                            <Game/>
                        </Route>
                    </AppContextProvider>
                </CookiesProvider>
            </Switch>
        </Router>
    );
}
export default App;
