import React from "react";
import { Link } from "react-router-dom";
import { PageChangeAnimation } from "../../PageAnimation/PageAnimation.jsx";

import "./navigationbar.css";

var currentSelectedID = "home";

export function Animation( newSelectedID )
{
    console.log(newSelectedID);
    //So animation doesn't occur on already selected elements
    if(newSelectedID == currentSelectedID)
    {
        return;
    }

    PageChangeAnimation();

    console.log("reached past page change");

    var prevElement = document.getElementById(currentSelectedID);
    var prevChildElement = document.getElementById(`${currentSelectedID}-text`);

    prevElement.classList.add("FadeOutAnimation");

    prevElement.classList.remove("navigation-bar__selected");
    prevElement.classList.add("navigation-bar__unselected");
    prevChildElement.classList.remove("navigation-bar-text__selected");
    prevChildElement.classList.add("navigation-bar-text__unselected");

    var curElement = document.getElementById(newSelectedID);
    var curChildElement = document.getElementById(`${newSelectedID}-text`);

    curElement.classList.add("FadeInAnimation");

    curElement.classList.add("navigation-bar__selected");
    curChildElement.classList.add("navigation-bar-text__selected");

    setTimeout(() => {
        prevElement.classList.remove("FadeOutAnimation");
        curElement.classList.remove("FadeInAnimation");
    }, 1000);

    currentSelectedID = newSelectedID;
}

const NavigationBar = () => {
    return(
        <div className="navigation-bar__container">
            <Link className="navigation-bar__link" to="/Home">
                <div onClick={() => 
                {
                    Animation("home");
                }} id="home" className="navigation-bar-text__container navigation-bar__selected">
                    <h3 id="home-text" className="navigation-bar-text__selected">Home</h3>
                </div>
            </Link>
            <Link className="navigation-bar__link" to="/About">
                <div onClick={() => 
                {
                    Animation("about");
                }} id="about" className="navigation-bar-text__container">
                    <h3 id="about-text" className="navigation-bar-text__unselected">About</h3>
                </div>
            </Link>
            <Link className="navigation-bar__link" to="/Experience">
                <div onClick={() => 
                {
                    Animation("experience");
                }} id="experience" className="navigation-bar-text__container">
                    <h3 id="experience-text" className="navigation-bar-text__unselected">Experience</h3>
                </div>
            </Link>
            <Link className="navigation-bar__link" to="/Work">
                <div onClick={() => 
                {
                    Animation("work");
                }} id="work" className="navigation-bar-text__container">
                    <h3 id="work-text" className="navigation-bar-text__unselected">Work</h3>
                </div>
            </Link>
            <Link className="navigation-bar__link" to="/Contact">
                <div onClick={() => 
                {
                    Animation("contact");
                }} id="contact" className="navigation-bar-text__container">
                    <h3 id="contact-text" className="navigation-bar-text__unselected">Contact</h3>
                </div>
            </Link>
        </div>
    )
}

export default NavigationBar;