import { useContext, useCallback, useState, useEffect } from "react";
import UserContext from "../context/UserDataContext";

export const useTeam = () => {
    const { teamGood, teamBad, setTeamGood, setTeamBad } =
        useContext(UserContext);
    const [teamBestPower, setTeamBestPower] = useState([]);
    const [teamPowerstats, setTeamPowerstats] = useState([]);

    useEffect(() => {
        const totalTeam = [...teamGood, ...teamBad];
        if (totalTeam.length === 0) return;

        const obj = {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0,
        };

        // sumar powerstats en un solo objeto
        for (let i of totalTeam) {
            Object.keys(i.powerstats).forEach((key) => {
                if (i.powerstats[key] === "null") return;
                obj[key] += Number(i.powerstats[key]);
            });
        }

        // convertir el objeto en un array para ordenarlo
        let array = [];
        Object.entries(obj).map((entry) => {
            array.push(entry);
        });

        // ordenar array de forma descendiente
        let orderArray = array.sort((a, b) => a[1] - b[1]);
        orderArray.reverse();

        setTeamPowerstats(orderArray);
        setTeamBestPower(orderArray[0]);
    }, [teamBad, teamGood]);

    const addToGood = useCallback(
        ({ cardData }) => {
            console.log("addToGood", cardData);
            setTeamGood([...teamGood, cardData]);
            console.log(teamGood);
        },
        [setTeamGood, teamGood]
    );

    const addToBad = useCallback(
        ({ cardData }) => {
            console.log("addtoBad", cardData);
            setTeamBad([...teamBad, cardData]);
            console.log(teamBad);
        },
        [setTeamBad, teamBad]
    );

    const removeFromBad = useCallback(
        ({ id }) => {
            const newTeam = teamBad.filter((item) => item.id !== id);
            setTeamBad(newTeam);
            console.log("eliminar bad", id, newTeam);
        },
        [setTeamBad, teamBad]
    );

    const removeFromGood = useCallback(
        ({ id }) => {
            const newTeam = teamGood.filter((item) => item.id !== id);
            setTeamGood(newTeam);
            console.log("eliminar good", id, newTeam);
        },
        [setTeamGood, teamGood]
    );

    return {
        teamGood,
        teamBad,
        teamPowerstats,
        teamBestPower,
        addToGood,
        addToBad,
        removeFromGood,
        removeFromBad,
    };
};
