import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserDataContext({ children }) {
    const [token, setToken] = useState(null); // sacar valor inicial del LOCALSTORAGE

    return (
        <UserContext.Provider value={{ token, setToken }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
