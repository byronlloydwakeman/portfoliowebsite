import React from "react";
import Subtitle from './../Boilerplate/Title/subtitle';

const ExperienceSubtitle = ({ text }) => {
    return(
        <div className="experience-subtitle__container">
            <Subtitle className="experience-subtitle" text={ text }/>
        </div>
    )
}

export default ExperienceSubtitle;