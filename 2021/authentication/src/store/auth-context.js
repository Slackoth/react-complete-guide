import {createContext, useCallback, useEffect, useState} from "react";

export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: token => {},
    logut: () => {}
});

let logoutTimer = undefined;

// Expects a Date object in ISOString
const remainingTime = expirationDate => {
    const currentTime = new Date().getTime(); // In miliseconds
    const expirationTime = new Date(expirationDate).getTime() // ISOString to time

    return expirationTime - currentTime;
};

const getTokenState = () => {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    let tokenState = {token: '', expirationTime: 0};

    if(!token || !expirationDate)
        return tokenState;
    
    const expirationTime = remainingTime(expirationDate);

    if(expirationTime <= 0) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        return tokenState;
    }

    tokenState.token = token;
    tokenState.expirationTime = expirationTime;

    return tokenState;
};

const AuthContextProvider = props => {
    const tokenState = getTokenState();
    const [token, setToken] = useState(tokenState.token);
    const isAuthenticated = token === '' ? false : true;

    const logoutHandler = useCallback(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationDate');
        setToken('');

        if(logoutTimer)
            clearTimeout(logoutTimer)
    }, []);

    const loginHandler = (token, expirationDate) => {
        const expirationTime = remainingTime(expirationDate);

        localStorage.setItem('token', token);
        localStorage.setItem('expirationDate', expirationDate);
        setToken(token);
        
        logoutTimer = setTimeout(logoutHandler, expirationTime);
    };

    useEffect(() => {
        if(tokenState.expirationTime !== 0) {
            console.log(`ExpirationTime: ${tokenState.expirationTime}`);
            logoutTimer = setTimeout(logoutHandler, tokenState.expirationTime);
        }
    }, [tokenState, logoutHandler]);

    const context = {
        token: token,
        isLoggedIn: isAuthenticated,
        login: loginHandler,
        logout: logoutHandler
    };

    return <AuthContext.Provider value={context}> {
        props.children
    } </AuthContext.Provider>
}

export default AuthContextProvider;
