import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PanelList, { PanelData } from './components/PanelList';
import OrganList, { OrganData } from './components/OrganList';
import TestDetail, { LabTestData } from './components/TestDetail';
import AltNameList, { AltNameData } from './components/AltNameList';
import Menu from './components/Menu';
import About from './pages/about';
import Home from './pages/home';
import PanelDetails from './pages/paneldetails';
import OrganDetails from './pages/organdetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LabTestList from './components/LabTestList';
// import Popup from 'react-popup';

const kBaseURL = 'https://medlab-help-api.onrender.com';
// export const kBaseURL = process.env.REACT_APP_BACKEND_URL;


const getAllPanels = () => {
  return axios
    .get<{ panels: PanelData[] }>(`${kBaseURL}/panels/`)
    .then((res) => {
      console.log(res);
      return res.data.panels;
    })
    .catch((err) => {
      console.log('Error fetching panels:', err);
      return [];
    });
};

const getAllTests = () => {
  return axios
    .get<{ tests: LabTestData[] }>(`${kBaseURL}/tests/`)
    .then((res) => {
      console.log(res);
      return res.data.tests;
    })
    .catch((err) => {
      console.log('Error fetching tests:', err);
      return [];
    });
};

const getAllOrgans = () => {
  return axios
    .get<{ organs: OrganData[] }>(`${kBaseURL}/organs/`)
    .then((res) => {
      console.log(res);
      return res.data.organs;
    })
    .catch((err) => {
      console.log('Error fetching organs:', err);
      return [];
    });
  };


const App: React.FC = () => {
  const [panelData, setPanelData] = useState<PanelData[]>([]);
  const [organData, setOrganData] = useState<OrganData[]>([]);
  const [selectedPanel, setSelectedPanel] = useState<PanelData | null>(null);
  const [labTestData, setlabTestData] = useState<LabTestData[]>([]);
  const [selectedTest, setSelectedTest] = useState<LabTestData | null>(null);
  const [selectedOrgan, setSelectedOrgan] = useState<OrganData | null>(null);
  const [relatedTests, setRelatedTests] = useState<LabTestData[]>([]);
  const [altNameData, setAltNameData] = useState<AltNameData[]>([]);
  // const [organRelatedTestDetails, setOrganRelatedTestDetails] = useState<labTestData | null>(null);

useEffect(() => {
  getAllPanels().then((panels) => {
    console.log('Fetched panels:', panels);
    setPanelData(panels);
  });

  getAllOrgans().then((organs) => {
    console.log('Fetched organs:', organs);
    setOrganData(organs);
  });

  getAllTests().then((tests) => {
    console.log('Fetched tests:', tests);
    setlabTestData(tests);
  });
}, []);


  const handlePanelSelection = (panelID: number) => {
    const panel = panelData.find((panel) => panel.id === panelID);
    console.log(panelID, panel, panelData)
    setSelectedPanel(panel || null);
  };
  const handleOrganSelection = (organID: number) => {
    const organ = organData.find((organ) => organ.id === organID);
    console.log(organID, organ, organData)
    setSelectedOrgan(organ || null);
  };

  // const filterTest = labTestData.filter((test) => test.panel_id === selectedPanel?.id);

  // const handleTestClick = (test: LabTestData) => {
  //   setSelectedTest(test);
  // };

  const handleOrganClick = (organ: OrganData) => {
    setSelectedOrgan(organ);

    axios
      .get<LabTestData[]>(`${kBaseURL}/organs/${organ.id}/tests/`)
      .then((res) => {
        console.log('tests related to organ:', res);
        setRelatedTests(res.data);
      })
      .catch((err) => {
        console.log('Error fetching related tests:', err);
        setRelatedTests([]);
      });
  };

  // const handleOrganRelatedTestClick = (test: labTestData) => {
  //   setOrganRelatedTestDetails(test);
  // };

  // const findLabTestById = (labTestID: number) => {
  //   return labTestData.find((labTest) => {return labTest.id === labTestID})
  // };

  // const handleLabTestSelection = (labTestID: number)=> {
  //   let labTest = findLabTestById(labTestID);
  //   setSelectedTest(labTest || null);
  //   getAltNamesToTests(labTestID).then((tests)=> {
  //     console.log(tests);
  //     setAltNameData(tests);
  //   });
  // };

  const navigate = useNavigate();



  return (
  <>
    <Menu
        onAboutClick={() => navigate('/about')}
        handlePanelSelection={handlePanelSelection}
        handleOrganSelection={handleOrganSelection}
        panelData={panelData}
        organData={organData}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/paneldetails/:id" element={<PanelDetails panelData={panelData} labTestData={labTestData}  />} />
        <Route path="/organdetails/:id" element={<OrganDetails organData={organData} labTestData={labTestData} />} />
      </Routes>
      </>
);
};



export default App;