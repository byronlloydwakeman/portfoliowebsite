import React from "react";
import { Link } from "react-router-dom";
import { Animation } from "../NavigationBar/navigationbar";
import Description from './../Boilerplate/Description/desc';


const AboutDesc = () => {
    return(
        <div className="about-text__container">
            <Description text="I'm a developer currently living in London, England. 
            I have a passion for programming and everything that comes with it. I've
            been creating personal and professional projects for years in languages
            including C#, Java and Python."/>
            <Link className="about__link" onClick={() => 
            {
                Animation("contact");
            }} to="/contact">
                <h2 className="about-link__text">Let's create something together!</h2>
            </Link>

        </div>
    )
}

export default AboutDesc;