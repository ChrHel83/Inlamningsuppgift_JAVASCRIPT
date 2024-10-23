import { useState } from "react";
import "./burgermenu.css";

const Burgermenu = () => {

  function openMenu() {
    document.querySelector('.dropdownmenu').setAttribute('aria-expanded',true);    
    document.querySelector('.dropdownmenu').classList.remove('hide');    

  }
  function closeMenu() {
    document.querySelector('.dropdownmenu').setAttribute('aria-expanded',false);
  }
  
  function handleClick(){
    const isMenuVisible = document.querySelector(".dropdownmenu").getAttribute('aria-expanded') ==='true';
    isMenuVisible ? closeMenu() : openMenu();
  }

  return ( 
  
    <i onClick={handleClick} id="burgermenu" className="burgermenu fa-solid fa-bars" />

   );
}
 
export default Burgermenu;