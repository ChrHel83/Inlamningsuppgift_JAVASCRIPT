import "./darkmodeswitch.css";

const Darkmodeswitch = () => {

    function toggleTheme() {
        document.body.parentElement.classList.toggle("darkmode");
    }

    return (
        <div className="darkmode-switch">
            <span className="label">Dark Mode</span>
            <label htmlFor="darkmode-switch" className="switch">
                <input type="checkbox" id="darkmode-switch" onChange={toggleTheme} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Darkmodeswitch;
