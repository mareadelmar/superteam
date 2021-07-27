import React from "react";
import "../../assets/styles/containers/PageSearch.css";
import { useParams } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import SearchBar from "../../components/SearchBar";
import ListOfItems from "../../components/ListOfItems";
import Loader from "../../components/Loader";

const PageSearchResults = () => {
    const { keyword } = useParams();
    const { results, loading } = useCharacters({ keyword });

    if (loading) return <Loader />;
    return (
        <section className="container search-container">
            <SearchBar />
            <ListOfItems list={results} />
        </section>
    );
};

export default PageSearchResults;
