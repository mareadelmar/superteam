import React, { useState } from "react";
const ResultsContext = React.createContext({});

export function SearchResultContext({ children }) {
    const [results, setResults] = useState([]);

    return (
        <ResultsContext.Provider value={{ results, setResults }}>
            {children}
        </ResultsContext.Provider>
    );
}

export default ResultsContext;
