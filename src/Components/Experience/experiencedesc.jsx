import React from "react";
import "../Introduction/introduction.css";
import Description from './../Boilerplate/Description/desc';

const ExperienceDesc = ({ paragraphs }) => {
    console.log(paragraphs);
    return(
        <div className="experience-desc__container">
            {
                paragraphs.map(paragraph => 
                    (<div className="experience-desc"><Description className="description" text={paragraph}/></div>)
                )
            }
        </div>
    )
}

export default ExperienceDesc;