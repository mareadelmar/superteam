import React, { useState } from "react";
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
        if (!isLogged) {
            history.push("/login");
            return;
        }
        if (keyword === "") return;
        history.push(`/search/${keyword}`);
    };

    return (
        <form
            className="container searchbar-container mt-5 mb-5"
            onSubmit={handleSearchSubmit}
        >
            <div className="row d-flex justify-content-center">
                <div className="col-12 col-lg-8">
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
                </div>
            </div>
        </form>
    );
};

<div class="input-group mb-3"></div>;

export default SearchBar;
