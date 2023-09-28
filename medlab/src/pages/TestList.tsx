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
            <div className='box-container'>
                <div className='box'>
                    <h3 className='box-content'>Discover the convenience of MedLab-Help, your one-stop destination to learn about over 100 comprehensive lab tests.</h3>
                    <p className='box-desc'>At MedLab-Help, we offer an extensive selection of over 100 lab tests that cater to a diverse range of health needs. Our goal is to provide you with the information you need to make informed decisions about your well-being. Here's a glimpse of some of the tests you can explore: nutritional deficiency panels, STIs, liver and kidney function tests, cancer markers, and much more.</p>
                    <a href="https://www.questdiagnostics.com/locations/search.html/60453/50/1" className='locations'target="_blank" rel="noopener noreferrer">Find lab locations here!</a>
                </div>
            </div>
            <div id='content'>
                <form className='form-inline'>
                    <div className="input-group">
                        <input type="text" id="test-search" placeholder="Search..." className="form-control search-form" onChange={onChange}/>
                        <span className="input-group-btn">
                            <button id="search-this"type="button" className="btn btn-default search-btn">
                                <i className="fa fa-search"></i>
                                <section id="test-search-results">
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