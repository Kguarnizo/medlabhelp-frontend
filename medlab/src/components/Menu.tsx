import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import axios from 'axios';
import { LabTestData } from './TestDetail';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { redirect } from "react-router-dom";

interface MenuProps {
    onAboutClick: () => void;
    onTestClick: () => void;
    handlePanelSelection: (panelID: number) => void;
    panelData: PanelData[];
    handleOrganSelection: (organID: number) => void;
    organData: OrganData[];
}

const Menu: React.FC<MenuProps> = ({ onAboutClick, onTestClick, handlePanelSelection, panelData, handleOrganSelection, organData }) => {

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

    const togglePanelDropdown = () => {
        setShowPanelDropdown(!showPanelDropdown);
    };

    const toggleOrganDropdown = () => {
        setShowOrganDropdown(!showOrganDropdown);
    };

    const [inputText, setInputText] = useState<string>('');

    const onChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const newValue = e.currentTarget.value;
            setInputText(newValue);
            e.preventDefault();
            return redirect(`/tests?q=${newValue}`);
        }

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" id="site-name">
                <img src="/images/newerlogo.png" alt="mlh logo" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <Nav className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href=" " className="nav-link" onClick={onAboutClick}>
                            About
                        </a>
                    </li>
                    <form>
                    <input type="text" id="search" placeholder="Search..." onKeyDown={onChange}/>
                    <li className="nav-item">
                        <a href =" " className="nav-link" onClick={onTestClick}>
                            Tests</a>
                        </li>
                    </form>

                    <li className="nav-item">
                        <NavDropdown
                            title="Panels"
                            id="nav-dropdown"
                            show={showPanelDropdown}
                            onMouseEnter={showPanel}
                            onMouseLeave={hidePanel}
                            // onClick={togglePanelDropdown}
                            className="menu-dropdown"
                        >
                            <NavDropdown.Item>
                                <PanelList panelData={panelData} handlePanelSelection={function (panelID: number): void {
                                    throw new Error('Function not implemented.');
                                } } setPanelVisibility={function (value: React.SetStateAction<boolean>): void {
                                    throw new Error('Function not implemented.');
                                } } />
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
                            className="menu-dropdown"
                        >
                            <NavDropdown.Item>
                                <OrganList organData={organData} handleOrganSelection={function (organID: number): void {
                                    throw new Error('Function not implemented.');
                                } } />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>
            </Nav>
        </nav>
    );
};

export default Menu;