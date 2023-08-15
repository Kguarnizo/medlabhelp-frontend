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
                    <Modal.Title><span id='test-detail-color'>{selectedTest.name} Test Details</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Description:</strong> {selectedTest.description}</p>
                    <p><strong>Normal Reference:</strong> {selectedTest.normal_reference}</p>
                    <p><strong>Unit of Measure:</strong> {selectedTest.unit_of_measure}</p>
                    <p><strong>Alternate Name: </strong></p>
                    <ul>
                        {altNameData.map((altName)=> (
                            <li key={altName.id}>{altName.name}</li>
                        ))}
                    </ul>
                    <a href={selectedTest.info_url} target="_blank" rel="noopener noreferrer">Learn more
                    </a>
                    <div>
                        <img className="name-detail-logo" src="../images/test-detail-logo.png" alt="mlh logo" />
                    </div>

                </Modal.Body>
            </div>
            )}
        </Modal>
        );
    };

export default TestDetail;