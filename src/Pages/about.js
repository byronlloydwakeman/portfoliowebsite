import React from "react";
import "../Components/About/about.css";

import AboutImg from './../Components/About/aboutimg';
import AboutTitle from "../Components/About/abouttitle";
import AboutDesc from "../Components/About/aboutdesc";

export function About()
{
    return(
        <div className="about__container">
            <AboutImg/>
            <AboutTitle/>
            <AboutDesc/>
        </div>

    )
}