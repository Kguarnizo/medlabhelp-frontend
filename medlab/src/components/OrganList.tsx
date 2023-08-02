import React from "react";
import Organ from "./Organ";

export interface OrganData {
    id: number;
    name: string;
}

interface OrganListProps {
    organData: OrganData[];
}

const OrganList: React.FC<OrganListProps> = (props) => {
    const { organData } = props;

    if (organData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <section>
        <ul>
            {organData.map((organ) => (
            <Organ
                id={organ.id}
                name={organ.name}
                key={organ.id}
            />
            ))}
        </ul>
        </section>
    );
};

export default OrganList;