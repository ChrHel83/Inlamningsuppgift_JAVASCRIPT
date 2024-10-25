import { useState } from "react";
import "./hero.css";
import BtnRound from "../utilities/BtnRound";

const Hero = () => {
    const [isDarkmode, setIsDarkMode] = useState(document.body.parentElement.classList.contains("darkmode"));


    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="headline">
                    <h1>Manage All Your Money in One App</h1>
                </div>
                <div className="content">
                    <span>
                        <p>We offer you a new generation of the mobile banking.</p>
                        <p>Save, spend & manage money in your pocket.</p>
                    </span>
                    <div className="buttons">
                        <a href="#">
                        <div className="btn-download">
                            <img src="./public/appstore-light.svg" className="lightmode-img" alt="App Store" />
                            <img src="./public/appstore-dark.svg" className="darkmode-img" alt="App Store" />
                        </div>
                        </a>
                        <a href="#">
                        <div className="btn-download">
                            <img src="./public/googleplay-light.svg" className="lightmode-img" alt="Google Play" />
                            <img src="./public/googleplay-dark.svg" className="darkmode-img" alt="Google Play" />
                        </div>
                        </a>

                    </div>
                    <a href="#slider">
                    <div className="discover-more">
                        <BtnRound />
                        <p>Discover more</p>
                    </div>
                    </a>
                </div>
                <div className="phones">
                    <img className="iphone-front" src="./public/iphone_front.png" alt="iPhone with creditcard" />
                    <img className="iphone-back" src="./public/iphone_back.png" alt="iPhone with creditcard" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
