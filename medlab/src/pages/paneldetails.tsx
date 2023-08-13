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
    <div className="panel-details">
        {panel && panelLabTest.length && (
            <div className="panel-header">
                <h2 className='panel-name'>{panel.name}</h2>
            </div>
            )}
            {panelLabTest.length > 0 && (
                <ul className="lab-test-list">
                {panelLabTest.map((lab) => (
                    <li key={lab.key}>{lab}</li>
                ))}
                </ul>
            )}
    </div>
    );
};

export default PanelDetails;
