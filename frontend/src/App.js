import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Addrecipe from "./pages/Addrecipe";
import Savedrecipes from "./pages/Savedrecipes";
import Editrecipe from "./pages/Editrecipe";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true); // Set user as logged in if token exists
        }
    }, []);

    return (
        <Router>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                {/* Routes for non-logged-in users */}
                {!isLoggedIn ? (
                    <>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                        <Route path="/register" element={<Register />} />
                        {/* Redirect logged-in users trying to access these pages */}
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        {/* Routes for logged-in users */}
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/addrecipe" element={<Addrecipe />} />
                        <Route path="/savedrecipes" element={<Savedrecipes />} />
                        <Route path="/editrecipe" element={<Editrecipe />} />
                        {/* Redirect non-logged-in users trying to access protected routes */}
                        <Route path="*" element={<Navigate to="/home" />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}

export default App;
