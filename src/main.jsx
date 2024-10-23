import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <div className="wrapper">
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>
                <></>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    </StrictMode>
);
