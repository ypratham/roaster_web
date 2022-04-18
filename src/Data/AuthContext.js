import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext({ instanceUser: null, setInstanceUser: () => { } });

export default function Auth({ children }) {

    const [instanceUser, setInstanceUser] = useState(null);


    return (
        <AuthContext.Provider value={{ instanceUser: instanceUser, setInstanceUser }}>
            {children}
        </AuthContext.Provider>
    );
}