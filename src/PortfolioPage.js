import { useState } from "react";
import { SweepButton } from "./SweepButton";
import "./PortfolioPage.css";
import "./style.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css";

const projects = [
    {
        "name": "Wind turbine",
        "content": "This thing which turns and generates electricity",
        "image": "img1.png"
    }
]

export function PortfolioPage()
{
    return (
        <div className="portfolio-page">
            <AnimationOnScroll animateIn="animate__animated animate__fadeIn" animateOut="animate__animated animate__fadeOut">
                <PortfolioHeader/>
            </AnimationOnScroll>  
            <AnimationOnScroll animateIn="animate__animated animate__fadeIn" animateOut="animate__animated animate__fadeOut">
                <PortfolioBody/>
            </AnimationOnScroll>  
        </div>
    )
}

function PortfolioHeader()
{
    const [project, setProject] = useState(projects[0])

    return (
        <div className="portfolio-header_container">
            <h2 className="portfolio-header_element">My Portfolio</h2>
            <p className="description">Some recent projects</p>
            <SweepButton Content="See More!"/>
        </div>
    )
}

function PortfolioBody()
{
    return (
        <div className="portfolio-body_container">
            <PortfolioArrowContainer Arrow="<"/>
            <PortfolioContainer/>
            <PortfolioArrowContainer Arrow=">"/>
        </div>  
    )
}

function PortfolioContainer()
{
    return (
        <div className="portfolio_container">
            <PortfolioElement ProjectName="Project1" ProjectContent="Some content" ProjectImage="img.png"/>
        </div>
    )
}

function PortfolioElement({ ProjectName, ProjectContent, ProjectImage })
{
    return (
        <a className="portfolio-element_link" href={`/Portfolio/${ProjectName}`}>
            <div className="portfolio-element_container">
                <div>
                    <h1 className="portfolio-element portfolio-element-title">{ ProjectName }</h1>
                    <h2 className="portfolio-element portfolio-element-desc">{ ProjectContent }</h2>
                </div>
                <div className="portfolio-element-img_container">
                    <h3 className="portfolio-element portfolio-element-img">{ ProjectImage }</h3>
                </div>
            </div>
        </a>
    )
}

function PortfolioArrowContainer({ Arrow })
{
    return (
        <div className="portfolio-arrow_container">
            <h2 className="portfolio-arrow">{ Arrow }</h2>
        </div>
    )
}
