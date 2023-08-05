import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
    onAboutClick: () => void;
    onPanelsClick: () => void;
    onOrgansClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onAboutClick, onPanelsClick, onOrgansClick }) => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">MEDLAB HELP</Link>        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <button className="nav-link btn" onClick={onAboutClick}>
                About
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn" onClick={onPanelsClick}>
                Panels
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-link btn" onClick={onOrgansClick}>
                Organs
                </button>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
};

export default Menu;