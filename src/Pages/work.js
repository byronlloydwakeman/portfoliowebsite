import { Link } from "react-router-dom"
import Carousel from "../Components/Carousel/carousel"
import YoutubeIcon from './../Components/Footer/youtubeicon';
import Title from './../Components/Boilerplate/Title/title';
import Subtitle from './../Components/Boilerplate/Title/subtitle';
import Description from './../Components/Boilerplate/Description/desc';

const Slide = ({title, subtitle, paragraphs, images, url}) => {
    return(
        <div className="carousel__item">
            <div className="carousel-content__container">
                <div className="carousel-description__container">
                    <div className="carousel-title__container">
                        <Title text={title}/>
                    </div>
                    <Subtitle text={subtitle}/>
                    { paragraphs.map(paragraph => <div className="carousel-description-text__container"><Description text={paragraph}/></div>)}
                    <a className="carousel-description__link" href={`https://github.com/bystorm1103/${url}`}>
                        <p className="description carousel-description-link__text">
                            Find out more
                        </p>
                    </a>
                </div>
                <div className="carousel-img__container">
                    { images.map(image => image) }
                </div>
            </div>
        </div>
    )
}

const Slide1 = () => {
    return(
        <Slide title="Squares" subtitle="C#, xaml and SQL"
        paragraphs={
        [
            `This is an app of the game squares, the game consists of 64 squares arranged in a grid, the aim of the game
            is the get as many "large squares" as possible, this is done through connecting 4 little squares together. `,
            `This project incoporates C# and SQL with an API connection between the front and back end
            . The front end of the application has been built using WPF, the backend and front-end logic has been built with C#.`,
            `The application features a fully working registration and login page, where the app uses your username to store a highscore
            should you get one.`,
        ]} images={[
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresLoginPage.Png")}/>,
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresRegisterPage.Png")} alt=""/>,
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresAPI.Png")} alt=""/>,
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresSQL.Png")} alt=""/>,
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresxamlPage.Png")} alt=""/>
    ]} url="Squares"/>
    )
 
}

const Slide2 = () => {
    return(
        <Slide title="Manual Screenshot Application" subtitle="C# and xaml"
        paragraphs={
        [
            `This app does performs the art of taking screenshots,
            you might be wondering why this is neccesary since we all have the screen snip function.
            The screen snip function only copies the image to the clipboard, it doesn't give you 
            the ability to save it to a certain folder in file explorer, which is what this application 
            can do`,
            `The front-end has been built with WPF using xaml and the back-end logic is built in C#.
            The app uses XUnit to unit test and Caliburn Micro as an MVVM framework.`,
            `The application allows you to set the desired screen size (if you only want part of the screen)
            and set the name of the file and the directory it will get saved to. It also allows you to set a
            delay (so you have time to move tabs and pages around).`
        ]} images={[
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/MSA/MSACsharp.Png")} alt=""/>,
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/MSA/MSAxaml.Png")} alt=""/>,
            <img className="carousel-img" src={require("../Components/Carousel/CarouselPics/MSA/MSAapp.Png")} alt=""/>
    ]} url="MSA"/>
    )
}


export function Work(){
    return(
        <>
            <Carousel slides={[Slide1, Slide2]}/>
        </>
    )
}