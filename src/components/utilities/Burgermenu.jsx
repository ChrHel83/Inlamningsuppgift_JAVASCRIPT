import "./burgermenu.css";

const Burgermenu = () => {
  

  const openMenu = () => {
    document.querySelector(".dropdownmenu").classList.add('show');
  }
  const closeMenu = () => {
    document.querySelector(".dropdownmenu").classList.remove('show');
  }

  function handleClick(){
    const isOpen = document.querySelector(".dropdownmenu").classList.contains("show");
    isOpen ? closeMenu() : openMenu();

    
  }

  return ( 
  
    <i onClick={handleClick} className="burgermenu fa-solid fa-bars" />

   );
}
 
export default Burgermenu;