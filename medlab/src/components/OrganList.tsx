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

const OrganList: React.FC<OrganListProps> = ({ organData, onOrganClick }) => {
    if (organData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <section>
            <ul>
                {organData.map((organ) => (
                    <Organ
                        key={organ.id}
                        id={organ.id}
                        name={organ.name}
                        onClick={() => onOrganClick(organ)}
                    />
                ))}
            </ul>
        </section>
    );
};

export default OrganList;