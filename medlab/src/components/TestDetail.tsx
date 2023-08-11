import React from 'react';

import { AltNameData } from "./AltNameList";
import Modal from "react-bootstrap/Modal";

export interface LabTestData {
    id: number,
    panel_id: number,
    organ_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
}

interface TestDetailProps {
    selectedTest: LabTestData | null,
    altNameData: AltNameData[],
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    }

const TestDetail: React.FC<TestDetailProps> = ({ selectedTest, altNameData, show , setShow}) => {
    const closeModal = () => {
        setShow(() => false)
    };

    return (
        <Modal show={show} onHide={closeModal}>
            {selectedTest && (
            <div id="test-detail">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedTest.name} Test Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Description: {selectedTest.description}</p>
                    <p>Learn More:
                    <a href={selectedTest.info_url} target="_blank" rel="noopener noreferrer">{selectedTest.info_url}</a>
                    </p>
                    <p>Normal Reference: {selectedTest.normal_reference}</p>
                    <p>Unit of Measure: {selectedTest.unit_of_measure}</p>
                    <p>Alternate Name: </p>
                    <ul>
                        {altNameData.map((altName)=> (
                            <li key={altName.id}>{altName.name}</li>
                        ))}
                    </ul>
                </Modal.Body>
            </div>
            )}
        </Modal>
        );
    };

    export default TestDetail;
