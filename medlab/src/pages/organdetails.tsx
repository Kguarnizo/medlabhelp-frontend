import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { OrganData } from '../components/OrganList';
import LabTestList from '../components/LabTestList';
import { LabTestData } from '../components/TestDetail';
import { kBaseURL } from '../App';
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
  const organLabTest = organRelatedTests.map((lab) => <LabTestList key={lab.id} {...lab} />);

  useEffect(() => {
    if (id && id !== organId) {
      setOrganId(id);
      axios
        .get<LabTestData[]>(`${kBaseURL}/organs/${id}/tests/`)
        .then((res) => {
          console.log('tests related to organ:', res.data);
          setOrganRelatedTests(res.data);
        })
        .catch((err) => {
          setOrganRelatedTests([]);
        });
    }
  }, [id, organId]);

  return (
    <div className="organdetails">
      {organ && organRelatedTests.length > 0 && (
        <div className="organ-section">
          <h2 className="organ-header">{organ.name}</h2>
            {/* {organLabTest} */}
        </div>
      )}
      {organLabTest.length > 0 && (
        <ul className="lab-test-list">
          {organLabTest.map((lab) => (
            <li key={lab.key}>{lab}</li>
          ))}
        </ul>
      )}
    </div>
  )
};

export default OrganDetails;
