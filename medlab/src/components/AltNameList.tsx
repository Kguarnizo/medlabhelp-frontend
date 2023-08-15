import React from "react";

export interface AltNameData {
    id: number,
    test_id: number,
    name: string,
}

interface AltNameListProps {
    altNameData: AltNameData[] | null,
}

const AltNameList: React.FC<AltNameListProps> = ({ altNameData }) => {
    const altName = altNameData ??[];


    return (
        <section>
            <ul>
                {altName.map((altNameData) => (
                <li key={altNameData.id}>
                </li>
                    ))}
            </ul>
        </section>
    );
};

export default AltNameList;