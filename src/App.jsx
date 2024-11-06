import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Logos from "./components/Logos/Logos";
import AppFeatures from "./components/AppFeatures/AppFeatures";
import Slider from "./components/Slider/Slider";
import Features from "./components/Features/Features";
import Testimonials from "./components/Testimonials/Testimonials";
import Subscribe from "./components/Subscribe/Subscribe";
import Faq from "./components/faq/faq";



function App() {

    return (
        <div className="wrapper">
            <header>
                <Navbar />
                <Hero />
            </header>
            <main>
                <Logos />
                <AppFeatures />
                <Slider />
                <Features />
                <Testimonials />
                <Faq />
                <Subscribe />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default App

