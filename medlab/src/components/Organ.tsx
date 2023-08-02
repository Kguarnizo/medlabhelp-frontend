import React from "react";

interface OrganProps {
    id: number;
    name: string;
}

const Organ: React.FC<OrganProps> = ({ id, name}) => {
    return (
        <ul>
            <li>{name}</li>
        </ul>
);
};

export default Organ;
