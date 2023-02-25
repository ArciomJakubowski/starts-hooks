import React, { useState } from "react";
import Card from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [stateButton, setStateButton] = useState(true);

    const toggleOtherState = () => {
        setStateButton((prevState) => !prevState);
    };
    console.log("stateButton:", stateButton);

    const handleAddAuth = () => {
        toggleOtherState();
        localStorage.setItem("auth", "token");
    };

    const handleRemoveAuth = () => {
        toggleOtherState();
        localStorage.removeItem("auth");
    };

    const isAuth = localStorage.getItem("auth");

    console.log(isAuth);

    return (
        <Card>
            {!isAuth ? (
                <Component {...props} onLogin={handleAddAuth} isAuth={isAuth} />
            ) : (
                <Component
                    {...props}
                    onLogOut={handleRemoveAuth}
                    isAuth={isAuth}
                />
            )}
        </Card>
    );
};

export default withFunctions;
