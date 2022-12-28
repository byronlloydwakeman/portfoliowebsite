import React from "react";
import isEmail from "validator/lib/isEmail";
import validator from "validator";

export function IsEmail(email)
{
    return validator.isEmail(email);
}