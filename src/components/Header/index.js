import React from "react";
import "../../assets/styles/components/Header.css";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";
import Nav from "../Nav";

const Header = () => {
    let matchLogin = useRouteMatch("/login");

    return (
        <header className="mb-4">
            {matchLogin ? null : <Nav />}
            <Link className="header-title" to="/">
                <h1 className="text-center mt-4 mb-4">superteam</h1>
            </Link>
        </header>
    );
};

export default Header;
