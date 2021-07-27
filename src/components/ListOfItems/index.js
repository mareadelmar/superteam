import React from "react";
import { useRouteMatch } from "react-router";
import Card from "../Card";
import CardList from "../CardList";

const ListOfItems = ({ list }) => {
    let matchHome = useRouteMatch("/");
    console.log(matchHome.isExact);

    return (
        <div className="container">
            <div className="row">
                {list.map((item) => {
                    if (matchHome.isExact) {
                        return <CardList key={item.id} {...item} />;
                    }
                    return <Card key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

export default ListOfItems;

/*

modal: 


Peso.
Altura.
Nombre.
Alias.
Color de ojos.
Color de cabello.
Lugar de trabajo.



*/
