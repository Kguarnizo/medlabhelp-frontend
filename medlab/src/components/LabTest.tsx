import React, { useState, useEffect } from "react";
import { AltNameData } from "./AltNameList";
import axios from "axios";

export interface LabTestProps {
    id: number,
    panel_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
    // handleLabTestSelection?: (labTestID: number) => void,
    getAltNamesToTests?: (labTestID: number) => Promise<never[] | AltNameData[]>,
}
const kBaseURL = 'http://127.0.0.1:8000';


const getAltNamesToTests = (labTestID: number) => {
    return axios
    .get<AltNameData[]>(`${kBaseURL}/tests/${labTestID}/alternatenames/`)
    .then((res)=> {
        console.log(res);
        return res.data;
    })
    .catch((err) => {
        console.log("Error fetching tests:", err);
        return [];
    })
    }


const LabTest: React.FC<LabTestProps> = ({ id, name, description, info_url, normal_reference, unit_of_measure }) => {
    const testOnClick = () => {
        // handleLabTestSelection(id);
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