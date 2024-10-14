import { Children,createContext,useState } from "react";

export const AuthContext=createContext();

export default function AuthProvider({children}){
    const [value1,setValue]=useState(0);

    return (
        <AuthContext.Provider value={{value1}}>
        {children}
        </AuthContext.Provider>
    
    );
}