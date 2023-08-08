import React from 'react';
import { useParams } from 'react-router-dom';
import { OrganData } from '../components/OrganList';
import LabTest from '../components/LabTest';
import {LabTestData } from '../components/LabTestList';
import { LabTestProps } from '../components/LabTest';


interface OrganDetailsProps {
    organData: OrganData[],
    labTestData: LabTestData[]
}

const OrganDetails: React.FC<OrganDetailsProps> = ({organData, labTestData }) => {
    let { id } = useParams();
    console.log(id)
    const organ = organData.find((organ) => organ.id === Number(id));
    const organLabTest = labTestData.filter((test) => test.organ_id === organ?.id).map((test) => <LabTest {...test} />)

    return (
    <div className="organdetails">
        <h2>This is the OrganDetails page</h2>
        {organ && organLabTest && (
          <div>
            <h2>Test Details:</h2>
            <p>Name: {organ.name}</p>
            {organLabTest}
          </div>
        )}
    </div>
    );
};

export default OrganDetails;