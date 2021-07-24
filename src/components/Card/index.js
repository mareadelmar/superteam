import React from "react";

const Card = ({ img, name, handleAddToTeam }) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={img} alt="character" />
                <div className="card-body">
                    <h5>{name}</h5>
                    <button
                        onClick={handleAddToTeam}
                        className="btn btn-primary"
                    >
                        Agregar a mi equipo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
