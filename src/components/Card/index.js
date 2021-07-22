import React from "react";

const Card = ({ img, name, handleAddToTeam }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={img} alt="character" />
                <h5>{name}</h5>
                <button onClick={handleAddToTeam}>Agregar a mi equipo</button>
            </div>
        </div>
    );
};

export default Card;
