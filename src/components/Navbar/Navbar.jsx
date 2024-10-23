import { useState } from "react";
import Darkmodeswitch from "../utilities/Darkmodeswitch";
import Mainlogo from "../utilities/Mainlogo";
import Navlinks from "../utilities/Navlinks";
import BtnSignin from "../utilities/BtnSignin";
import Burgermenu from "../utilities/Burgermenu";
import "./navbar.css";

const Navbar = () => {

    return (
        <div id="navbar">
            <div className="container">
              <Mainlogo />
              <Navlinks />
              <Darkmodeswitch />
              <BtnSignin />
              <Burgermenu />
            </div>
        </div>
    );
};

export default Navbar;
