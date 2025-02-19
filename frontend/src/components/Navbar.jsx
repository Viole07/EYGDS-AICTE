import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="home">TastyBites</Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="addrecipe"><b>Add Recipe</b></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="savedrecipes"><b>Saved Recipes</b></Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-white" to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="register">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
