import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PanelList, { PanelData } from './components/PanelList';
import OrganList, { OrganData } from './components/OrganList';


const kBaseURLPanels = 'http://127.0.0.1:8000/panels/';
const kBaseURLOrgans = 'http://127.0.0.1:8000/organs/';


const getAllPanels = () => {
  return axios
    .get<{panels:PanelData[]}>(kBaseURLPanels)
    .then((res) => {
      console.log(res);
      return res.data.panels.map(convertPanelFromAPI)
    })
    .catch((err) => {
      console.log("Error fetching panels:", err);
      return [];
    });
};

const convertPanelFromAPI = (panel: PanelData): { id: number; name: string; organID: number } => {
  return {
    id: panel.id,
    name: panel.name,
    organID: panel.organID,
  };
};

const getAllOrgans = () => {
  return axios
    .get<{organs:OrganData[]}>(kBaseURLOrgans)
    .then((res) => {
      console.log(res);
      return res.data.organs
    })
    .catch((err) => {
      console.log("Error fetching organs:", err);
      return [];
    });
};





const App: React.FC = () => {
  const [panelData, setPanelData] = useState<PanelData[]>([]);
  const [organData, setOrganData] = useState<OrganData[]>([]);


  useEffect(() => {
    getAllPanels().then((panels) => {
      console.log("Fetched panels:", panels);
      setPanelData(panels);

    getAllOrgans().then((organs) => {
      console.log("Fetched organs:", organs);
      setOrganData(organs);
    }
  )});
  }, []);

  console.log("panelData in App:", panelData);

  return (
    <section>
      <div>
        <PanelList panelData={panelData} />
      </div>
      <div>
        <OrganList organData={organData} />
      </div>
    </section>
  );
}

export default App;









