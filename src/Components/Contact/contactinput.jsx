import React from "react";
import Border from './border';
import "./contact.css";


const ContactInput = () => {
    return(
        <form id="contactform">
            <div className="row__container">
                <div id="nameinput" className="input-box__container">
                    <input id="inputForName" onBlur={() => {
                        var element = document.getElementById("nameinput");
                        element.classList.remove("input-boxSlideInComplete");
                    }} 
                    onFocus={() => {
                        var element = document.getElementById("nameinput");
                        element.classList.add("input-boxSlideInComplete");
                    }}
                    className="input-box" type="text" placeholder="Name"></input>
                </div>
                <div className="space"/>
                <div id="emailinput" className="input-box__container">
                    <input id="inputForEmail" onBlur={() => {
                        var element = document.getElementById("emailinput")
                        element.classList.remove("input-boxSlideInComplete");
                    }} 
                    onFocus={() => {
                        var element = document.getElementById("emailinput");
                        element.classList.add("input-boxSlideInComplete");
                    }}
                    className="input-box" type="text" placeholder="Email"></input>
                </div>
            </div>
            <div className="row__container">
                <div id="subjectinput" className="input-box__container input-subject-box__container">
                    <input id="inputForSubject" onBlur={() => {
                        var element = document.getElementById("subjectinput");
                        element.classList.remove("input-boxSlideInComplete");
                    }} 
                    onFocus={() => {
                        var element = document.getElementById("subjectinput");
                        element.classList.add("input-boxSlideInComplete");
                    }}
                    className="input-box input-subject-box" type="text" placeholder="Subject"></input>
                </div>
            </div>
            <div className="row__container">
                <div id="bodyinput" className="input-box__container input-subject-box__container input-body-box__container">
                    <textarea id="inputForBody" onBlur={() => {
                        var element = document.getElementById("bodyinput");
                        element.classList.remove("input-boxSlideInComplete");
                    }} 
                    onFocus={() => {
                        var element = document.getElementById("bodyinput");
                        element.classList.add("input-boxSlideInComplete");
                    }}
                    className="input-box input-subject-box input-body-box" type="text" placeholder="Body"></textarea>
                </div>
            </div>
        </form>
    )
}

export default ContactInput;