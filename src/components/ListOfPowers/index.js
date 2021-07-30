import React from "react";

const ListOfPowers = ({ showTeam, bestPower, powers }) => {
    return (
        <div className="container mt-5">
            <h3 className="color-primary">Powerstats de tu equipo:</h3>
            <p>El poder que define tu equipo es:</p>
            <p>
                <strong>{`${bestPower[0]} : ${bestPower[1]}`}</strong>
            </p>
            <ul>
                {powers.map((item) => {
                    return <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>;
                })}
            </ul>
        </div>
    );
};

export default ListOfPowers;
