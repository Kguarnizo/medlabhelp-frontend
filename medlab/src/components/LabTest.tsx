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
    const testOnClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, testID: number) => {
        // handleLabTestSelection(id);
        console.log(testID)

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
        <div>
            <p >{name}</p>
            <ul>
                {altNameData.map((altName, index) => (
                    <li onClick={(e) => testOnClick(e, altName.id)} key={index}>{altName.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default LabTest;

// need state to hold test details, have a component to display, clicking on test will call function and update to current details to show, have compnonent to show those details