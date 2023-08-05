import React from "react";

interface OrganProps {
    id: number,
    name: string,
    onClick: () => void,
}

const Organ: React.FC<OrganProps> = ({ id, name, onClick}) => {
    return (
        <li onClick={onClick}>
            {name}
        </li>
);
};

export default Organ;
