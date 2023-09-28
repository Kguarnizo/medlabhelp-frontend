import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';

interface MenuProps {
  onAboutClick: () => void;
  panelData: PanelData[];
  organData: OrganData[];
  onTestClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onAboutClick, panelData, organData, onTestClick }) => {
  const [showPanelDropdown, setShowPanelDropdown] = useState(false);
  const [showOrganDropdown, setShowOrganDropdown] = useState(false);
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);

  const navigate = useNavigate();

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

  const toggleNavbar = () => {
    setShowNavbarCollapse(!showNavbarCollapse);
  };

  const closeNavbar = () => {
    setShowNavbarCollapse(false);
  };

  const handleNavLinkClick = () => {
    closeNavbar();
  };

  return (
    <Navbar bg="light" expand="lg" className="menu-overlay">
      <Link to="/" className="navbar-brand" id="site-name">
        <img src="/images/newerlogo.png" alt="mlh logo" />
      </Link>
      <Navbar.Toggle
        aria-controls="navbarNavDropdown"
        onClick={toggleNavbar}
      />
      <Navbar.Collapse
        id="navbarNavDropdown"
        in={showNavbarCollapse}
      >
        <Nav className="ml-auto nav-wrapper">
          <Nav.Link className="nav-item">
            <Link
              to="/about"
              className="nav-link"
              onClick={() => {
                onAboutClick();
                handleNavLinkClick();
                navigate('/about');
              }}
            >
              About
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link
              to="/tests"
              className="nav-link"
              onClick={() => {
                onTestClick();
                handleNavLinkClick();
                navigate('/tests');
              }}
            >
              Tests
            </Link>
          </Nav.Link>
          <NavDropdown
            title="Panels"
            id="nav-dropdown"
            show={showPanelDropdown}
            onMouseEnter={showPanel}
            onMouseLeave={hidePanel}
            className="nav-item"
          >
            <NavDropdown.Item className="nav-dropdown-menu">
              <PanelList panelData={panelData} handleNavLinkClick={handleNavLinkClick}/>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Organs"
            id="nav-dropdown1"
            show={showOrganDropdown}
            onMouseEnter={showOrgan}
            onMouseLeave={hideOrgan}
            className="nav-item"
          >
            <NavDropdown.Item className="nav-dropdown-menu">
              <OrganList organData={organData} handleNavLinkClick={handleNavLinkClick}/>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;