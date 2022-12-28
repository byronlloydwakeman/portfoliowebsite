import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "animate.css";

import App from "./App.js";

// function Page() {
//     return (
//             <div className="main-page">
//                 <MainPage/>
//                 <AnimationOnScroll animateIn="animate__animated animate__fadeIn" animateOut="">
//                     <PortfolioPage />
//                 </AnimationOnScroll>  
//             </div>
//     )
// }


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);