import React from "react";
import Panel from "./Panel";

export interface PanelData {
    id: number;
    name: string;
    organ_id: number;
}

interface PanelListProps {
    panelData: PanelData[];
    handlePanelSelection: (panelID: number) => void;
}

const PanelList: React.FC<PanelListProps> = (props) => {
    const { panelData, handlePanelSelection } = props;

    if (panelData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <section>
        <ul>
            {panelData.map((panel) => (
            <Panel
                id={panel.id}
                name={panel.name}
                organ_id={panel.organ_id}
                key={panel.id}
                handlePanelSelection={handlePanelSelection}
            />
            ))}
        </ul>
        </section>
    );
};

export default PanelList;