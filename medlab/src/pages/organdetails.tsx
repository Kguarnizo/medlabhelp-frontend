import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrganData } from '../components/OrganList';
import LabTestList from '../components/LabTestList';
import { LabTestData } from '../components/TestDetail';
import axios from 'axios';


interface OrganDetailsProps {
  organData: OrganData[];
  labTestData: LabTestData[];
}

const OrganDetails: React.FC<OrganDetailsProps> = ({ organData, labTestData }) => {
  const [organRelatedTests, setOrganRelatedTests] = useState<LabTestData[]>([]);
  const [organId, setOrganId] = useState<string | null>(null);

  let { id } = useParams();

  const organ = organData.find((organ) => organ.id === Number(id));
  const organLabTest = organRelatedTests.map((lab) => <LabTestList {...lab} />);
  console.log("LOOK HERE ORGAN LAB TEST:", organLabTest)

  useEffect(() => {
    console.log('request ran');
    if (id && id !== organId) { 
      setOrganId(id);
      axios
        .get<LabTestData[]>(`https://medlab-help-api.onrender.com/organs/${id}/tests/`)
        .then((res) => {
          console.log('tests related to organ:', res.data);
          setOrganRelatedTests(res.data);
        })
        .catch((err) => {
          console.log('Error fetching related tests:', err);
          setOrganRelatedTests([]);
        });
    }
  }, [id, organId]);

  return (
    <div className="organdetails">
      {organ && organRelatedTests.length > 0 && (
        <div>
          <h2>Name: {organ.name}</h2>
            {organLabTest}
        </div>
      )}
    </div>
  )
};

export default OrganDetails;
