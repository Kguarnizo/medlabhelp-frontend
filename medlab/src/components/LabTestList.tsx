import React, { useState, useEffect} from "react";
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

const LabTestList: React.FC<LabTestProps> = ({ id, name, description, info_url, normal_reference, unit_of_measure }) => {
    const kBaseURL = 'https://medlab-help-api.onrender.com';

    const [selectedTest, setSelectedTest] = useState<LabTestData | null>(null);
    const [altNameData, setAltNameData] = useState<AltNameData[]>([]);
    const [labTestData, setlabTestData] = useState<LabTestData | null>(null);
    // handles Modals
    const [show, setShow] = useState(false);

    const testOnClick = () => {
        handleLabTestSelection(id);
        setShow(() => true)
        };

    useEffect(() => {
        getAltNamesToTests(id).then((tests) => {
            setAltNameData(tests);
        });
    }, [id]);

    const getAltNamesToTests = (labTestID: number) => {
        return axios
        .get<AltNameData[]>(`${kBaseURL}/tests/${labTestID}/alternatenames/`)
        .then((res)=> {
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
            return res.data;
        })
        .catch((err) => {
            console.log("Error fetching test:", err);
            return null;
        })
        }

    const handleLabTestSelection = (labTestID: number) => {
        getTestByID(labTestID)
            .then((labTest) => {
                console.log("following is our labtest object!!!");
                console.dir(labTest);
                setSelectedTest(labTest || null);
            })
            .catch((error) => {
                console.error("An error occurred:", error);
            });
        };

    return (
        <><div onClick={testOnClick}>
            <p>{name} {(altNameData.map(e => e.name).join(' , '))}</p>
        </div><TestDetail selectedTest={selectedTest} altNameData={altNameData} show={show} setShow={setShow}/></>
    );
};

export default LabTestList;