import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export interface OrganData {
  id: number;
  name: string;
}

interface OrganListProps {
  organData: OrganData[];
  handleNavLinkClick: () => void; 
}

const OrganList: React.FC<OrganListProps> = ({ organData, handleNavLinkClick }) => {
  const [inputText, setInputText] = useState<string>("");

  const navigate = useNavigate();

  if (organData.length === 0) {
    return <div>No data available.</div>;
  }

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputText(newValue);
  };

  return (
    <section className="col-md-4">
      <input type="text" placeholder="Search..." onChange={onChange} />
      <ul>
        {organData
          .filter((organ) => {
            return organ.name.toLowerCase().includes(inputText.toLowerCase());
          })
          .map((organ) => (
            <div key={organ.id}>
              <Link
                to={`organdetails/${organ.id}`}
                onClick={() => {
                  handleNavLinkClick(); 
                  navigate(`/organdetails/${organ.id}`);
                }}
              >
                {organ.name}
              </Link>
            </div>
          ))}
      </ul>
    </section>
  );
};

export default OrganList;