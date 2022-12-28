import React from "react";

function IsCharNumber(c)
{
    return !isNaN(c);
}

export function NameValidation(name)
{
    if(name.length <= 1)
    {
        return false;
    }
    else if(name)
    {
        for(let i = 0; i < name.length; i++)
        {
            if(IsCharNumber(name.charAt(i)))
            {
                return false
            }
        }
    }

    return true;
}