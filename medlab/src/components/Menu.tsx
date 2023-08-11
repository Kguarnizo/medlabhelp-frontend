import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface MenuProps {
    onAboutClick: () => void;
    panelData: PanelData[];
    organData: OrganData[];
}

const Menu: React.FC<MenuProps> = ({ onAboutClick, panelData, organData }) => {

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
                    
                    <li className="nav-item">
                        <NavDropdown
                            title="Panels"
                            id="nav-dropdown"
                            show={showPanelDropdown}
                            onMouseEnter={showPanel}
                            onMouseLeave={hidePanel}
                            onClick={togglePanelDropdown}
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
                            onClick={toggleOrganDropdown}
                        >
                            <NavDropdown.Item>
                                <OrganList organData={organData} />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </li>
                </ul>
            </Nav>
        </nav>
    );
};

export default Menu;











// import React, { useEffect, useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import PanelList, { PanelData } from './PanelList';
// import OrganList, { OrganData } from './OrganList';
// import axios from 'axios';
// import { LabTestData } from './TestDetail';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// interface MenuProps {
//     onAboutClick: () => void;
//     handlePanelSelection: (panelID: number) => void;
//     panelData: PanelData[],
//     handleOrganSelection: (organID: number) => void;
//     organData: OrganData[],
// }

// const Menu: React.FC<MenuProps> = ({ onAboutClick, handlePanelSelection, panelData ,handleOrganSelection, organData }) => {

    // const onOrgansClick = () => {setOrganVisibility(!organVisibility)};

    // const [organData, setOrganData] = useState<OrganData[]>([]);
    // const [labTestData, setlabTestData] = useState<LabTestData[]>([]);
    // const [panelVisibility, setPanelVisibility] = useState(false)
    // const [organVisibility, setOrganVisibility] = useState(false)

    // const togglePanelVisibility = () => {
    //     setPanelVisibility(!panelVisibility)};
    // const toggleOrganVisibility = () => setOrganVisibility(!organVisibility);

    // function handleOrganClick(organ: OrganData): void {
    //     throw new Error('Function not implemented.');
    // }

    // const [show, setShow] = useState(false);
    // const showDropdown = ()=>{
    //     setShow(!show);
    // }
    // const hideDropdown = () => {
    //     setShow(false);
    // }


    // return (

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <Link to="/" className="navbar-brand" id="site-name"><img src="/images/newerlogo.png" alt="mlh logo"/></Link>
    // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    // </button>
    {/* <Nav className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item">
            <a href =" " className="nav-link" onClick={onAboutClick}>About</a>
        </li> */}
        {/* PANAL****************************************** */}
        {/* <li className="nav-item">

            <NavDropdown title="Panels" id="nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                        <NavDropdown.Item>
                            <PanelList panelData={panelData}/>
                        </NavDropdown.Item>
            </NavDropdown>
        </li> */}
        {/* ORGAN****************************************** */}
        {/* <li className="nav-item"><NavDropdown title="Organs" id="nav-dropdown1" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavDropdown.Item>
                <OrganList organData={organData}/>

                </NavDropdown.Item>
            </NavDropdown>
        </li>


    </ul>
    </Nav>
    </nav>

    )};


export default Menu; */}


