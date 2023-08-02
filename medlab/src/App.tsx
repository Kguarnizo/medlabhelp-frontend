import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PanelList, { PanelData } from './components/PanelList';

const kBaseURLPanels = 'http://127.0.0.1:8000/panels/';

const getAllPanels = () => {
  return axios
    .get<PanelData> (kBaseURLPanels)
    .then((res) => {
      console.log(res)
      return res.data.panels.map(convertPanelFromAPI)
    })
    .catch((err) => {
      console.log("Error fetching panels:", err);
      return [];
    });
};

const convertPanelFromAPI = (apiPanel: { id: number; name: string; organ_id: number; }) => {
  const { id, name, organ_id } = apiPanel;
  const newPanel = { id, name, organID: organ_id };
  return newPanel;
};

const App: React.FC = () => {
  const [panelData, setPanelData] = useState<PanelData[]>([]);

  useEffect(() => {
    getAllPanels().then((panels) => {
      console.log("Fetched panels:", panels);
      setPanelData(panels);
    });
  }, []);

  console.log("panelData in App:", panelData);

  return (
    <div>
      <PanelList panelData={panelData} />
    </div>
  );
}

export default App;