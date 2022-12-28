import React from "react";
import "./footer.css";

import GitHubIcon from './githubicon';
import YoutubeIcon from "./youtubeicon";
import LinkedinIcon from "./linkedin.jsx";

function Footer()
{
    return (
        <div className="footer__container">
            <div className="footer-element__container">
                <a className="footer-element_link" href="https://github.com/bystorm1103">
                    <GitHubIcon/>
                </a>
                <a className="footer-element_link" href="https://www.youtube.com/channel/UC_RgQpU9cR2tBCzgkqn60mg">
                    <YoutubeIcon/>
                </a>
                <a className="footer-element_link" href="https://www.linkedin.com/in/byron-lloyd-wakeman-3b49871b1/">
                    <LinkedinIcon/>
                </a>
            </div> 
        </div>
    );
}

export default Footer;