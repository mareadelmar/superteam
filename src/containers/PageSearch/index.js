import React from 'react';
import "../../assets/styles/containers/PageSearch.css"
import {useParams} from "react-router-dom";
import { useCharacters } from '../../hooks/useCharacters';
import SearchBar from "../../components/SearchBar"
import ListOfResults from '../../components/ListOfResults';


const PageSearch = () => {
    const {keyword} = useParams();
    const {results, loading} = useCharacters({keyword});

    // useEffect(()=>{
    //     getCharacters({keyword})
    //     .then(res=>console.log(res));
    // },[keyword])

    return (
        <section className="container search-container">
            <SearchBar/>
            <ListOfResults/>
        </section>
    )
}

export default PageSearch;
