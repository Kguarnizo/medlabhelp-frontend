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
    const panelLabTest = labTestData.filter((test) => test.panel_id === panel?.id).map((lab) => <LabTestList {...lab} />)

    return (
    <div className="paneldetails">
        {panel && panelLabTest && (
            <div>
                <h2>Name: {panel.name}</h2>
                {panelLabTest}
                {/* <p>Description: {panelLabTest.description}</p>
                <p>Learn More:
                <a href={panelLabTest.info_url} target="_blank" rel="noopener noreferrer">{panelLabTest.info_url}</a>
                </p>
                <p>Normal Reference: {panelLabTest.normal_reference}</p>
                <p>Unit of Measure: {panelLabTest.unit_of_measure}</p> */}
                {/* <p>Alternate Name: </p> */}
            </div>
            )}
    </div>
    );
};

export default PanelDetails;
