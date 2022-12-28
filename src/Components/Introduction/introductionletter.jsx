import React from "react";
import "./introduction.css";

const IntroductionLetter = ({ character }) => {
    if (character === "B")
    {
        return <span className="introduction__letter introduction__letter-B">B</span>
    }

    return (
        <span className="introduction__letter">{ character }</span>
    );
}

export default IntroductionLetter