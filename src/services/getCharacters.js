import axios from "axios";
import { API_KEY, API_URL } from "../config/settings";

export function getCharacters({ keyword }) {
    const url = `${API_URL}/${API_KEY}/search/${keyword}/`;

    return axios.get(url).then((data) => {
        console.log(data.data.results);
        let results = data.data.results.map((item) => {
            const { id, name, powerstats, appearance, work, image, biography } =
                item;
            const { "full-name": fullName, aliases, alignment } = biography;
            // alignment: bad/good
            const { url } = image;
            return {
                id,
                name,
                powerstats,
                appearance,
                work,
                url,
                fullName,
                aliases,
                alignment,
            };
        });
        return results;
    });
}
