import React from "react";
import { Link } from "react-router-dom";

import "./menuselector.css";

const MenuSelector = ({ SelectorName }) =>
{
    return (
        <Link className="menu-selector_link" to={`/${SelectorName}`}>
            <h3 className="menu-selector">{ SelectorName }</h3>
        </Link>
    )
}

export default MenuSelector;