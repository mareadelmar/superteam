import axios from "axios";

export function loginService({ email, password }) {
    return axios
        .post("http://challenge-react.alkemy.org/", {
            email: email,
            password: password,
        })
        .then((res) => {
            return res;
        })
        .catch((err) => {
            console.error(err);
            return err;
        });
}
