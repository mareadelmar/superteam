import React, { useContext, useEffect } from "react";
//import { useHistory } from "react-router";
import "../../assets/styles/containers/PageSearch.css";
import { useParams } from "react-router-dom";
import { useCharacters } from "../../hooks/useCharacters";
import SearchBar from "../../components/SearchBar";
import ListOfResults from "../../components/ListOfResults";
import UserContext from "../../context/UserDataContext";
import Loader from "../../components/Loader";

const PageSearchResults = () => {
    const { keyword } = useParams();
    const { results, loading } = useCharacters({ keyword });

    if (loading) return <Loader />;
    return (
        <section className="container search-container">
            <SearchBar />
            <ListOfResults results={results} />
        </section>
    );
};

export default PageSearchResults;
