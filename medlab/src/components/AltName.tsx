import React from "react";

interface AltNameProps {
    id: number,
    test_id:number,
    name: string,
}


const AltName: React.FC<AltNameProps> = ({ id, test_id, name }) => {

    return (
        <section>
            <p>{name}</p>
        </section>
);
};

export default AltName;