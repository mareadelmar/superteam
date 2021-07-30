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
                <h2>¡Bienvenido a superteam!</h2>
                <p className="fs-5">
                    Te invitamos a completar tu superteam. Para hacerlo
                    necesitas agregar a tu equipo{" "}
                    <strong>
                        tres personajes de alineación buena y tres de alineación
                        mala.
                    </strong>
                </p>
            </div>
            {isLogged ? <UserHomePage /> : null}
        </section>
    );
};

export default PageHome;
