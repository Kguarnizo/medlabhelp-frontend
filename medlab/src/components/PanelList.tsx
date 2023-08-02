import React from "react";
import Panel from "./Panel";

export interface PanelData {
    id: number;
    name: string;
    organID: number;
}

interface PanelListProps {
    panelData: PanelData[];
}

const PanelList: React.FC<PanelListProps> = (props) => {
    const { panelData } = props;

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
                organID={panel.organID}
                key={panel.id}
            />
            ))}
        </ul>
        </section>
    );
};

export default PanelList;