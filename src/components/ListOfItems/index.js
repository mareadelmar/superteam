import React from "react";
import { useRouteMatch } from "react-router";
import Card from "../Card";
import CardList from "../CardList";

const ListOfItems = ({ list }) => {
    let matchHome = useRouteMatch("/");

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                {list.map((item) => {
                    if (matchHome.isExact) {
                        return <CardList key={item.id} cardData={item} />;
                    }
                    return <Card key={item.id} cardData={item} />;
                })}
            </div>
        </div>
    );
};

export default ListOfItems;
