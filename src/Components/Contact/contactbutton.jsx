import React from "react";
import ButtonSweep from './../Boilerplate/ButtonSweep/buttonsweep';
import "animate.css";
import { NameValidation } from './Validation/NameValidation';
import { IsEmail } from "./Validation/EmailValidation";
import emailjs from 'emailjs-com';

var IsFormValid = true;
var PopUpMessages = [];

function ValidateInput(containerId, validatingDelegate, popUpMessage)
{
    var container = document.getElementById(containerId);
    if(validatingDelegate)
    {
        PopUpMessages.push(popUpMessage);
        container.classList.add("input-box-invalid__container");
        IsFormValid = false;
    }
    else
    {
        container.classList.remove("input-box-invalid__container")
    }
}

function CreatePopUpMessage()
{
    var toReturn = "Invalid"
    PopUpMessages.map((message, i) => 
    {
        //First Element
        if(i == 0)
        {
            toReturn += " " + message;
        }
        //Last Element
        else if(i == PopUpMessages.length - 1)
        {
            toReturn += " and " + message;
        }
        //Any other Element
        else
        {
            toReturn += ", " + message
        }
    })
    return toReturn;
}

const ContactButton = () => {
    return(
        <div className="row__container">
            <ButtonSweep Content="Send" LinkURL="Contact" Function={() => 
                {   
                    var name = document.getElementById("inputForName");
                    var email = document.getElementById("inputForEmail");
                    var subject = document.getElementById("inputForSubject");
                    var body = document.getElementById("inputForBody");

                    //Reset list of popup messages
                    var popUpMessage = "";
                    PopUpMessages = []

                    //Reset FormValidation
                    IsFormValid = true;

                    const IsNameValid = NameValidation(name.value);

                    ValidateInput("nameinput", !IsNameValid, "Name");
                    ValidateInput("emailinput", !IsEmail(email.value), "Email");
                    ValidateInput("subjectinput", !subject.value, "Subject");
                    ValidateInput("bodyinput", !body.value, "Body");

                    console.log(IsFormValid);
                    if(IsFormValid) //If the form is valid
                    {
                        emailjs.send('service_mph4wnf', 'template_la38aux', {from_name: name.value, 
                            from_email: email.value, from_subject: subject.value, from_body: body.value}, 
                            "Jyyg6I50BeHll1dDt")
                        .then(function(response) {
                            console.log('SUCCESS!', response.status, response.text);
                         }, function(error) {
                            console.log('FAILED...', error);
                         });

                        popUpMessage = "Email Sent!";

                        var form = document.getElementById("contactform");
                        form.reset();
                    }
                    else
                    {
                        popUpMessage = CreatePopUpMessage();
                    }

                    //Get popup dom element
                    var popUpMessageText = document.getElementById("popup");  
                    popUpMessageText.innerText = popUpMessage;
                    popUpMessageText.classList.add("sent-text__animation");

                    //Animation for popup message
                    setTimeout(() => 
                    {
                        popUpMessageText.classList.remove("sent-text__animation");
                        popUpMessageText.classList.add("sent-text__fadeout");
                        setTimeout(() => 
                        {
                            popUpMessageText.classList.remove("sent-text__fadeout");
                        }, 1000);
                    }, 3000);
                }}/>
                <p id="popup" className="sent-text animate__animated">Email Sent!</p>
        </div>
    )
}

export default ContactButton