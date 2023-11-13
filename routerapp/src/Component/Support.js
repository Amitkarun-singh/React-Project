import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
    const navigate = useNavigate();

    function clickHandler () {
        // To move to about page
        navigate("/Lab");
    }

    function backHandler () {
        // To go back 
        navigate(-1);
    }

    return (
        <div>
            <div>
                This is Support Page
            </div>
            <button onClick={clickHandler}>Move to Lab Page</button>
            <button onClick={backHandler}>Go back</button>
        </div>
    )
}

export default Support;