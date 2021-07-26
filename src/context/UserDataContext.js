import React, { useState } from "react";

const UserContext = React.createContext({});

export function UserDataContext({ children }) {
    const initialTokenValue = null;
    const [token, setToken] = useState(() => {
        try {
            const item = window.localStorage.getItem("token");
            return item ? item : initialTokenValue;
        } catch (error) {
            console.error(error);
        }
    });
    const [teamGood, setTeamGood] = useState([]);
    const [teamBad, setTeamBad] = useState([]);
    // ()=> window.localStorage.getItem(`team-${token}`);

    return (
        <UserContext.Provider
            value={{
                token,
                teamGood,
                teamBad,
                setToken,
                setTeamGood,
                setTeamBad,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
