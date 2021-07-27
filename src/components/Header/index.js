import React from "react";
import "../../assets/styles/components/Header.css";
import { Link } from "react-router-dom";
//import { useUserData } from "../../hooks/useUserData";
import { useRouteMatch } from "react-router";
import Nav from "../Nav";

const Header = () => {
    //const [navRender, setNavRender] = useState(false);
    //const { isLogged, getLogout } = useUserData();
    let matchLogin = useRouteMatch("/login");

    return (
        <header className="header-container">
            {/* <nav className="nav nav-pills flex mt-2 me-2">{navRender}</nav> */}

            {matchLogin ? null : <Nav />}
            <Link className="header-title" to="/">
                <h1 className="ms-2">superteam</h1>
            </Link>
        </header>
    );
};

export default Header;
