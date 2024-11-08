import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./views/Contacts";
import Home from "./views/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
