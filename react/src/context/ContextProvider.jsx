import { createContext, useContext, useState } from "react";


const StateContext = createContext({
    user: {},
    token: null,
    setToken: () => {},
    setUser: () => {}
});


export const ContextProvider = ({children}) => {
    const [ user, setUser] = useState(localStorage.getItem("USER_DATA"));
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (tokenset) =>{

        _setToken(tokenset);

        if(tokenset){
            localStorage.setItem("ACCESS_TOKEN", tokenset);
        }else{
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }

    const setUserData = (userData) => {
        setUser(JSON.parse(userData));

        if(userData){
            localStorage.setItem("USER_DATA", userData);
        }else{
            localStorage.removeItem("USER_DATA");
        }
    }


    return (
        <StateContext.Provider value={{user,token, setToken, setUserData}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
