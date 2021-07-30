import React from "react";

const ListOfPowers = ({ showTeam, bestPower, powers, height, weight }) => {
    return (
        <div className="container mt-5">
            <h3 className="color-primary">Powerstats de tu equipo:</h3>
            <p>
                El poder que define tu equipo es:{" "}
                <span className="highlight">{`${bestPower[0]} : ${bestPower[1]}`}</span>
            </p>
            <ul>
                {powers.map((item) => {
                    return <li key={item[0]}>{`${item[0]}: ${item[1]}`}</li>;
                })}
            </ul>
            <p>
                La medida promedio de tu equipo es:{" "}
                <span className="highlight">{`${height} cm`}</span>
            </p>
            <p>
                El peso promedio de tu equipo es:{" "}
                <span className="highlight">{`${weight} kg`}</span>
            </p>
        </div>
    );
};

export default ListOfPowers;
