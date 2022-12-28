import React from "react";
import { Link } from "react-router-dom";


import "./buttonsweep.css";

const ButtonSweep = ({ Content, LinkURL, Function }) => {
    return (
            <div class="introduction__contact-me-container">
                <Link to={`/${LinkURL}`}>
                    <button onClick={() => 
                    {
                        Function();
                        // Animation("contact")
                    }} class="introduction__contact-me">{ Content }</button>
                </Link>
            </div>
    )
}

export default ButtonSweep;