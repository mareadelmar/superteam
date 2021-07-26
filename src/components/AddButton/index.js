import React, { useContext, useState } from "react";
import "../../assets/styles/components/AddButton.css";
import UserContext from "../../context/UserDataContext";
import { useTeam } from "../../hooks/useTeam";

const AddButton = ({ id, alignment }) => {
    const [btnText, setBtnText] = useState("Agregar a mi equipo");
    const [btnClass, setBtnClass] = useState("btn-add");
    const { teamGood, teamBad } = useContext(UserContext);
    const { addToTeam, removeFromTeam } = useTeam();
    console.log(teamGood);
    console.log(teamBad);

    // USAR UN MODAL PARA LOS ERRORES
    const [showError, setShowError] = useState("");

    const isNotFull = () => {
        if (alignment === "good") {
            console.log(teamGood.length);
            return teamGood.length < 3;
        } else {
            return teamBad.length < 3;
        }
    };

    const isAdded = () => {
        if (alignment === "good") {
            teamGood.some((item) => item.id === id);
        } else {
            teamBad.some((item) => item.id === id);
        }
        console.log(teamBad, teamGood);
    };

    const handleAddToTeam = () => {
        if (!isNotFull()) {
            setShowError(
                "Ya tiene tres integrantes con esta alineación, intenta con otro."
            );
            return;
        }

        // verificar si ya está agregado --> agregar/eliminar
        if (!isAdded()) {
            addToTeam({ id, alignment });
            setBtnClass("btn-delete");
            setBtnText("Eliminar de mi equipo");
        } else {
            console.log("remover del equipo", id);
        }
    };

    return (
        <>
            <button
                onClick={handleAddToTeam}
                className={`btn btn-primary ${btnClass}`}
            >
                {btnText}
            </button>
            {setShowError ? <p>{showError}</p> : null}
        </>
    );
};

export default AddButton;
