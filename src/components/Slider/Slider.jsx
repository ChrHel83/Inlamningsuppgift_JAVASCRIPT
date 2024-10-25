import { useState, useEffect } from "react";
import "./slider.css";

const Slider = () => {
    return (
        <section className="slider" id="slider">
            <div className="container">
                <div className="headline">How Does It Work?</div>
                <div className="slider-container">
                    <div className="s-1 slide">
                        <img src="public/slide_1.png" alt="" />
                        <div className="content">
                            <p>Latest transaction history</p>
                            <span>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </span>
                        </div>
                    </div>
                    <div className="s-2 slide ">
                        <img src="public/slide_2.png" alt="" />
                        <div className="content">
                            <p>Transfers to people from your contact list</p>
                            <span>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</span>
                        </div>
                    </div>
                    <div className="s-3 slide ">
                        <img src="public/slide_3.png" alt="" />
                        <div className="content">
                            <p>Step 3. Transfers to people from your contact list</p>
                            <span>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
