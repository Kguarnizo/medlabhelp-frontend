import React from "react";

export interface LabTestProps {
    id: number,
    panel_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
}


const LabTest: React.FC<LabTestProps> = ({ name, description, info_url, normal_reference, unit_of_measure }) => {
    return (
        <div>
        <p>{name}</p>
        {/* <p>Description: {description}</p>
        <p>Info URL: {info_url}</p>
        <p>Normal Reference: {normal_reference}</p>
        <p>Unit of Measure: {unit_of_measure}</p> */}
        </div>
    );
};

export default LabTest;