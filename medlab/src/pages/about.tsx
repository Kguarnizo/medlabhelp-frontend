import React from 'react';
import './about.css'


const About=()=>{
    return(
    <div>
    <p className='desc'>As every patient knows, medical jargon can be confusing for even the most routine of tests. That's why we created MedLab Help. We wanted a user-friendly guide to help you understand lab tests and give you the knowledge to allow you to be proactive in your healthcare by explaining why a test may be ordered by your doctor and what the normal range of reference for your results should be.</p>
    <div className='wrapper'>
    <div className="row row-cols-1 row-cols-md-2 g-4" >
    <div className="col">
        <div className="card">
        <img src="images/icon.png" className="card-img-top" alt="..." />
        <div className="card-body">
            <h1 className="card-title">Tigist</h1>
            <h5 className="title">CEO</h5>
            <p className="card-text">She's everything!</p>
            <a href="www.github.com">GitHub</a><p> | </p><a href="www.linkedin.com">LinkedIn</a>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="card">
        <img src="images/pikachu.gif" className="card-img-top" alt="..." />
        <div className="card-body">
        <h1 className="card-title">Katherine</h1>
            <h5 className="title">COO</h5>
            <p className="card-text">She's everything!</p>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="card">
        <img src="images/pikachu.gif" className="card-img-top" alt="..." />
        <div className="card-body">
        <h1 className="card-title">Jasmin</h1>
            <h5 className="title">CFO</h5>
            <p className="card-text">She's everything!</p>
        </div>
        </div>
    </div>
    
    <div className="col">
        <div className="card">
        <img src="images/icon.png" className="card-img-top" alt="..." />
        <div className="card-body">
        <h1 className="card-title">Areeg</h1>
            <h5 className="title">CLO</h5>
            <p className="card-text">She's just Ken.</p>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    )
};

export default About;


