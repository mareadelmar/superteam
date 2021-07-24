import React from "react";

const ErrorMessage = ({ text, classType }) => {
    // text-center, alert, col-12, d-block
    // alert-danger o alert-success

    return (
        <div className={`${classType}, text-center, alert, col-12`}>
            <p>{text}</p>
        </div>
    );
};

export default ErrorMessage;
