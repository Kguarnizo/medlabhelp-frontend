import React from "react";
import Organ from "./Organ";

export interface OrganData {
    id: number;
    name: string;
}

interface OrganListProps {
    organData: OrganData[];
    onOrganClick: (organ: OrganData) => void;
}

const OrganList: React.FC<OrganListProps> = (props) => {
    const { organData , onOrganClick} = props;

    if (organData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <section>
        <ul>
            {organData.map((organ) => (
                <li key={organ.id} onClick={() => onOrganClick(organ)}>
            <Organ
                id={organ.id}
                name={organ.name}
                key={organ.id}
            />
                </li>
            ))}
        </ul>
        </section>
    );
};

export default OrganList;