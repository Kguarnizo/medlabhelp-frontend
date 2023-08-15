import React, { useState } from 'react';
import {LabTestData } from '../components/TestDetail';
import LabTestList from '../components/LabTestList';
import './testlist.css'

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
        <div className='container'>
            <div id='content'>
                <form className='form-inline'>
                    <div className="input-group">
                        <input type="text" id="search" placeholder="Search..." className="form-control search-form" onChange={onChange}/>
                        <span className="input-group-btn">
                        <button id="search-this"type="button" className="pull-right btn btn-default search-btn">
                        <i className="fa fa-search"></i>
        <section>
            {inputText && labTestData.filter((test) => {
                return test.name.toLowerCase().includes(inputText.toLowerCase());
            }).map((lab) => <LabTestList key={lab.id} {...lab} />)}
        </section>
        </button>
        </span>
        </div>
        </form>
        </div>
        </div>
    )
};

export default TestList;

