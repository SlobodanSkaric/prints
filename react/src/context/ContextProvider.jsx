import { createContext, useContext, useState } from "react";


const StateContext = createContext({
    user: null,
    token: null,
    setToken: () => {},
    setUser: () => {}
});


export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState();

    const setToken = (tokenset) =>{

        _setToken(tokenset);

        if(tokenset){
            localStorage.setItem("ACCESS_TOKEN", tokenset);
        }else{
            localStorage.removeItem("ACCESS_TOKEN");
        }
    }


    return (
        <StateContext.Provider value={{user,token, setToken, setUser}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
