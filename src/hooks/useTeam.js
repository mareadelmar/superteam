import { useContext, useCallback } from "react";
import UserContext from "../context/UserDataContext";
import ResultsContext from "../context/SearchResultContext";

export const useTeam = () => {
    const { results } = useContext(ResultsContext);
    const { teamGood, teamBad, setTeamGood, setTeamBad } =
        useContext(UserContext);

    const addToTeam = useCallback(
        ({ id, alignment }) => {
            let selectedCharacter = "";
            results.map((item) => {
                if (item.id === id) {
                    selectedCharacter = item;
                    console.log(item);
                }
                return selectedCharacter;
            });

            if (alignment === "good") {
                setTeamGood((currentArray) =>
                    currentArray.concat(selectedCharacter)
                );
                console.log(teamGood);
            }
            if (alignment === "bad") {
                setTeamBad((currentArray) =>
                    currentArray.concat(selectedCharacter)
                );
                console.log(teamBad);
            }
            console.log(selectedCharacter, teamBad, teamGood);
        },
        [results, setTeamGood, setTeamBad, teamBad, teamGood]
    );

    const removeFromTeam = useCallback(
        ({ id, alignment }) => {
            console.log("entrando a eliminar", alignment);
            if (alignment === "good") {
                const newTeam = teamGood.filter((item) => {
                    console.log(id, item.id);

                    return item.id !== id;
                });
                setTeamGood(newTeam);
            } else {
                const newTeam = teamBad.filter((item) => {
                    console.log(id, item.id);
                    return item.id !== id;
                });
                setTeamBad(newTeam);
            }
            console.log("eliminar miembro", teamBad, teamGood);
        },
        [teamGood, teamBad, setTeamGood, setTeamBad]
    );

    return {
        addToTeam,
        removeFromTeam,
    };
};
