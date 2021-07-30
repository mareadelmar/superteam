import { useState, useContext, useEffect } from "react";
import { getCharacters } from "../services/getCharacters";
import ResultsContext from "../context/SearchResultContext";

export function useCharacters({ keyword }) {
    const { results, setResults } = useContext(ResultsContext);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        setLoading(true);
        getCharacters({ keyword }).then((res) => {
            if (res === []) {
                setErrorMessage("No hay resultados para esta búsqueda");
                setResults([]);
                return;
            }
            setLoading(false);
            setResults(res);
        });
    }, [keyword, setResults]);

    return {
        loading,
        results,
        errorMessage,
    };
}
