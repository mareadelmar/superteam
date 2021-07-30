import React from "react";
import AddButton from "../AddButton";
import notFound from "../../assets/statics/not-found.png";

const Card = ({ cardData }) => {
    const { url, name } = cardData;
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card-container">
            <div className="card mt-3 shadow-sm">
                <object data={url}>
                    <img src={notFound} alt={name} className="card-img" />
                </object>
                <div className="card-body">
                    <h5>{name}</h5>
                    <AddButton cardData={cardData} />
                </div>
            </div>
        </div>
    );
};

export default Card;

/*
Nombre del héroe.
Imagen.
Acciones para agregarlo al equipo
*/
