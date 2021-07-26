import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../hooks/useUserData";

const Nav = () => {
    const [navBar, setNavbar] = useState(false);
    const { isLogged, getLogout } = useUserData();

    // useEffect(() => {
    //     if (!isLogged) {
    //         setNavbar(false);
    //         return;
    //     }
    //     setNavbar(true);
    // }, [isLogged]);

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
