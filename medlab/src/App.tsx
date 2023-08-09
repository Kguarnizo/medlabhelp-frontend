import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PanelList, { PanelData } from './components/PanelList';
import OrganList, { OrganData } from './components/OrganList';
import LabTestList, { labTestData } from './components/LabTestList';
import AltNameList, {AltNameData} from './components/AltNameList';

import About from './pages/about';
import Home from './pages/home';
import PanelDetails from './pages/paneldetails';
import OrganDetails from './pages/organdetails';
import { Route, Routes } from 'react-router-dom';

export const kBaseURL = process.env.REACT_APP_BACKEND_URL;

// const getAllPanels = () => {
//   return axios
//     .get<{ panels: PanelData[] }>(`${kBaseURL}/panels/`)
//     .then((res) => {
//       console.log(res);
//       return res.data.panels;
//     })
//     .catch((err) => {
//       console.log('Error fetching panels:', err);
//       return [];
//     });
// };

const getAllTests = () => {
  return axios
    .get<{ tests: labTestData[] }>(`${kBaseURL}/tests/`)
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

const getAltNamesToTests = (labTestID: number) => {
  return axios
  .get<AltNameData[]>(`${kBaseURL}/tests/${labTestID}/alternatenames/`)
  .then((res)=> {
    console.log(res);
    return res.data;
  })
  .catch((err) => {
    console.log("Error fetching tests:", err);
    return [];
  })
}

const App: React.FC = () => {
  // const [panelData, setPanelData] = useState<PanelData[]>([]);
  const [organData, setOrganData] = useState<OrganData[]>([]);
  const [selectedPanel, setSelectedPanel] = useState<PanelData | null>(null);
  const [labTestData, setlabTestData] = useState<labTestData[]>([]);
  const [selectedTest, setSelectedTest] = useState<labTestData | null>(null);
  const [selectedOrgan, setSelectedOrgan] = useState<OrganData | null>(null);
  const [relatedTests, setRelatedTests] = useState<labTestData[]>([]);
  const [altNameData, setAltNameData] = useState<AltNameData[]>([]);

useEffect(() => {
  // getAllPanels().then((panels) => {
  //   console.log('Fetched panels:', panels);
  //   setPanelData(panels);
  // });

  getAllOrgans().then((organs) => {
    console.log('Fetched organs:', organs);
    setOrganData(organs);
  });

  getAllTests().then((tests) => {
    console.log('Fetched tests:', tests);
    setlabTestData(tests);
  });
}, []);


  // const handlePanelSelection = (panelID: number) => {
  //   const panel = panelData.find((panel) => panel.id === panelID);
  //   setSelectedPanel(panel || null);
  // };

  const filterTest = labTestData.filter((test) => test.panel_id === selectedPanel?.id);

  const handleTestClick = (test: labTestData) => {
    setSelectedTest(test);
  };

  const handleOrganClick = (organ: OrganData) => {
    setSelectedOrgan(organ);

    axios
      .get<labTestData[]>(`${kBaseURL}/organs/${organ.id}/tests/`)
      .then((res) => {
        console.log('tests related to organ:', res);
        setRelatedTests(res.data);
      })
      .catch((err) => {
        console.log('Error fetching related tests:', err);
        setRelatedTests([]);
      });
  };

  const findLabTestById = (labTestID: number) => {
    return labTestData.find((labTest) => {return labTest.id === labTestID})
  };

  const handleLabTestSelection = (labTestID: number)=> {
    let labTest = findLabTestById(labTestID);
    setSelectedTest(labTest || null);
    getAltNamesToTests(labTestID).then((tests)=> {
      console.log(tests);
      setAltNameData(tests);
    });
  };

  return (
  <>
    <Routes>
      <Route index element={<Home />} />
      <Route element={<About />} path='about' />
      <Route element={<PanelDetails/>} path='paneldetails' />
      <Route element={<OrganDetails organData={[]} onOrganClick={function (organ: OrganData): void {
          throw new Error('Function not implemented.');
        } }/>} path='organdetails' />
    </Routes>

    <section>
      {/* <div>
        <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} />

      </div> */}
      {/* <div>
        <OrganList organData={organData} onOrganClick={handleOrganClick}/>
      </div> */}

      <div>
        <h2>{selectedPanel !== null ? selectedPanel.name : ''}</h2>
        <LabTestList testList={filterTest} onTestClick={handleTestClick} selectedTest={selectedTest} handleLabTestSelection={handleLabTestSelection} getAltNamesToTests={getAltNamesToTests} />
      </div>

      <div>
        <h2>{selectedOrgan !== null ? selectedOrgan.name : ''}</h2>
        <LabTestList testList={relatedTests} onTestClick={handleTestClick} selectedTest={selectedTest} handleLabTestSelection={handleLabTestSelection} getAltNamesToTests={getAltNamesToTests}/>
      </div>

      <div>
        <AltNameList altNameData={altNameData}/>
      </div>
    </section>
</>
  );
};


export default App;