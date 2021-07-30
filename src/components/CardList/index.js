import React from "react";
import "../../assets/styles/components/CardList.css";
import { useTeam } from "../../hooks/useTeam";
import notFound from "../../assets/statics/not-found.png";
import Swal from "sweetalert2";

const CardList = ({ cardData }) => {
    const {
        name,
        fullName,
        url,
        powerstats,
        id,
        alignment,
        appearance,
        aliases,
        work,
    } = cardData;
    const { removeFromGood, removeFromBad } = useTeam();
    const { weight, height } = appearance;

    const handleDetails = () => {
        Swal.fire({
            title: name,
            html: `
            <ul className="list-group text-left">
                <li className="list-group-item">Nombre completo: ${fullName}</li>
                <li className="list-group-item">Alias: ${aliases.join()}</li>
                <li className="list-group-item">Altura: ${height[1]}</li>
                <li className="list-group-item">Peso: ${weight[1]}</li>
                <li className="list-group-item">Color de ojos: ${
                    appearance["eye-color"]
                }</li>
                <li className="list-group-item">Color de cabello: ${
                    appearance["hair-color"]
                }</li>
                <li className="list-group-item">Lugar de trabajo: ${
                    work.base
                }</li>
            </ul>
            `,
            customClass: {
                confirmButton: "btn-custom",
            },
            confirmButtonText: "Cerrar",
        });
    };

    const handleDelete = () => {
        if (alignment === "good") {
            removeFromGood({ id });
        }
        if (alignment === "bad") {
            removeFromBad({ id });
        }
    };

    return (
        <div className="col-12">
            <div className="card mt-3 d-flex flex-row shadow-sm">
                <div className="card-body d-flex align-items-center">
                    <object data={url} className="cardlist-img mx-3">
                        <img
                            src={notFound}
                            alt={name}
                            className="cardlist-img"
                        />
                    </object>
                    <div className="card-content m-3">
                        <h5 className="color-primary">
                            <strong className="text-uppercase p-1">
                                {name}
                            </strong>
                        </h5>
                        <p>Alineación: {alignment}</p>
                        <p>
                            <strong>POWERSTATS:</strong>
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
                                className="btn-delete btn m-3"
                                onClick={handleDelete}
                            >
                                Eliminar
                            </button>
                            <button
                                type="button"
                                className="btn btn-custom m-3"
                                onClick={handleDetails}
                            >
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
