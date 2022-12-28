import React from "react";
import "./introduction.css";

import IntroductionLetter from "./introductionletter.jsx";

const IntroductionLine = ({ arrayOfLetters }) => {
    return (
        <div>
            {
                arrayOfLetters.map(char => <IntroductionLetter character={char}/>)
            }
        </div>
    );
}

export default IntroductionLine;