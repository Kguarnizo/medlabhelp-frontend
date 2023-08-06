import React from "react";
import Panel from "./Panel";
import { Link } from "react-router-dom";

export interface PanelData {
    id: number,
    name: string,
    organ_id: number,
}

interface PanelListProps {
    panelData: PanelData[],
    handlePanelSelection: (panelID: number) => void,
}

const PanelList: React.FC<PanelListProps> = ({ panelData, handlePanelSelection }) => {

    if (panelData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <section>
        <ul>
            {panelData.map((panel) => (
            <div><Panel
                id={panel.id}
                name={panel.name}
                organ_id={panel.organ_id}
                key={panel.id}
                handlePanelSelection={handlePanelSelection}
            />
            <Link to={`paneldetails/${panel.id}`}>{panel.name} </Link>
            </div>
            ))}
        </ul>
        </section>
    );
};

export default PanelList;