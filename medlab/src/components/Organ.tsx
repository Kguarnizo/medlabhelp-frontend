import React from "react";

interface OrganProps {
    id: number;
    name: string;
    onClick: () => void;
}

const Organ: React.FC<OrganProps> = ({ id, name, onClick}) => {
    return (
        <ul onClick={onClick}>
            <li>{name}</li>
        </ul>
);
};

export default Organ;
