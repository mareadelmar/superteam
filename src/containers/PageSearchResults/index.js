import React from "react";
import "../../assets/styles/containers/PageSearch.css";
import { useParams } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import SearchBar from "../../components/SearchBar";
import ListOfResults from "../../components/ListOfResults";
import Loader from "../../components/Loader";

const PageSearch = () => {
    const { keyword } = useParams();
    const { results, loading } = useCharacters({ keyword });

    // useEffect(()=>{
    //     getCharacters({keyword})
    //     .then(res=>console.log(res));
    // },[keyword])

    if (loading) return <Loader />;
    return (
        <section className="container search-container">
            <SearchBar />
            <ListOfResults results={results} />
        </section>
    );
};

export default PageSearch;
