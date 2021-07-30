import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../assets/styles/components/Login.css";
import { useUserData } from "../../hooks/useUserData";
import Swal from "sweetalert2";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const { getLogin, isLogged, showAlert } = useUserData();
    let history = useHistory();

    useEffect(() => {
        console.log(isLogged);
        if (isLogged) {
            history.push("/");
        }
    }, [history, isLogged]);

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            setErrorMessage("Ingresa un email y una contraseña");
            return;
        }
        getLogin({ email, password });

        showAlert &&
            Swal.fire({
                title: "Error al iniciar de sesión",
                text: showAlert,
                icon: "error",
                confirmButtonText: "Ok",
            });
    };

    return (
        <section className="login-container d-flex justify-content-center align-items-center">
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

                {errorMessage ? (
                    <div className="alert-danger">{errorMessage}</div>
                ) : null}
                <input
                    type="submit"
                    className="btn w-100 btn-lg btn-custom mt-3 mb-3"
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
