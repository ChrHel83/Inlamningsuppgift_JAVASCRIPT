import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";
import AppFeatures from "./components/AppFeatures/AppFeatures";
import Slider from "./components/Slider/Slider";



createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="wrapper">
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>
                <Logos />
                <AppFeatures />
                <Slider />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </StrictMode>
);
