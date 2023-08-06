import React from 'react';
import { useParams } from 'react-router-dom';
import { PanelData } from '../components/PanelList';

interface PanelDetailsProps {
    panelData: PanelData[],
}

const PanelDetails: React.FC<PanelDetailsProps> = ({panelData}) => {
    let { id } = useParams();
    console.log(id)
    const panel = panelData.find((panel) => panel.id === Number(id));
    return (
    <div className="paneldetails">
        <h2>This is the PanelDetails page</h2>
        {panel && (
            <div>
                <h2>Test Details</h2>
                <p>Name: {panel.name}</p>
                {/* <p>Description: {panel.description}</p>
                <p>Learn More:
                <a href={panel.info_url} target="_blank" rel="noopener noreferrer">{panel.info_url}</a>
                </p>                
                <p>Normal Reference: {panel.normal_reference}</p>
                <p>Unit of Measure: {panel.unit_of_measure}</p> */}
                <p>Alternate Name: </p>
            </div>
            )}
    </div>
    );
};

export default PanelDetails;
