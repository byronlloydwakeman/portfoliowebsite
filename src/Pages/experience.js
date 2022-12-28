import React from "react";
import "../Components/About/about.css";
import ExperienceSubtitle from "../Components/Experience/experiencesubtitle";
import ExperienceTitle from "../Components/Experience/experiencetitle";
import ExperienceDesc from "../Components/Experience/experiencedesc";

export function Experience(){
    return(
        <div>
            <ExperienceTitle text={"Experience"}/>
            <ExperienceSubtitle text={"Education"}/>
            <ExperienceDesc paragraphs={["A-Levels -", "Maths A*", "Futher Maths A", "Physics A"]}/>
            <ExperienceSubtitle text={"Certifications"}/>
            <ExperienceDesc paragraphs={["Python Certified Entry Programmer (PCEP)", "Python Certified Associate Programmer (PCAP)"]}/>
        </div>
    )
}