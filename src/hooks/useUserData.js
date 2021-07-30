import { useState, useContext, useCallback, useEffect } from "react";
import UserContext from "../context/UserDataContext";
import { loginService } from "../services/loginService";
import { useHistory } from "react-router-dom";

export function useUserData() {
    const { token, setToken } = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [showAlert, setShowAlert] = useState("");
    let history = useHistory();

    // LOGIN
    const getLogin = useCallback(
        ({ email, password }) => {
            setLoading(true);
            loginService({ email, password })
                .then((dataToken) => {
                    if (dataToken === "Request failed with status code 401") {
                        setShowAlert(
                            "El nombre o la contraseña no son correctos."
                        );
                        return;
                    }
                    setLoading(false);
                    setToken(dataToken);
                    window.localStorage.setItem("token", dataToken);
                })
                .catch((err) => {
                    // el error no llega a este catch
                    setToken(null);
                    setIsLogged(false);
                    console.error(err);
                    console.log(err);
                    window.localStorage.removeItem("token");
                });
        },
        [setToken]
    );

    // LOGOUT
    const getLogout = useCallback(() => {
        setToken(null);
        window.localStorage.removeItem("token");
        history.push("/");
    }, [setToken, history]);

    useEffect(() => {
        if (token !== null && token !== undefined && token !== "null") {
            setIsLogged(true);
        } else if (token === undefined) {
            setIsLogged(false);
            setToken(null);
        } else {
            setToken(null);
            setIsLogged(false);
        }
    }, [token, setToken]);

    return {
        getLogin,
        getLogout,
        isLogged,
        loading,
        token,
        showAlert,
    };
}
