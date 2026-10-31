import {createContext,  useContext, useState} from "react";

const AuthContext = createContext(null);

export function Authprovider ({children})
{
    const [isAuthenticated,setIsAuthenticated] = useState(false);

    function signIn(){

        setIsAuthenticated(true);
    }

    function signOut(){
        setIsAuthenticated(false);
    }
    return (
        <AuthContext.Provider value={{isAuthenticated,signIn,signOut}}>
            {children}
        </AuthContext.Provider>
    );

}
export function useAuth(){
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used inside Authprovider");

    }
    return context;
}