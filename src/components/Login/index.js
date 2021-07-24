import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../assets/styles/components/Login.css";
import { useUserData } from "../../hooks/useUserData";

const Login = () => {
    /* 
    falta donde hacer el LOGOUT --> crear nav en el header
    */

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { getLogin, isLogged } = useUserData();
    let history = useHistory();

    useEffect(() => {
        console.log(isLogged);
        if (isLogged) {
            console.log("desde componente: isLogged true");
            history.push("/");
            // si recibe una función onLogin (para cerrar modal si lo hago) que la ejecute
            //onLogin && onLogin();
        }
    }, [history, isLogged]);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        console.log("login in desde componente");
        getLogin({ email, password });
    };

    return (
        <section className="flex login-container">
            <form onSubmit={handleSubmitLogin}>
                <h4>Ingresá a tu cuenta:</h4>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email:</label>
                </div>
                <div className="form-floating">
                    <input
                        className="form-control"
                        id="floatingPassword"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Contraseña:</label>
                </div>

                <input
                    type="submit"
                    className="btn w-100 btn-lg btn-primary mt-3 mb-3"
                    value="Login"
                />
                <p>
                    ¿No tenés cuenta? <Link to="/">Creá una acá</Link>
                </p>
            </form>
        </section>
    );
};

export default Login;
