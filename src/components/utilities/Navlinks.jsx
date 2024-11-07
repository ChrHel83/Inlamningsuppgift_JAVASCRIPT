import "./navlinks.css";
import React from 'react';
import {NavLink} from "react-router-dom";
const Navlinks = () => {


  
  return ( 
    <div className="navlinks">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/Contacts">Contacts</NavLink>
    </div>
   );
}
 
export default Navlinks;