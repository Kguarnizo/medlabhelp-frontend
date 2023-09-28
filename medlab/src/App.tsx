import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { PanelData } from './components/PanelList';
import { OrganData } from './components/OrganList';
import { LabTestData } from './components/TestDetail';
import Menu from './components/Menu';
import About from './pages/about';
import Home from './pages/home';
import PanelDetails from './pages/paneldetails';
import OrganDetails from './pages/organdetails';
import { Route, Routes, useNavigate } from 'react-router-dom';
import TestList from './pages/TestList';

// export const kBaseURL = process.env.REACT_APP_BACKEND_URL;
export const kBaseURL = "http://localhost:8000";

const getAllPanels = () => {
  return axios
    .get<{ panels: PanelData[] }>(`${kBaseURL}/panels/`)
    .then((res) => {
      return res.data.panels;
    })
    .catch((err) => {
      return [];
    });
};

const getAllTests = () => {
  return axios
    .get<{ tests: LabTestData[] }>(`${kBaseURL}/tests/`)
    .then((res) => {
      return res.data.tests;
    })
    .catch((err) => {
      return [];
    });
};

const getAllOrgans = () => {
  return axios
    .get<{ organs: OrganData[] }>(`${kBaseURL}/organs/`)
    .then((res) => {
      return res.data.organs;
    })
    .catch((err) => {
      return [];
    });
  };


const App: React.FC = () => {
  const [panelData, setPanelData] = useState<PanelData[]>([]);
  const [organData, setOrganData] = useState<OrganData[]>([]);
  const [labTestData, setlabTestData] = useState<LabTestData[]>([]);


useEffect(() => {
  getAllPanels().then((panels) => {
    setPanelData(panels);
  });

  getAllOrgans().then((organs) => {
    setOrganData(organs);
  });

  getAllTests().then((tests) => {
    setlabTestData(tests);
  });
}, []);

  const navigate = useNavigate();

  return (
  <>
    <Menu
        onAboutClick={() => navigate('/about')}
        onTestClick={() => navigate('/tests')}
        panelData={panelData}
        organData={organData}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tests" element={<TestList labTestData={labTestData} />} />
        <Route path="/paneldetails/:id" element={<PanelDetails panelData={panelData} labTestData={labTestData} />} />
        <Route path="/organdetails/:id" element={<OrganDetails organData={organData} labTestData={labTestData} />} />
      </Routes>
      </>
);
};

export default App;