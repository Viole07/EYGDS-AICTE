import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Addrecipe from "./pages/Addrecipe";
import Savedrecipes from "./pages/Savedrecipes";
import Editrecipe from "./pages/Editrecipe";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem("username");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* Redirect to Login if not logged in */}
        <Route path="/" element={<Home /> } />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/home" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/addrecipe" element={ <Addrecipe /> } />
        <Route path="/savedrecipes" element={ <Savedrecipes /> } />
        <Route path="/editrecipe" element={<Editrecipe />} />
      </Routes>
    </Router>
  );
}

export default App;