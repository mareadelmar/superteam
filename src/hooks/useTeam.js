import { useContext, useCallback, useState, useEffect } from "react";
import UserContext from "../context/UserDataContext";

export const useTeam = () => {
    const { teamGood, teamBad, setTeamGood, setTeamBad } =
        useContext(UserContext);
    const [teamBestPower, setTeamBestPower] = useState([]);
    const [teamPowerstats, setTeamPowerstats] = useState([]);
    const [totalWeight, setTotalWeight] = useState(0);
    const [totalHeight, setTotalHeight] = useState(0);

    useEffect(() => {
        const totalTeam = [...teamGood, ...teamBad];
        if (totalTeam.length === 0) return;

        // HEIGHT & WEIGHT
        let totalWeightVar = 0;
        let totalHeightVar = 0;
        totalTeam.map((item) => {
            const { weight, height } = item.appearance;
            const wArr = weight[1].split(" ");
            const hArr = height[1].split(" ");

            const numberWeight = Number(wArr[0]);
            const numberHeight = Number(hArr[0]);

            totalWeightVar += numberWeight;
            totalHeightVar += numberHeight;
        });

        setTotalWeight(Math.round(totalWeightVar / totalTeam.length));
        setTotalHeight(Math.round(totalHeightVar / totalTeam.length));

        // POWERSTATS
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
        let arrayPowerstats = [];
        Object.entries(obj).map((entry) => {
            arrayPowerstats.push(entry);
        });

        // ordenar array de forma descendiente
        let orderArray = arrayPowerstats.sort((a, b) => a[1] - b[1]);
        orderArray.reverse();

        setTeamPowerstats(orderArray);
        setTeamBestPower(orderArray[0]);
    }, [teamBad, teamGood]);

    const addToGood = useCallback(
        ({ cardData }) => {
            setTeamGood([...teamGood, cardData]);
        },
        [setTeamGood, teamGood]
    );

    const addToBad = useCallback(
        ({ cardData }) => {
            setTeamBad([...teamBad, cardData]);
        },
        [setTeamBad, teamBad]
    );

    const removeFromBad = useCallback(
        ({ id }) => {
            const newTeam = teamBad.filter((item) => item.id !== id);
            setTeamBad(newTeam);
        },
        [setTeamBad, teamBad]
    );

    const removeFromGood = useCallback(
        ({ id }) => {
            const newTeam = teamGood.filter((item) => item.id !== id);
            setTeamGood(newTeam);
        },
        [setTeamGood, teamGood]
    );

    return {
        teamGood,
        teamBad,
        teamPowerstats,
        teamBestPower,
        totalWeight,
        totalHeight,
        addToGood,
        addToBad,
        removeFromGood,
        removeFromBad,
    };
};
