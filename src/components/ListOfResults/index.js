import React from "react";
import Card from "../Card";

const ListOfResults = ({ results }) => {
    return (
        <div className="container">
            <div className="row">
                {results.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            img={item.url}
                            name={item.name}
                            id={item.id}
                            {...item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ListOfResults;

/*
hook --> useTeam({id});
saca del context de searchResults el que concuerde con el id que recibe.
el context de user va a tener el team tmb.
en el hook useUserData accedemos y modificamos el context.


*/
