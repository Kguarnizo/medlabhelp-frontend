import React, { useState, useEffect } from "react";
import { AltNameData } from "./AltNameList";

export interface LabTestProps {
    id: number,
    panel_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
    handleLabTestSelection: (labTestID: number) => void,
    getAltNamesToTests: (labTestID: number) => Promise<never[] | AltNameData[]>,
}


const LabTest: React.FC<LabTestProps> = ({ id, name, description, info_url, normal_reference, unit_of_measure, handleLabTestSelection, getAltNamesToTests }) => {
    const testOnClick = () => {
        handleLabTestSelection(id);
    };


    const [altNameData, setAltNameData] = useState<AltNameData[]>([]);

    useEffect(() => {
        getAltNamesToTests(id)
            .then((altNames) => {
                setAltNameData(altNames);
            })
            .catch((error) => {
                console.error("Error fetching alternate names:", error);
            });
    }, [id, getAltNamesToTests]);

    return (
        <div onClick={testOnClick}>
            <p >{name}</p>
            <ul>
                {altNameData.map((altName, index) => (
                    <li key={index}>{altName.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default LabTest;