import React from 'react';
import LabTestList from './LabTestList';
import { AltNameData } from "./AltNameList";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

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
    handleClose: () => void,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    }

const TestDetail: React.FC<TestDetailProps> = ({ selectedTest, altNameData, handleClose, show , setShow}) => {
    const closeModal = () => setShow(false);
    // const closeDetail = () => {
    //     console.log("CLOSE DETAILSSSSS!!!!!!")
    //     console.log(show);
    //     handleClose();
    //     console.log(show);
    // }

    return (
        <Modal show={show} onHide={handleClose}>
            {selectedTest && (
            <div id="test-detail">
                <Modal.Header>
                    <Modal.Title>{selectedTest.name} Test Details</Modal.Title>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
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