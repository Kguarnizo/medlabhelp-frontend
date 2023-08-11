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
  const [relatedTests, setRelatedTests] = useState<LabTestData[]>([]);
  const [organId, setOrganId] = useState<string | null>(null);
  const [selectedOrganTest, setSelectedOrganTest] = useState<LabTestData | null>(null);

  let { id } = useParams();

  const organ = organData.find((organ) => organ.id === Number(id));
  const organLabTest = labTestData.filter((test) => test.organ_id === organ?.id).map((test) => <LabTestList {...test} />);

  useEffect(() => {
    console.log('request ran');
    if (id && id !== organId) { // Check if id is defined before setting organId
      setOrganId(id);
      axios
        .get<LabTestData[]>(`https://medlab-help-api.onrender.com/organs/${id}/tests/`)
        .then((res) => {
          console.log('tests related to organ:', res.data);
          setRelatedTests(res.data);
        })
        .catch((err) => {
          console.log('Error fetching related tests:', err);
          setRelatedTests([]);
        });
    }
  }, [id, organId]);

  return (
    <div className="organdetails">
      {organ && organLabTest && relatedTests.length > 0 && (
        <div>
          <p>Name: {organ.name}</p>
          {relatedTests.map((test) => {
            return (<p
              key={test.name}
              onClick={() => {
                console.log(test.description)
                setSelectedOrganTest(test)
              }}
            >
              {test.name}
            </p>)
          })}
          {selectedOrganTest && <p>{selectedOrganTest.description}</p>}
        </div>
      )}
    </div>
  )
};

export default OrganDetails;
