import { Link } from "react-router-dom"
import Carousel from "../Components/Carousel/carousel"
import YoutubeIcon from './../Components/Footer/youtubeicon';
import Title from './../Components/Boilerplate/Title/title';
import Subtitle from './../Components/Boilerplate/Title/subtitle';
import Description from './../Components/Boilerplate/Description/desc';
import { useState } from 'react';

const Slide = ({title, subtitle, paragraphs, selectedImage, images, url}) => {
    var selectedImageAsDom = document.getElementsByClassName("carousel-selected-img__container");
    return(
        <div className="carousel__item">
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
                <div className="carousel-selected-img__container">
                    {
                        selectedImage
                    }
                </div>
                <div className="carousel-unselected-img__container">
                    { 
                        images.map((img, index) => <div id={index}
                        onClick={() => 
                        {
                            var clickedImage = document.getElementById(index).childNodes[0];
                            var temp = clickedImage.src;
                            console.log(selectedImageAsDom[0].childNodes[0]);
                            clickedImage.src = selectedImageAsDom[0].childNodes[0].src;
                            selectedImageAsDom[0].childNodes[0].src = temp;
                        }}>{img}</div>)
                    }
                </div>
            </div>
        </div>
    )
}

const SquaresSlide = () => {
    return(
        <Slide title="Squares" subtitle="C#, Xaml and SQL"
        paragraphs={
        [
            `This is an app of the game squares, the game consists of 64 squares arranged in a grid, the aim of the game
            is the get as many "large squares" as possible, this is done through connecting 4 little squares together. `,
            `This project incoporates C# and SQL with an API connection between the front and back end
            . The front end of the application has been built using WPF, the backend and front-end logic has been built with C#.`,
            `The application features a fully working registration and login page, where the app uses your username to store a highscore
            should you get one.`,
        ]}
        selectedImage={<img className="carousel-selected-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresLoginPage.Png")}/>} 
        images={[
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresRegisterPage.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresAPI.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresSQL.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Squares/SquaresxamlPage.Png")} alt=""/>
    ]} url="Squares"/>
    )
 
}

const MSASlide = () => {
    return(
        <Slide title="Manual Screenshot Application" subtitle="C# and Xaml"
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
        ]}
        selectedImage={<img className="carousel-selected-img" src={require("../Components/Carousel/CarouselPics/MSA/MSACsharp.Png")} alt=""/>}
        images={[
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/MSA/MSAxaml.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/MSA/MSAapp.Png")} alt=""/>
    ]} url="MSA"/>
    )
}

const ChessSlide = () => 
{
    return(
        <Slide title="Chess" subtitle="C#, Xaml and Java"
        paragraphs={
        [
            `This application allows the user to play the well known game 'Chess'`,
            `The front-end of the application has been built in C# using WPF with xaml. 
            The front end also uses AutoFac and XUnit, AutoFac is responsible for creating
            containers for dependency injection. XUnit is a library used for unit testing.
            `,
            `The back-end has been built in Java, the front and back end communicate with a an API
            which has been built with Java also. 
            `
        ]} 
        selectedImage={
            <img className="carousel-selected-img" src={require("../Components/Carousel/CarouselPics/Chess/Chessclientapi.Png")} alt=""/>
        }
        images={[
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Chess/Chessclienttest.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Chess/ChessLogic.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Chess/ChessLogicTest.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Chess/ChessServerAPI.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/Chess/ChessUI.Png")} alt=""/>
    ]} url="ChessBackEnd"/>
    )
}

const ScientificCalcSlide = () => {
    return(
        <Slide title="Scientific Calculator" subtitle="C#, Xaml and Java"
        paragraphs={
        [
            `This application allows the user to play the well known game 'Chess'`,
            `The front-end of the application has been built in C# using WPF with xaml. 
            The front end also uses AutoFac and XUnit, AutoFac is responsible for creating
            containers for dependency injection. XUnit is a library used for unit testing.
            `,
            `The back-end has been built in Java, the front and back end communicate with a an API
            which has been built with Java also. 
            `
        ]} 
        selectedImage=
        {
            <img className="carousel-selected-img" src={require("../Components/Carousel/CarouselPics/ScientificCalc/ScientificCalcClientAPI.Png")} alt=""/>
        }
        images={[
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ScientificCalc/ScientificCalcLogic.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ScientificCalc/ScientificCalcServerAPI.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ScientificCalc/ScientificCalcUI.Png")} alt=""/>,
    ]} url="ChessBackEnd"/>
    )
}

const ExamPracticeSlide = () => {
    return(
        <Slide title="Exam Practice Website" subtitle="Python, React and MongoDB"
        paragraphs={
        [
            `This website functions as an flashcard/exam practice website where the user
            can create groups of questions where they can then practice the questions as
            an exam or in a flashcard format. For example if the user has a biology exam coming up
            they can create a group of question called "Biology" and enter biology questions
            The user can then select the questions which they haven't seen before or haven't answered
            correctly as an exam or as flashcard (please see diagrams for all options)`,
            `The website is built with react which is a javascript library which allows for
            more organised development, enabling the user experience to be smoother.`,
            `The back-end is built in python which includes an API which is what the website
            calls in order to perform CRUD operations on the back - end.
            `,
            `MongoDB is an noSQL database which saves elements as json objects. This allows
            us to easily perform operations on the db.`
        ]} 
        selectedImage=
        {
            <img className="carousel-selected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracAddQues.Png")} alt=""/>
        }
        images={[

            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracCode1.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracCode2.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracEdit.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracEditQues.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracFrontPage.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracSelectKnow.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracServerAPI.Png")} alt=""/>,
            <img className="carousel-unselected-img" src={require("../Components/Carousel/CarouselPics/ExamPractice/ExamPracServerCRUD.Png")} alt=""/>
    ]} url="ChessBackEnd"/>
    )
}


export function Work(){
    return(
        <>
            <Carousel slides={[SquaresSlide, MSASlide, ChessSlide, ScientificCalcSlide, ExamPracticeSlide]}/>
        </>
    )
}