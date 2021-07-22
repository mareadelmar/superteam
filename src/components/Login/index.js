import React,{useState} from 'react';

const Login = () => {
    const {password, setPassword} = useState("");
    const {email, setEmail} = useState("");

    const handleLogin =()=>{
        console.log("login in")
        // servicio para mandar la info post
        // pushear a home
    }

    return (
        <section className="login-container">
            <form>
            <h4>Ingresá a tu cuenta:</h4>
                    <label htmlFor="input-mail">Email:</label>
                    <input
                        id="input-mail"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                    <label htmlFor="input-pass">Contraseña:</label>
                    <input
                        id="input-pass"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button className="btn" onClick={handleLogin}>
                        Login
                    </button>
            </form>
        </section>
    )
}

export default Login;
