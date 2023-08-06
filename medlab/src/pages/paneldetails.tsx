import React from 'react';
import { useParams } from 'react-router-dom';
import { PanelData } from '../components/PanelList';
import LabTest from '../components/LabTest';
import {LabTestData } from '../components/LabTestList';
import { LabTestProps } from '../components/LabTest';


interface PanelDetailsProps {
    panelData: PanelData[],
    labTestData: LabTestData[]
}

const PanelDetails: React.FC<PanelDetailsProps> = ({panelData, labTestData }) => {
    let { id } = useParams();
    console.log(id)
    const panel = panelData.find((panel) => panel.id === Number(id));
    const panelLabTest = labTestData.filter((test) => test.panel_id === panel?.id).map((test) => <LabTest {...test} />)

    return (
    <div className="paneldetails">
        <h2>This is the PanelDetails page</h2>
        {panel && panelLabTest && (
            <div>
                <h2>Test Details</h2>
                <p>Name: {panel.name}</p>
                {panelLabTest}
                {/* <p>Description: {panelLabTest.description}</p>
                <p>Learn More:
                <a href={panelLabTest.info_url} target="_blank" rel="noopener noreferrer">{panelLabTest.info_url}</a>
                </p>                
                <p>Normal Reference: {panelLabTest.normal_reference}</p>
                <p>Unit of Measure: {panelLabTest.unit_of_measure}</p> */}
                <p>Alternate Name: </p>
            </div>
            )}
    </div>
    );
};

export default PanelDetails;
