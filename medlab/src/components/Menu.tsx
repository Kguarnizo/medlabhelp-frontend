import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';

interface MenuProps {
  panelData: PanelData[];
  organData: OrganData[];
}

const Menu: React.FC<MenuProps> = ({  panelData, organData  }) => {
  const [showNavbarCollapse, setShowNavbarCollapse] = useState(false);

  const closeNavBar = () => {
    setShowNavbarCollapse(false);
  };

  return (
    <nav className="navbar navbar-expand-md">
      <Link 
        to="/" 
        className="navbar-brand"
        onClick={() => {
          closeNavBar();
        }}
      >
        <img className="logo horizontal-logo logo-image" src="/images/newerlogo.png" alt="mlh logo" />
      </Link>
      <button
        className={`navbar-toggler ${showNavbarCollapse ? "collapsed" : ""}`}
        type="button"
        aria-controls="navbarSupportedContent"
        aria-expanded={showNavbarCollapse}
        aria-label="Toggle navigation"
        onClick={() => setShowNavbarCollapse(!showNavbarCollapse)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${showNavbarCollapse ? "show" : ""}`} id="navbarSupportedContent">
        <ul className="navbar-nav custom-navbar">
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                onClick={() => {
                closeNavBar();
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/tests"
                className="nav-link"
                onClick={() => {
                closeNavBar();
                }}
              >
                Tests
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link 
                to="#" 
                className="nav-link dropdown-toggle" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                Panels
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <Link to="#" className="dropdown-item">
                  <PanelList panelData={panelData} closeNavBar={closeNavBar}/>
                </Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link 
                to="#" 
                className="nav-link dropdown-toggle" 
                id="navbarDropdownMenuLink" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
              >
                Organs
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <Link to="#" className="dropdown-item">
                  <OrganList organData={organData} closeNavBar={closeNavBar}/>
                </Link>
              </div>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Menu;