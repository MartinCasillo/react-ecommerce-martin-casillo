import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom'; 

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-opacity-25 navContent">
            <div className="container">
                <Link className="navbar-brand" to="/">Reflex Watche's</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto navItems">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/category/Women">Women</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link " to="/category/Male">Male</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#contacto">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="#contacto"><CartWidget /></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;