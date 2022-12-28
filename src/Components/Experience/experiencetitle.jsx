import React from "react";
import "./experience.css";
import "../About/about.css";
import Title from './../Boilerplate/Title/title';

const ExperienceTitle = ({ text }) => {
    return(
        <div className="experience-title__container">
            <Title className="about__title" text={ text }/>
        </div>
    )
}

export default ExperienceTitle;