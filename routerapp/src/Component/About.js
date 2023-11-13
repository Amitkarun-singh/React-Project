import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    function clickHandler () {
        // To move to about page
        navigate("/Support");
    }

    return (
        <div>
            <div>
                This is About Page
            </div>
            <button onClick={clickHandler}>Move to support Page</button>
        </div>
    )
}

export default About;