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
  const [labTestData, setlabTestData] = useState<labTestData[]>([])

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
      .get<{tests: labTestData[] }>(`${kBaseURL}/tests`)
      .then((res) => {
        console.log(res);
        return res.data.tests;
      })
      .catch((err) => {
        console.log('Error fetching tests:', err);
        return [];
      });
  }

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

  return (
    <section>
      <div>
        <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} />

      </div>
      <div>
        <OrganList organData={organData} />
      </div>
      <div>
        {selectedPanel && (
          <>
            <h2>Tests for: {selectedPanel.name}</h2>

            <LabTestList testList={filterTest} />
          </>
        )}
      </div>
    </section>
  );
};

export default App;