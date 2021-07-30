import React from "react";
import "../../assets/styles/containers/PageHome.css";
import SearchBar from "../../components/SearchBar";
import { useUserData } from "../../hooks/useUserData";
import Loader from "../../components/Loader";
import UserHomePage from "../../components/UserHomePage";

const PageHome = () => {
    const { isLogged, loading } = useUserData();

    if (loading) return <Loader />;
    return (
        <section className="home-container container-fluid">
            <SearchBar />
            <div className="container mb-3 d-flex flex-column welcome p-5 col-12 col-lg-6">
                <h2 className="">¡Bienvenido a superteam!</h2>
                <p className="">
                    Para completar tu equipo de superhéroes necesitas tres
                    personajes de alineación buena y tres de alineación mala.
                    Aquí podrás ir siguiendo los poderes y características de tu
                    equipo.
                </p>
            </div>
            {isLogged ? <UserHomePage /> : null}
        </section>
    );
};

export default PageHome;
