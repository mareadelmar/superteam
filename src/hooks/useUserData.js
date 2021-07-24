import { useState, useContext, useCallback, useEffect } from "react";
import UserContext from "../context/UserDataContext";
import { loginService } from "../services/loginService";

export function useUserData() {
    const { token, setToken } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    // guardar esta función en un useCallback
    const getLogin = useCallback(
        ({ email, password }) => {
            console.log("entrando a login en el hook");
            setLoading(true);
            loginService({ email, password })
                .then((res) => {
                    console.log(res.data, "logueado correctamente en el hook");
                    setToken(res.data.token);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        },
        [setToken]
    );

    // guardar esta función en un useCallback
    const getLogout = () => {
        console.log("logout en el hook");
        setToken(null);
        // limpiar LOCALSTORAGE
    };

    useEffect(() => {
        if (token !== null) {
            console.log("está logueado");
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [token]);

    return {
        getLogin,
        getLogout,
        isLogged,
        loading,
        token,
        setToken,
    };
}
