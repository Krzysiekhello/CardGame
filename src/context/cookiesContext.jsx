import React, {createContext, useEffect, useState} from "react";
export const CookiesContext = createContext();
const CookiesContextProvider = ({children}) => {
    const [userName, setUserName] = useState("");
    let timerInterval = null;

    // Function which read specified cookie from saved cookies
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    // useEffect which set userName variable
    useEffect(() => {
        setUserName(getCookie("user-name"));
        return () => {
            setUserName("");
        }
    },[])

    return (
        <CookiesContext.Provider value={{userName, timerInterval}}>
            {children}
        </CookiesContext.Provider>
    )
}
export default CookiesContextProvider;