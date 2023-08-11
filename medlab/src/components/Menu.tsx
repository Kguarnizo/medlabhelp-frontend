import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import axios from 'axios';
import { LabTestData } from './TestDetail';

;

interface MenuProps {
    onAboutClick: () => void;
    onTestClick: () => void;
    handlePanelSelection: (panelID: number) => void;
    panelData: PanelData[],
    handleOrganSelection: (organID: number) => void;
    organData: OrganData[],
}



// const getAllPanels = () => {
//     return axios
//         .get<{ panels: PanelData[] }>(`${kBaseURL}/panels/`)
//         .then((res) => {
//         console.log(res);
//         return res.data.panels;
//         })
//         .catch((err) => {
//         console.log('Error fetching panels:', err);
//         return [];
//         });
//     };

//     const getAllOrgans = () => {
//         return axios
//             .get<{ organs: OrganData[] }>(`${kBaseURL}/organs/`)
//             .then((res) => {
//             console.log(res);
//             return res.data.organs;
//             })
//             .catch((err) => {
//             console.log('Error fetching organs:', err);
//             return [];
//             });
//         };

//         const getAllTests = () => {
//             return axios
//                 .get<{ tests: labTestData[] }>(`${kBaseURL}/tests/`)
//                 .then((res) => {
//                 console.log(res);
//                 return res.data.tests;
//                 })
//                 .catch((err) => {
//                 console.log('Error fetching tests:', err);
//                 return [];
//                 });
//             };

const Menu: React.FC<MenuProps> = ({ onAboutClick, handlePanelSelection, panelData ,handleOrganSelection, organData, onTestClick }) => {

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

    // useEffect(() => {
    //     getAllPanels().then((panels: React.SetStateAction<PanelData[]>) => {
    //         console.log('Fetched panels:', panels);
    //         setPanelData(panels);
    //     });

    //     getAllOrgans().then((organs: React.SetStateAction<OrganData[]>) => {
    //         console.log('Fetched organs:', organs);
    //         setOrganData(organs);
    //     });

    //     getAllTests().then((tests) => {
    //         console.log('Fetched tests:', tests);
    //         setlabTestData(tests);
    //         });
    // }, []);






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
        <li className="nav-item">
            <a href =" " className="nav-link" onClick={onTestClick}>Tests</a>
        </li>
        {/* PANAL****************************************** */}
    <li className="nav-item">
            <div className="nav-link dropdown-toggle" onClick={togglePanelVisibility}>
                Panels
            </div>
            {panelVisibility && (
                <div className="dropdown-item">
                    <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} setPanelVisibility={setPanelVisibility}/>
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