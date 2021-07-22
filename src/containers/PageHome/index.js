import React from "react";
import "../../assets/styles/containers/PageHome.css";
import SearchBar from "../../components/SearchBar";
//import imgFondo from "../../assets/statics/fondo.svg";

const PageHome = () => {
    return (
        <section className="home-container container-fluid">
            <h2>Page Home</h2>
            <SearchBar />
        </section>
    );
};

export default PageHome;
