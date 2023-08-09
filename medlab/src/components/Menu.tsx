import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import axios from 'axios';
import { LabTestData } from './TestDetail';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface MenuProps {
    onAboutClick: () => void;
    handlePanelSelection: (panelID: number) => void;
    panelData: PanelData[],
    handleOrganSelection: (organID: number) => void;
    organData: OrganData[],
}


const Menu: React.FC<MenuProps> = ({ onAboutClick, handlePanelSelection, panelData ,handleOrganSelection, organData }) => {

    const onOrgansClick = () => {setOrganVisibility(!organVisibility)};

    // const [organData, setOrganData] = useState<OrganData[]>([]);
    const [labTestData, setlabTestData] = useState<LabTestData[]>([]);
    const [panelVisibility, setPanelVisibility] = useState(false)
    const [organVisibility, setOrganVisibility] = useState(false)

    const togglePanelVisibility = () => {
        setPanelVisibility(!panelVisibility)};
    const toggleOrganVisibility = () => setOrganVisibility(!organVisibility);

    function handleOrganClick(organ: OrganData): void {
        throw new Error('Function not implemented.');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand" id="site-name">MEDLAB HELP</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a href =" " className="nav-link" onClick={onAboutClick}>About</a>
            </li>
            {/* PANAL****************************************** */}
        <li className="nav-item">
                <div className="nav-link dropdown-toggle" onClick={togglePanelVisibility}>
                    Panels
                </div>
                {panelVisibility && (
                    <div className="dropdown-item">
                        <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} />
                    </div>
                )}
        </li>
            {/* ORGAN****************************************** */}
        <li className="nav-item">
                <div className="nav-link dropdown-toggle" onClick={toggleOrganVisibility}>
                    Organs
                </div>
                {organVisibility && (
                    <div className="dropdown-item">
                        <OrganList organData={organData} handleOrganSelection={handleOrganSelection} />
                    </div>
                )}
        </li>
            </ul>
        </div>
        </nav>
)};

export default Menu;


// function Menu() {
//     return (
//       <Navbar expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home">Home</Nav.Link>
//               <Nav.Link href="#link">Link</Nav.Link>
//               <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     );
//   }
  
//   export default Menu;