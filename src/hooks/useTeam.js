import { useContext, useCallback } from "react";
import UserContext from "../context/UserDataContext";
import ResultsContext from "../context/SearchResultContext";

export const useTeam = () => {
    const { results } = useContext(ResultsContext);
    const { teamGood, teamBad, setTeamGood, setTeamBad } =
        useContext(UserContext);

    // ====== ADDTOTEAM =======
    // función para agregar al equipo: MOVER A OTRO HOOK? agregar función eliminar del equipo tmb
    // acá ya sabemos que no lo tiene agregado y que hay lugr en el equipo que iría
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

    const removeFromTeam = ({ id }) => {
        // eliminar del team
    };

    return {
        addToTeam,
        removeFromTeam,
    };
};
