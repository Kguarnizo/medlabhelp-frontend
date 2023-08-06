import React from 'react';
import LabTest from './LabTest';
import { AltNameData } from "./AltNameList";

export interface LabTestData {
    id: number,
    panel_id: number,
    name: string,
    description: string,
    info_url: string,
    normal_reference: string,
    unit_of_measure: string,
}

interface LabTestListProps {
    testList: LabTestData[],
    onTestClick: (test: LabTestData) => void,
    selectedTest: LabTestData | null,
    handleLabTestSelection: (labTestID: number) => void,
    getAltNamesToTests: (labTestID: number) => Promise<never[] | AltNameData[]>,
    }

    const LabTestList: React.FC<LabTestListProps> = ({ testList, onTestClick, selectedTest, handleLabTestSelection, getAltNamesToTests }) => {
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
                    // handleLabTestSelection={handleLabTestSelection}
                    getAltNamesToTests={getAltNamesToTests}
                />
                </li>
            ))}
            </ul>

            {selectedTest && (
            <div>
                <h2>Test Details</h2>
                <p>Name: {selectedTest.name}</p>
                <p>Description: {selectedTest.description}</p>
                <p>Learn More:
                <a href={selectedTest.info_url} target="_blank" rel="noopener noreferrer">{selectedTest.info_url}</a>
                </p>                
                <p>Normal Reference: {selectedTest.normal_reference}</p>
                <p>Unit of Measure: {selectedTest.unit_of_measure}</p>
                <p>Alternate Name: </p>
            </div>
            )}
        </section>
        );
    };

    export default LabTestList;


