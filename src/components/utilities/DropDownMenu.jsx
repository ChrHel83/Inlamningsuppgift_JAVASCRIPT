import "./dropdownmenu.css";
import Navlinks from "./Navlinks";
import BtnSignin from "./BtnSignin";

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
