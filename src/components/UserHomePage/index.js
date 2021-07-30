import React, { useState, useEffect } from "react";
import { useTeam } from "../../hooks/useTeam";
import ListOfItems from "../ListOfItems";
import ListOfPowers from "../ListOfPowers";

const UserHomePage = () => {
    const {
        teamPowerstats,
        teamBestPower,
        teamGood,
        teamBad,
        totalWeight,
        totalHeight,
    } = useTeam();
    const [selectedTeam, setSelectedTeam] = useState([]);

    useEffect(() => {
        setSelectedTeam([...teamGood, ...teamBad]);
    }, [teamGood, teamBad]);

    return (
        <>
            {selectedTeam.length === 0 ? null : (
                <ListOfPowers
                    powers={teamPowerstats}
                    bestPower={teamBestPower}
                    weight={totalWeight}
                    height={totalHeight}
                />
            )}
            <ListOfItems list={selectedTeam} />
        </>
    );
};

export default UserHomePage;
