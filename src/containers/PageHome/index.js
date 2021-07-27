import React, { useContext, useState, useEffect } from "react";
import "../../assets/styles/containers/PageHome.css";
import SearchBar from "../../components/SearchBar";
import { useUserData } from "../../hooks/useUserData";
import UserContext from "../../context/UserDataContext";
import ListOfItems from "../../components/ListOfItems";
import Loader from "../../components/Loader";

const PageHome = () => {
    const { teamGood, teamBad } = useContext(UserContext);
    const { isLogged, loading } = useUserData();
    const [team, setTeam] = useState([]);

    useEffect(() => {
        setTeam([...teamGood, ...teamBad]);
    }, [teamGood, teamBad]);

    if (loading) return <Loader />;
    return (
        <section className="home-container container-fluid">
            <h2>Page Home</h2>
            <SearchBar />
            {isLogged ? <ListOfItems list={team} /> : null}
        </section>
    );
};

export default PageHome;
