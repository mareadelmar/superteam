import React, {useState} from 'react';
import "../../assets/styles/components/SearchBar.css"
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    let history = useHistory();
    //console.log(history)

    const handleInputSearch =(e)=>{
        console.log(e.target.value);
        setKeyword(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        history.push(`/search/${keyword}`);
    }

    return (
        <form className="searchbar-container">
            <input type="text" onChange={handleInputSearch} placeholder="Buscar superhéroe..."/>
            <input type="submit" value="Buscar" onClick={handleSubmit}/>
        </form>
    )
}

export default SearchBar;
