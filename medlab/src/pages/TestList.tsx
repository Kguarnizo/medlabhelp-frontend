import React, { useState } from 'react';
import {LabTestData } from '../components/TestDetail';
import LabTestList from '../components/LabTestList';

interface TestListProps {
    labTestData: LabTestData[]
}

const TestList: React.FC<TestListProps> = ({ labTestData }) => {

    const [inputText, setInputText] = useState<string>('');

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setInputText(newValue);
    }

    return(
        <div>
            <input type="text" id="search" placeholder="Search..." onChange={onChange}/>
        <section>
            {labTestData.filter((test) => {
                return test.name.toLowerCase().includes(inputText.toLowerCase());
            }).map((lab) => <LabTestList key={lab.id} {...lab} />)}
        </section>
        </div>
    )
};

export default TestList;