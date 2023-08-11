import React from 'react';
import { useParams } from 'react-router-dom';
import { PanelData } from '../components/PanelList';
import LabTestList from '../components/LabTestList';
import {LabTestData } from '../components/TestDetail';


interface PanelDetailsProps {
    panelData: PanelData[],
    labTestData: LabTestData[]
}

const PanelDetails: React.FC<PanelDetailsProps> = ({panelData, labTestData }) => {
    let { id } = useParams();
    const panel = panelData.find((panel) => panel.id === Number(id));
    const panelLabTest = labTestData.filter((test) => test.panel_id === panel?.id).map((lab) => <LabTestList key={lab.id} {...lab} />)


    return (
    <div className="paneldetails">
        {panel && panelLabTest.length && (
            <div>
                <h2>Name: {panel.name}</h2>
                {panelLabTest}
            </div>
            )}
    </div>
    );
};

export default PanelDetails;
