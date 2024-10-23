import { useState } from "react";
import "./darkmodeswitch.css";

const Darkmodeswitch = () => {
    const [isDarkmode, setIsDarkmode] = useState(localStorage.getItem("darkmode"));
    isDarkmode && document.body.parentElement.classList.add("darkmode");

    function toggleTheme() {
                
        if (document.body.parentElement.classList.contains("darkmode")) {
            document.body.parentElement.classList.remove("darkmode")
            setIsDarkmode(false);
            localStorage.clear();
        } else {
            localStorage.setItem("darkmode", false);
            document.body.parentElement.classList.add("darkmode");
        }
    }

    return (
        <div className="darkmode-switch">
            <span className="label">Dark Mode</span>
            <label htmlFor="darkmode-switch" className="switch">
                {isDarkmode ? <input type="checkbox" id="darkmode-switch" checked onChange={toggleTheme} /> : <input type="checkbox" id="darkmode-switch" onChange={toggleTheme} />}
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Darkmodeswitch;
