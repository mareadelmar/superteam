import { useState, useContext, useEffect } from "react";
import { getCharacters } from "../services/getCharacters";
import ResultsContext from "../context/SearchResultContext";

export function useCharacters({keyword}){
    const {results, setResults} = useContext(ResultsContext);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getCharacters({keyword}).then(res=>{
            setResults(res);
            setLoading(false);
        })
    },[keyword, setResults])

    return {
        loading,
        results,
        setResults
    }
}