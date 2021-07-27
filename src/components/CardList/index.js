import React from "react";
import "../../assets/styles/components/CardList.css";
import { useTeam } from "../../hooks/useTeam";
import notFound from "../../assets/statics/not-found.png";

const CardList = ({ name, url, powerstats, id, alignment }) => {
    const { removeFromTeam } = useTeam();

    const handleDelete = () => {
        removeFromTeam({ id, alignment });
    };

    return (
        <div className="col-12">
            <div className="card mt-3 d-flex flex-row">
                <div className="card-body d-flex align-items-center">
                    <object data={url} className="cardlist-img">
                        <img src={notFound} alt={name} />
                    </object>
                    <div className="card-content">
                        <h5>
                            <strong>{name}</strong>
                        </h5>
                        <p>{alignment}</p>
                        <p>
                            <strong>Powerstats:</strong>
                        </p>
                        <ul className="list-group">
                            {Object.keys(powerstats).map((key) => {
                                return (
                                    <li
                                        className="list-group-item"
                                        key={key}
                                    >{`${key}: ${powerstats[key]}`}</li>
                                );
                            })}
                        </ul>
                        <div className="btn-group d-flex">
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleDelete}
                            >
                                Eliminar
                            </button>
                            <button type="button" className="btn btn-primary">
                                Ver detalle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardList;

/*
Nombre del héroe.
Imagen.
Powerstats.
Acciones para ver el detalle o eliminarlo del equipo.

*/
