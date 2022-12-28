import React from "react";
import "./introduction.css";

import IntroductionLine from './introductionline';

const IntroductionHeader = () => {
    return (
        <h1 className="introduction__header">
            <IntroductionLine arrayOfLetters={["H", "i", "," ]} />
            <IntroductionLine arrayOfLetters={["I", "'", "m", " ",  "B", "y", "r", "o", "n" ]}/>
            <IntroductionLine arrayOfLetters={["P", "r", "o", "g", "r", "a", "m", "m", "e", "r" ]}/>
        </h1>
    )
}

export default IntroductionHeader;