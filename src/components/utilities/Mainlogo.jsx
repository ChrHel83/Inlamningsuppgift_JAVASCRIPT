import { Link } from "react-router-dom";

const Mainlogo = () => {
    return (
        <div className="main-logo">
            <Link to="/">
                <img id="logo-darkmode" src="public/silicon_logo_darkmode.svg" alt="Logotype Silicon" />
                <img id="logo-default" src="public/silicon_logo_default.svg" alt="Logotype Silicon" />
            </Link>
        </div>
    );
};

export default Mainlogo;
