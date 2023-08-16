import React from 'react';
import './about.css'


const About=()=>{
    return(
    <div>
        <div className='desc'>
            <h3 className='about-us'>About Us</h3>
            <p className='para'>As every patient knows, medical jargon can be confusing for even the most routine of tests. That's why we created MedLab Help. We wanted a user-friendly guide to help you understand lab tests and give you the knowledge to allow you to be proactive in your healthcare by explaining why a test may be ordered by your doctor and what the normal range of reference for your results should be.</p>
        </div>

    <h3 className='meet'>Meet Our Team</h3>
    <div className='wrapper'>
    <div className="row row-cols-1 row-cols-md-2 g-4" >
    <div className="col">
        <div className="card">
        <img src="images/icon.png" className="card-img-top" alt="" />
        <div className="card-body">
            <h1 className="card-title">Tigist Woldearegai</h1>
            <h5 className="title">CEO</h5>
            <a className="links" href="www.github.com">GitHub </a>
            <a className="links" href="www.linkedin.com">LinkedIn</a>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="card">
        <img src="images/icon.png" className="card-img-top" alt="" />
        <div className="card-body">
        <h1 className="card-title">Katherine Guarnizo</h1>
            <h5 className="title">COO</h5>
            <a className="links" href="www.github.com">GitHub </a>
            <a className="links" href="www.linkedin.com">LinkedIn</a>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="card">
        <img src="images/icon.png" className="card-img-top" alt="" />
        <div className="card-body">
        <h1 className="card-title">Jasmin Worthy</h1>
            <h5 className="title">CFO</h5>
            <a className="links" href="www.github.com">GitHub </a>
            <a className="links" href="www.linkedin.com">LinkedIn</a>
        </div>
        </div>
    </div>

    <div className="col">
        <div className="card">
        <img src="images/icon.png" className="card-img-top" alt="" />
        <div className="card-body">
        <h1 className="card-title">Areeg Jibrin</h1>
            <h5 className="title">CLO</h5>
            <a className="links" href="www.github.com">GitHub </a>
            <a className="links" href="www.linkedin.com">LinkedIn</a>
        </div>
        </div>
    </div>
    </div>
    </div>

    <h3 className='diverse'>A diverse team dedicated to bringing quality resources.</h3>
    <h4 className='demographics'>We are proudly</h4>
    <h1 className='percent'><strong>100%</strong></h1>
    <h4 className='demographics'>women of color | technical backgrounds | owned & operated</h4>
    </div>
    )
};

export default About;