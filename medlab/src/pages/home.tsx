import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'

const Homepage: React.FC = () => {




    return (
    <div>
        <div className='container'>
        <Carousel id='carousel-images' >
            <Carousel.Item>
            <img className=" " src="images/cdc-XLhDvfz0sUM-unsplash.jpg" alt="First slide"/>
                {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
            <img className=" " src="images/cdc-CfS6A4U5g8M-unsplash.jpg" alt="Second slide"/>
                {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
            <img className=" " src="images/testalize-me-0jE8ynV4mis-unsplash.jpg" alt="Third slide"/>
                {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption> */}
            </Carousel.Item>
            </Carousel>
        </div>
        <h2 id="care">We care about your health</h2>
    <div>
        <div className="first-container">
            <img id="lab-lady-img" src="images/louis-reed-pwcKF7L4-no-unsplash.jpg" alt=""/>
            <p id="accurate-desc">At MedHelp Lab, we strive to bring you only the most up-to-date information based on the most current scientific research. All of our information comes from only the most highly accredited sources because we believe in empowering patients.</p>
            <h3 id="accurate-head">Providing accurate information</h3>
        </div>
    </div>

    <div>
        <div className="second-container">
            <img id="lab-people-img" src="images/national-cancer-institute-ysv6k_gPOZM-unsplash.jpg" alt=""/>
            <p id="knowledge-desc">We believe that knowledge is the best tool to help a patient advocate for their health.</p>
            <h3 id="knowledge-head">Helping you take charge of your health</h3>
    </div>
    </div>

    <div className="color-container">
        <h3 id="big-heading">We're here for you!</h3>
        <p className="box">Contact us at any time and one of our friendly associates will be happy to assist you!</p>
    </div>
    </div>
);
};

export default Homepage;
