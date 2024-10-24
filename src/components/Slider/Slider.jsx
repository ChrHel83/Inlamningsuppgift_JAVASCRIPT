import { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
    return (
        <section className="slider">
            <div className="container">

                <div className="headline">How Does It Work?</div>

                <div className="slide-container">

                <div className="slide s-0">
                    <div className="img-container">
                        <img src="./public/slide_0.png" alt="" />
                    </div>
                          <p className="heading"></p>
                    <span></span>
                </div>

                <div className="slide s-1">
                    <div className="img-container">
                        <img src="./public/slide_1.png" alt="" />
                    </div>
                          <p className="heading">Ribrik till steg 1</p>
                    <span>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</span>
                </div>

                <div className="slide s-2">
                    <div className="img-container">
                        <img src="./public/slide_2.png" alt="" />
                    </div>
                <p className="heading">Latest transaction history</p>
                    <span>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</span>
                </div>

                <div className="slide s-3">
                    <div className="img-container">
                        <img src="./public/slide_3.png" alt="" />
                    </div>
                    <p className="heading">Text till slide 3</p>
                    <span>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</span>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Slider;
