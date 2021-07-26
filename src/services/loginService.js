import axios from "axios";

export function loginService({ email, password }) {
    return axios
        .post("http://challenge-react.alkemy.org/", {
            email: email,
            password: password,
        })
        .then((res) => {
            console.log(res);
            console.log(res.status);
            const { token } = res.data;
            return token;
        })
        .catch((error) => {
            console.error(error);
            console.log(error.message);
            return error.message;
        });
}
