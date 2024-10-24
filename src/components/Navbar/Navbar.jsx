import { useState } from "react";
import Darkmodeswitch from "../utilities/Darkmodeswitch";
import Mainlogo from "../utilities/Mainlogo";
import Navlinks from "../utilities/Navlinks";
import BtnSignin from "../utilities/BtnSignin";
import Burgermenu from "../utilities/Burgermenu";
import DropDownMenu from "../utilities/dropdownmenu";

const Navbar = () => {
    return (
        <div className="navbar" id="navbar">
            <div className="container">
                <Mainlogo />
                <Navlinks />
                <Darkmodeswitch />
                <BtnSignin />
                <Burgermenu />
            </div>
            <DropDownMenu />  {/*Ligger här för att expandera i bredd över hela skärmen */}
        </div>
    );
};

export default Navbar;
