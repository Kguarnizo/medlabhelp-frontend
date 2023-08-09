import React from "react";

interface OrganProps {
    id: number,
    name: string,
    handleOrganSelection: (organ_id: number) => void,
}

const Organ: React.FC<OrganProps> = ({ id, name, handleOrganSelection}) => {
    const organOnClick = () => {
        handleOrganSelection(id);
    };

    return ( <></>
            // <li onClick={panelOnClick}>
            // {name}
            // </li>
);
};


export default Organ;