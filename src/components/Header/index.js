import React from "react";
import "../../assets/styles/components/Header.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";

const Header = () => {
    const { isLogged, getLogout } = useUserData();
    console.log(isLogged);

    const navButton = isLogged ? (
        <button className="text-sm-center nav-link active" onClick={getLogout}>
            Logout
        </button>
    ) : (
        <Link to="/login" className="text-sm-center nav-link active">
            Login
        </Link>
    );

    return (
        <header className="header-container">
            <nav className="nav nav-pills flex mt-2 me-2">{navButton}</nav>

            <Link className="header-title" to="/">
                <h1 className="ms-2">superteam</h1>
            </Link>
        </header>
    );
};

export default Header;
