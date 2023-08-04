import React from "react";

interface PanelProps {
    id: number;
    name: string;
    organ_id: number;
    handlePanelSelection: (panel_id: number) => void;
}


const Panel: React.FC<PanelProps> = ({ id, name, organ_id, handlePanelSelection }) => {
    const panelOnClick = () => {
        handlePanelSelection(id);
    };

    return (
        <ul onClick={panelOnClick}>
            <li>{name}</li>
        </ul>
);
};

export default Panel;
