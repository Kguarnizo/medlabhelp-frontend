import React from 'react';
import LabTest from './LabTest';

export interface labTestData {
    id: number,
    panel_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
}

interface LabTestListProps {
    testList: labTestData[];
    onTestClick: (test: labTestData) => void;
    selectedTest: labTestData | null;
    }

    const LabTestList: React.FC<LabTestListProps> = ({ testList, onTestClick, selectedTest }) => {
    if (!testList || testList.length === 0) {
        return null;
    }

    return (
        <section>
            <ul>
            {testList.map((test) => (
                <li key={test.id} onClick={() => onTestClick(test)}>
                <LabTest
                    key={test.id}
                    id={test.id}
                    panel_id={test.panel_id}
                    name={test.name}
                    description={test.description}
                    normal_reference={test.normal_reference}
                    info_url={test.info_url}
                    unit_of_measure={test.unit_of_measure}
                />
                </li>
            ))}
            </ul>

            {selectedTest && (
            <div>
                <h2>Test Details</h2>
                <p>Name: {selectedTest.name}</p>
                <p>Description: {selectedTest.description}</p>
                <p>Info URL: {selectedTest.info_url}</p>
                <p>Normal Reference: {selectedTest.normal_reference}</p>
                <p>Unit of Measure: {selectedTest.unit_of_measure}</p>
            </div>
            )}
        </section>
        );
    };

    export default LabTestList;