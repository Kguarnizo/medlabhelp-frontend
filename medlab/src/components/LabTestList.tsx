import React, { useState, useEffect} from "react";
import { AltNameData } from "./AltNameList";
import TestDetail, { LabTestData } from './TestDetail';
import axios from "axios";
import { kBaseURL } from "../App";


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
    const [selectedTest, setSelectedTest] = useState<LabTestData | null>(null);
    const [altNameData, setAltNameData] = useState<AltNameData[]>([]);

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
                setSelectedTest(labTest || null);
            })
            .catch((error) => {
            });
        };

    return (
        <>
            <div className="lab-test-item" onClick={testOnClick}>
            <p>
                <span id="test-name">{name}</span>
                <span id="test-alt-name">
                {" "}{altNameData.map((e) => e.name).join(" , ")}
                </span>
            </p>
            </div>
            <TestDetail
            selectedTest={selectedTest}
            altNameData={altNameData}
            show={show}
            setShow={setShow}
            />
        </>
        );
    };

export default LabTestList;