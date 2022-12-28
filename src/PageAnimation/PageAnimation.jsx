import React from "react";
import "./pageanimation.css";

export function PageChangeAnimation(){
    console.log("reached");
    var content = document.getElementById("content");
    content.classList.add("ContentFadeInAnimation");

    setTimeout(() => {content.classList.remove("ContentFadeInAnimation")}, 1000);
}
