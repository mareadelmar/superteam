import React, { useContext } from "react";
import "../../assets/styles/containers/PageHome.css";
import SearchBar from "../../components/SearchBar";
import { useUserData } from "../../hooks/useUserData";
import UserContext from "../../context/UserDataContext";
import Loader from "../../components/Loader";

const PageHome = () => {
    const { teamGood, teamBad } = useContext(UserContext);
    const { isLogged, errorMessage, loading } = useUserData();

    console.log(teamGood, teamBad);

    if (loading) return <Loader />;
    return (
        <section className="home-container container-fluid">
            <h2>Page Home</h2>
            <SearchBar />
            <div></div>
        </section>
    );
};

export default PageHome;
