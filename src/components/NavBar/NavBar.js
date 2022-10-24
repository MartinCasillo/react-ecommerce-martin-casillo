import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navContent">
            <div className="container">
                <a className="navbar-brand" href="#inicio">La Cirilla Grill</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto navItems">
                    <li className="nav-item">
                    <a className="nav-link" href="#inicio">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#productos">Productos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contacto">Contacto</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contacto"><CartWidget /></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;