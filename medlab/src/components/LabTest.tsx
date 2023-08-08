import React, { useState, useEffect } from "react";
import { AltNameData } from "./AltNameList";
import TestDetail, { LabTestData } from './TestDetail';
import axios from "axios";


export interface LabTestProps {
    id: number,
    panel_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
    getAltNamesToTests?: (labTestID: number) => Promise<never[] | AltNameData[]>,
}   

const LabTest: React.FC<LabTestProps> = ({ id, name, description, info_url, normal_reference, unit_of_measure }) => {
    const kBaseURL = 'http://127.0.0.1:8000';

    const [selectedTest, setSelectedTest] = useState<LabTestData | null>(null);
    const [altNameData, setAltNameData] = useState<AltNameData[]>([]);
    const [labTestData, setlabTestData] = useState<LabTestData | null>(null);
    
    const testOnClick = () => handleLabTestSelection(id);

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

        const getTestByID = (labTestID: number) => {
            return axios
            .get<LabTestData>(`${kBaseURL}/tests/${labTestID}`)
            .then((res)=> {
                console.log(res);
                return res.data;
            })
            .catch((err) => {
                console.log("Error fetching test:", err);
                return null;
            })
            }
        
        const handleLabTestSelection = async (labTestID: number)=> {
            let labTest = await getTestByID(labTestID);
            console.log("following is our labtest object!!!")
            console.dir(labTest);
            setSelectedTest(labTest || null);
            getAltNamesToTests(labTestID).then((tests)=> {
                console.log(tests);
                setAltNameData(tests);
            });
        };

    return (
        <div onClick={testOnClick}>
            <p>{name} (Alternate Names: {altNameData.map(e => e.name).join(' , ')})</p>
        
            <TestDetail selectedTest={selectedTest}/>
        </div>
    );
};

export default LabTest;

