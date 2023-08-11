import React, { useState } from "react";
import { Link } from "react-router-dom";

export interface OrganData {
    id: number,
    name: string,
}

interface OrganListProps {
    organData: OrganData[],
    handleOrganSelection: (organID: number) => void,
    setOrganVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrganList: React.FC<OrganListProps> = ({ organData, handleOrganSelection,  setOrganVisibility}) => {

    const [inputText, setInputText] = useState<string>('');

    if (organData.length === 0) {
        return <div>No data available.</div>;
    }

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setInputText(newValue);
    }

    return (
        <section className="col-md-4">
            <input type="text" id="search" placeholder="Search..." onChange={onChange}/>
            <ul>
                {organData.filter((organ) => {
                        return organ.name.toLowerCase().includes(inputText.toLowerCase());
                }).map((organ) => (
                <div key={organ.id}>
                <Link onClick={() => {setOrganVisibility(false)}} to={`organdetails/${organ.id}`}>{organ.name} </Link>
                </div>
                ))}
            </ul>
        </section>
    );
};

export default OrganList;