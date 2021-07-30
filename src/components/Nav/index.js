import React from "react";
import "../../assets/styles/components/Nav.css";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";

const Nav = () => {
    const { isLogged, getLogout } = useUserData();

    return (
        <nav className="nav d-flex justify-content-end nav-pills">
            {isLogged ? (
                <button
                    className="text-center nav-link mt-2 me-2"
                    onClick={getLogout}
                >
                    Logout
                </button>
            ) : (
                <Link
                    to="/login"
                    className="text-center nav-link active mt-2 me-2"
                >
                    Login
                </Link>
            )}
        </nav>
    );
};

export default Nav;
