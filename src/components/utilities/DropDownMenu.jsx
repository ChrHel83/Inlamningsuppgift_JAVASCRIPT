import "./dropdownmenu.css";
import Navlinks from "./Navlinks";
import BtnSignin from "./BtnSignin";
import { useEffect, useState } from "react";

const DropDownMenu = () => {

    return (
        <div className="dropdownmenu hide" aria-expanded='false'>
            <Navlinks />
            <hr />
            <BtnSignin />
        </div>
    );
};

export default DropDownMenu;
