import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../styles/loginStyles.css"
const Login = () => {
    const [loginLinkInsideButton, setLoginLinkInsideButton] = useState(null);
    const [userName, setUserName] = useState("");
    const [isUserNameTooShort, setIsUserNameTooShort] = useState(false);
    useEffect(() => {
        document.querySelector("[data-loginelements='loginElements'] input").focus();
        const loginLinkInsideButton = document.querySelector("[data-loginelements='loginElements'] button a");
        setLoginLinkInsideButton(loginLinkInsideButton);
    }, []);

    //Function which control userName var
    const handleUserNameInput = (event) => {
        setUserName(event.target.value);
    }

    // Function which set user name to cookies and handle Enter submit too
    const handleCookies = (event) => {
        if (!userName) {
            setIsUserNameTooShort(true);
        }
        else {
            document.cookie = `user-name=${userName}; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/`;
        }
    }
    // Function which handle "handleCookies" function after Enter click
    const handleCookiesFunctionAfterEnterClick = (event) => {
        if (!userName) {
            setIsUserNameTooShort(true);
        } else {
            if (event.key === "Enter") {
                loginLinkInsideButton.click();
                handleCookies();
            }
        }
    }
    return (
        <div id="loginContainer">
            <p>Card Game</p>
            <div id="loginElements" data-loginelements="loginElements">
                <input required type="text" placeholder="name" value={userName} onChange={(event) => handleUserNameInput(event)} onKeyDown={(event) => handleCookiesFunctionAfterEnterClick(event)}/>
                {isUserNameTooShort && <p>Your name is too short</p>}
                <button onClick={(event)=>handleCookies(event)}><Link to={isUserNameTooShort ? "/game" : "/"}>Start</Link></button>
            </div>
        </div>
    )
}
export default Login;