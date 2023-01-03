import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "animate.css";

import App from "./App.js"


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
);