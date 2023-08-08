import React from 'react';
import { useParams } from 'react-router-dom';
import { OrganData } from '../components/OrganList';
import LabTestList from '../components/LabTestList';
import {LabTestData} from '../components/TestDetail';


interface OrganDetailsProps {
  organData: OrganData[],
  labTestData: LabTestData[]
}

const OrganDetails: React.FC<OrganDetailsProps> = ({organData, labTestData }) => {
  let { id } = useParams();
  const organ = organData.find((organ) => organ.id === Number(id));
  const organLabTest = labTestData.filter((test) => test.organ_id === organ?.id).map((test) => <LabTestList {...test} />)
  console.log("What is OrganLabTest:",  organLabTest )

  return (
  <div className="organdetails">
      {organ && organLabTest && (
        <div>
          <p>Name: {organ.name}</p>
          {organLabTest}
        </div>
      )}
  </div>
  );
};

export default OrganDetails;
