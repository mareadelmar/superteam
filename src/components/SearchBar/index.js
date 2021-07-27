import React, { useState } from "react";
import "../../assets/styles/components/SearchBar.css";
import { useHistory } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";

const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const { isLogged } = useUserData();
    let history = useHistory();

    const handleInputSearch = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (isLogged) {
            history.push(`/search/${keyword}`);
            return;
        }
        history.push("/login");
    };

    return (
        <form
            className="flex searchbar-container"
            onSubmit={handleSearchSubmit}
        >
            {/* <input
                type="text"
                onChange={handleInputSearch}
                placeholder="Buscar superhéroe..."
            /> 
            <input type="submit" value="Buscar"/>
            
            */}
            <div className="input-group mb-3">
                <input
                    onChange={handleInputSearch}
                    type="text"
                    className="form-control"
                    placeholder="Buscar superhéroe..."
                    aria-label="Buscador"
                    aria-describedby="input-search"
                />
                <input
                    className="btn-custom"
                    type="submit"
                    id="input-search"
                    value="Buscar"
                />
            </div>
        </form>
    );
};

<div class="input-group mb-3"></div>;

export default SearchBar;
