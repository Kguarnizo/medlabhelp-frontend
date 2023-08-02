import React from "react";

interface PanelProps {
    id: number;
    name: string;
    organID: number;
}

const Panel: React.FC<PanelProps> = ({ id, name, organID }) => {
    return (
        <ul>
            <li>{name}</li>
        </ul>
);
};

export default Panel;
