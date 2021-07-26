import React from "react";
import "../../assets/styles/components/Card.css";
import { Link } from "react-router-dom";
import AddButton from "../AddButton";

const Card = ({ img, name, id, alignment }) => {
    /*
    click en Card lleva a detalles del personaje.
    */

    return (
        <div className="col-md-3 card-container">
            <div className="card mt-3">
                <Link to="/">
                    <img src={img} alt="character" className="card-img" />
                </Link>

                <div className="card-body">
                    <h5>{name}</h5>
                    <AddButton id={id} alignment={alignment} />
                </div>
            </div>
        </div>
    );
};

// hacer un componente aparte del button para agregar al team?

export default Card;
