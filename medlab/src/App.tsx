import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PanelList, { PanelData } from './components/PanelList';
import OrganList, { OrganData } from './components/OrganList';
import LabTestList, { labTestData } from './components/LabTestList';

const kBaseURL = 'http://127.0.0.1:8000';

const App: React.FC = () => {
  const [panelData, setPanelData] = useState<PanelData[]>([]);
  const [organData, setOrganData] = useState<OrganData[]>([]);
  const [selectedPanel, setSelectedPanel] = useState<PanelData | null>(null);
  const [labTestData, setlabTestData] = useState<labTestData[]>([]);
  const [selectedTest, setSelectedTest] = useState<labTestData | null>(null);
  const [selectedOrgan, setSelectedOrgan] = useState<OrganData | null>(null);
  const [relatedTests, setRelatedTests] = useState<labTestData[]>([]);
  const [organRelatedTestDetails, setOrganRelatedTestDetails] = useState<labTestData | null>(null);

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

  const handlePanelSelection = (panelID: number) => {
    const panel = panelData.find((panel) => panel.id === panelID);
    setSelectedPanel(panel || null);
  };

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

  const handleOrganRelatedTestClick = (test: labTestData) => {
    setOrganRelatedTestDetails(test);
  };

  return (
    <section>
      <div>
        <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} />
      </div>
      <div>
        <OrganList organData={organData} onOrganClick={handleOrganClick} />
      </div>
      <div>
        <h2>{selectedPanel !== null ? selectedPanel.name : ''}</h2>
        <LabTestList testList={filterTest} onTestClick={handleTestClick} selectedTest={selectedTest} />
      </div>
      <div>
        {selectedOrgan && (
          <>
            <h2>Tests related to: {selectedOrgan.name}</h2>
            <LabTestList
              testList={relatedTests}
              onTestClick={handleOrganRelatedTestClick}
              selectedTest={organRelatedTestDetails}
            />
          </>
        )}
      </div>
      {selectedTest && (
        <div>
          <h2>Test Details</h2>
          <p>Name: {selectedTest.name}</p>
          <p>Description: {selectedTest.description}</p>
          <p>Info URL: {selectedTest.info_url}</p>
          <p>Normal Reference: {selectedTest.normal_reference}</p>
          <p>Unit of Measure: {selectedTest.unit_of_measure}</p>
        </div>
      )}
    </section>
  );
};

export default App;