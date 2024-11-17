import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacts from "./views/Contacts";
import Home from "./views/Home";
import Footer from "./components/Footer/Footer";
import { APIprovider } from "./contexts/APIcontext";

function App() {
    return (
        <APIprovider> 
            <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
        </APIprovider>
    );
}

export default App;
