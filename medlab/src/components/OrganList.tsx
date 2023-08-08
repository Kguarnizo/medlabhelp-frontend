import React from "react";
import Organ from "./Organ";
import { Link } from "react-router-dom";

export interface OrganData {
    id: number,
    name: string,
}

interface OrganListProps {
    organData: OrganData[],
    handleOrganSelection: (organID: number) => void,
}

const OrganList: React.FC<OrganListProps> = ({ organData, handleOrganSelection }) => {
    if (organData.length === 0) {
        return <div>No data available.</div>;
    }

    return (
        <section className="col-md-4">
            <ul>
                {organData.map((organ) => (
                    <div>
                    <Organ
                        key={organ.id}
                        id={organ.id}
                        name={organ.name}
                        handleOrganSelection={handleOrganSelection}
                    />
                <Link to={`organdetails/${organ.id}`}>{organ.name} </Link>
                </div>
                ))}
            </ul>
        </section>
    );
};

export default OrganList;