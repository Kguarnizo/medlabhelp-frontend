import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import NavDropdown from 'react-bootstrap/NavDropdown';


interface MenuProps {
    onAboutClick: () => void,
    panelData: PanelData[],
    organData: OrganData[],
    onTestClick: () => void,
}

const Menu: React.FC<MenuProps> = ({ onAboutClick, panelData, organData, onTestClick }) => {

    const [showPanelDropdown, setShowPanelDropdown] = useState(false);
    const [showOrganDropdown, setShowOrganDropdown] = useState(false);

    const showPanel = () => {
        setShowPanelDropdown(true);
    };

    const hidePanel = () => {
        setShowPanelDropdown(false);
    };

    const showOrgan = () => {
        setShowOrganDropdown(true);
    };

    const hideOrgan = () => {
        setShowOrganDropdown(false);
    };

    // const togglePanelDropdown = () => {
    //     setShowPanelDropdown(!showPanelDropdown);
    // };

    // const toggleOrganDropdown = () => {
    //     setShowOrganDropdown(!showOrganDropdown);
    // };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" id="site-name">
                <img src="/images/newerlogo.png" alt="mlh logo" />
            </Link>
            <button
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
                        <a href=" " className="nav-link" onClick={onAboutClick}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href=" " className="nav-link" onClick={onTestClick}>Tests</a>
                    </li>
                    <li className="nav-item">
                        <NavDropdown
                            title="Panels"
                            id="nav-dropdown"
                            show={showPanelDropdown}
                            onMouseEnter={showPanel}
                            onMouseLeave={hidePanel}
                            // onClick={togglePanelDropdown}
                        >
                            <NavDropdown.Item>
                                <PanelList panelData={panelData} />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>

                    <li className="nav-item">
                        <NavDropdown
                            title="Organs"
                            id="nav-dropdown1"
                            show={showOrganDropdown}
                            onMouseEnter={showOrgan}
                            onMouseLeave={hideOrgan}
                            // onClick={toggleOrganDropdown}
                        >
                            <NavDropdown.Item>
                                <OrganList organData={organData} />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Menu;
