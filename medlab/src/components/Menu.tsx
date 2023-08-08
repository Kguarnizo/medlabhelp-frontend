import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PanelList, { PanelData } from './PanelList';
import OrganList, { OrganData } from './OrganList';
import axios from 'axios';
import { LabTestData } from './TestDetail';

;

interface MenuProps {
    onAboutClick: () => void;
    handlePanelSelection: (panelID: number) => void;
    panelData: PanelData[],

}
const kBaseURL = 'http://127.0.0.1:8000';


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

const Menu: React.FC<MenuProps> = ({ onAboutClick, handlePanelSelection, panelData }) => {
    const onPanelsClick = () => {setPanelVisibility(!panelVisibility)};
    
    const onOrgansClick = () => {setOrganVisibility(!organVisibility)};
    // const [panelData, setPanelData] = useState<PanelData[]>([]);
    const [organData, setOrganData] = useState<OrganData[]>([]);
    const [labTestData, setlabTestData] = useState<LabTestData[]>([]);
    const [panelVisibility, setPanelVisibility] = useState(false)
    const [organVisibility, setOrganVisibility] = useState(false)

    const togglePanelVisibility = () => setPanelVisibility(!panelVisibility);
    const toggleOrganVisibility = () => setOrganVisibility(!organVisibility);


    // function handlePanelSelection(panelID: number): void {
    //     throw new Error('Function not implemented.');
    // }

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
    //     <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //         <div className="container-fluid">
    //             <Link to="/" className="navbar-brand">MEDLAB HELP</Link>
    //             <button
    //                 className="navbar-toggler"
    //                 type="button"
    //                 data-bs-toggle="collapse"
    //                 data-bs-target="#navbarNavDropdown"
    //                 aria-controls="navbarNavDropdown"
    //                 aria-expanded="false"
    //                 aria-label="Toggle navigation"
    //             >
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>
    //             <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //                 <ul className="navbar-nav">
    //                     <li className="nav-item">
    //                         <button className="nav-link btn" onClick={onAboutClick}>
    //                             About
    //                         </button>
    //                     </li>
    //                     <li className="nav-item">
    //                         <div className="btn-group">
    //                             <button className="btn nav-link dropdown-toggle" onClick={togglePanelVisibility}>
    //                                 Panels
    //                             </button>
    //                             {panelVisibility && (
    //                                 <div className="col-md-4">
    //                                     <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} />
    //                                 </div>
    //                             )}
    //                         </div>
    //                     </li>
    //                     <li className="nav-item">
    //                         <div className="btn-group">
    //                             <button className="btn nav-link dropdown-toggle" onClick={toggleOrganVisibility}>
    //                                 Organs
    //                             </button>
    //                             {organVisibility && (
    //                                 <div className="col-md-4">
    //                                     <OrganList organData={organData} onOrganClick={handleOrganClick} />
    //                                 </div>
    //                             )}
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // );
// };

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">MEDLAB HELP</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        {/* <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li> */}
        <li className="nav-item">
            <a href =" " className="nav-link" onClick={onAboutClick}>About</a>
        </li>
        <li className="nav-item dropdown">
            <a href=" " className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Panels
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a href=" " className="dropdown-item" ><PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} /></a>
            {/* <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a> */}
            </div>
        </li>
        </ul>
    </div>
    </nav>

    )};


export default Menu;