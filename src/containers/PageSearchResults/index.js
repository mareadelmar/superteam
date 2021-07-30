import React from "react";
import "../../assets/styles/containers/PageSearch.css";
import { useParams } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import SearchBar from "../../components/SearchBar";
import ListOfItems from "../../components/ListOfItems";
import Loader from "../../components/Loader";

const PageSearchResults = () => {
    const { keyword } = useParams();
    const { results, loading, errorMessage } = useCharacters({ keyword });
    const resultsHeading = errorMessage
        ? errorMessage
        : `${results.length} resultados de búsqueda`;

    if (loading) return <Loader />;
    return (
        <section className="container search-container">
            <SearchBar />
            <h4 className="text-center">{resultsHeading}</h4>
            {!errorMessage && <ListOfItems list={results} />}
        </section>
    );
};

export default PageSearchResults;
