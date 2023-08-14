import React, {useState} from "react";
// import Panel from "./Panel";
import { Link } from "react-router-dom";


export interface PanelData {
    id: number,
    name: string,
    organ_id: number,
}

interface PanelListProps {
    panelData: PanelData[],
}

const PanelList: React.FC<PanelListProps> = ({ panelData}) => {

    const [inputText, setInputText] = useState<string>('');

    if (panelData.length === 0) {
        return <div>No data available.</div>;
    }
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setInputText(newValue);
    }

    return (
        <section>
            <input type="text" id="search" placeholder="Search..." onChange={onChange}/>
        <ul>
            {panelData.filter((panel) => {
                return panel.name.toLowerCase().includes(inputText.toLowerCase());
            }).map((panel) => (

            <div key={panel.id}>
                <Link to={`paneldetails/${panel.id}`}>{panel.name} </Link>
            </div>
            ))}
        </ul>
        </section>
    );
};

export default PanelList;