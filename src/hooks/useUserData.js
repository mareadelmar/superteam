import { useState, useContext, useCallback, useEffect } from "react";
import UserContext from "../context/UserDataContext";
import { loginService } from "../services/loginService";

export function useUserData() {
    const { token, setToken } = useContext(UserContext);

    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // LOGIN
    const getLogin = useCallback(
        ({ email, password }) => {
            console.log("entrando a login en el hook");
            setLoading(true);
            loginService({ email, password })
                .then((dataToken) => {
                    //console.log(dataToken.error);
                    if (dataToken === "Request failed with status code 401") {
                        setErrorMessage(
                            "El nombre o la contraseña no son correctos."
                        );
                        return;
                    }
                    console.log(dataToken, "logueado correctamente en el hook");
                    setLoading(false);
                    setToken(dataToken);
                    window.localStorage.setItem("token", token);
                })
                .catch((err) => {
                    // el error no llega a este catch
                    setToken(null);
                    setIsLogged(false);
                    console.error(err);
                    console.log(err);
                    window.localStorage.removeItem("token");
                    // ??? --> window.localStorage.removeItem(`team-${token}`);
                });
        },
        [setToken, token]
    );

    // LOGOUT
    const getLogout = useCallback(() => {
        console.log("logout en el hook");
        setToken(null);
        //setIsLogged(false);
        // limpiar LOCALSTORAGE
        // window.localStorage.removeItem("token");
        // window.localStorage.removeItem(`team-${token}`);
    }, [setToken]);

    useEffect(() => {
        if (token !== null && token !== undefined) {
            console.log("está logueado", token);
            setIsLogged(true);
        } else if (token === undefined) {
            setIsLogged(false);
            console.log("error", token);
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
        errorMessage,
    };
}
