import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/UserDataContext";
import { useTeam } from "../../hooks/useTeam";
import Swal from "sweetalert2";

const AddButton = ({ cardData }) => {
    const { id, alignment } = cardData;
    const [btnText, setBtnText] = useState("Agregar a mi equipo");
    const [btnClass, setBtnClass] = useState("btn-add");
    const { teamGood, teamBad } = useContext(UserContext);
    const { addToBad, addToGood } = useTeam();

    useEffect(() => {
        const isAddedGood = teamGood.some((item) => item.id === id);
        const isAddedBad = teamBad.some((item) => item.id === id);
        if (isAddedGood || isAddedBad) {
            setBtnClass("btn-delete");
            setBtnText("Agregado al equipo");
        }
    }, [id, teamBad, teamGood]);

    const Modal = (title = "", html = "", text = "") => {
        return Swal.fire({
            title,
            text,
            confirmButtonText: "Ok",
            html,
            customClass: {
                confirmButton: "btn-custom",
            },
        });
    };

    const handleAddToTeam = () => {
        if (alignment === "good") {
            if (teamGood.some((item) => item.id === id)) {
                Modal("Ya tienes lo tienes en tu equipo");
                return;
            }
            if (teamGood.length === 3) {
                Modal(
                    "¡Ya tienes 3 personajes de alineación buena!",
                    "Recuerda que solo puedes tener tres. Intenta con otro personaje o elimina alguno de tu equipo."
                );
                return;
            }
            addToGood({ cardData });
        }
        if (alignment === "bad") {
            if (teamBad.some((item) => item.id === id)) {
                Modal("Ya tienes lo tienes en tu equipo");
                return;
            }
            if (teamBad.length === 3) {
                Modal(
                    "¡Ya tienes 3 personajes de alineación mala!",
                    "Recuerda que solo puedes tener tres. Intenta con otro personaje o elimina alguno de tu equipo."
                );
                return;
            }
            addToBad({ cardData });
        }
        setBtnClass("btn-delete");
        setBtnText("Agregado al equipo");
    };

    return (
        <>
            <button
                onClick={handleAddToTeam}
                className={`btn btn-custom ${btnClass}`}
            >
                {btnText}
            </button>
        </>
    );
};

export default AddButton;
