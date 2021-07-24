import React from "react";
import Card from "../Card";

const ListOfResults = ({ results }) => {
    // const list = [
    //     {
    //         img: "https://www.superherodb.com/pictures2/portraits/10/100/10448.jpg",
    //         name: "Predator",
    //     },
    //     {
    //         img: "https://www.superherodb.com/pictures2/portraits/10/100/208.jpg",
    //         name: "Omega Red",
    //     },
    //     {
    //         img: "https://www.superherodb.com/pictures2/portraits/10/100/869.jpg",
    //         name: "Mr Incredible",
    //     },
    //     {
    //         img: "https://www.superherodb.com/pictures2/portraits/10/100/628.jpg",
    //         name: "Alfred Pennyworth",
    //     },
    // ];

    const handleAddToTeam = () => {
        console.log("agregar a mi equipo");
    };

    return (
        <div className="container">
            <div className="row">
                {results.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            img={item.url}
                            name={item.name}
                            handleAddToTeam={handleAddToTeam}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ListOfResults;
