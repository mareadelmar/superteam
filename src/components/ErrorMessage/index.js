import React from "react";

const ErrorMessage = ({ text, classType }) => {
    return (
        <div className={`${classType}, text-center, alert, col-12`}>
            <p>{text}</p>
        </div>
    );
};

export default ErrorMessage;
