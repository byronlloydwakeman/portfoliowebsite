import React from "react";
import MenuSelector from "./menuselector";

import "./menuselector.css";

const MenuSelectors = () => {
    return(
        <div className="menu-selector__container">
            <MenuSelector SelectorName="Home"/>
            <MenuSelector SelectorName="About"/>
            <MenuSelector SelectorName="CV"/>
            <MenuSelector SelectorName="Work"/>
            <MenuSelector SelectorName="Contact"/>
        </div>
    )
}

export default MenuSelectors;