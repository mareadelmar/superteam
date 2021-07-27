import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";

const Nav = () => {
    const { isLogged, getLogout } = useUserData();

    return (
        <nav className="nav nav-pills flex mt-2 me-2">
            {isLogged ? (
                <button className="text-sm-center nav-link" onClick={getLogout}>
                    Logout
                </button>
            ) : (
                <Link to="/login" className="text-sm-center nav-link active">
                    Login
                </Link>
            )}
        </nav>
    );
};

export default Nav;
