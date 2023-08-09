import React, { useEffect, useState }from 'react';
import PanelList, { PanelData } from '../components/PanelList';
import { kBaseURL } from '../App';
import axios from 'axios';

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

const PanelDetails: React.FC = () => {
    const [panelData, setPanelData] = useState<PanelData[]>([]);
    const [selectedPanel, setSelectedPanel] = useState<PanelData | null>(null);

    useEffect(() => {
        getAllPanels().then((panels) => {
            console.log('Fetched panels:', panels);
            setPanelData(panels);
        });
    }, []);

    const handlePanelSelection = (panelID: number) => {
        const panel = panelData.find((panel) => panel.id === panelID);
        setSelectedPanel(panel || null);
    };

    return(
        <div className="paneldetails">
            <h2>This is the PanelDetails page</h2>
            <div>
                <PanelList panelData={panelData} handlePanelSelection={handlePanelSelection} />
            </div>

        </div>
    )
}

export default PanelDetails;