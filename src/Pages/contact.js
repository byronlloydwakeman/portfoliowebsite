import React from "react";
import ContactTitle from "../Components/Contact/contacttitle";
import ContactDescription from "../Components/Contact/contactdesc";
import ContactInput from "../Components/Contact/contactinput";
import ContactButton from './../Components/Contact/contactbutton';
export function Contact(){
    return(
        <>
            <ContactTitle/>
            <ContactDescription/>
            <ContactInput/>
            <ContactButton/>
        </>
    )
}