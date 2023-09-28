import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css'

const Homepage: React.FC = () => {

    return (
    <div>
        <div className='container'>
        <Carousel id='carousel-images'>
            <Carousel.Item>
            <img className=" " src="images/cdc-XLhDvfz0sUM-unsplash.jpg" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className=" " src="images/cdc-CfS6A4U5g8M-unsplash.jpg" alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
            <img className=" " src="images/testalize-me-0jE8ynV4mis-unsplash.jpg" alt="Third slide"/>
            </Carousel.Item>
            </Carousel>
        </div>
        <h2 id="care">We care about your health</h2>
        <div className="top-container">
            <div className="top-img-container">
            <div className="first-image-container">
                <img id="lab-lady-img" src="images/louis-reed-pwcKF7L4-no-unsplash.jpg" alt=""/>
                <h3 id="accurate-head">Providing accurate information</h3>
            </div>
            <div className="content-container">
                <div id="accurate-desc">
                    <p>At MedHelp Lab, we strive to bring you only the most up-to-date information based on the most current scientific research. All of our information comes from only the most highly accredited sources because we believe in empowering patients.</p>
                </div>
            </div>
            </div>
        </div>

        <div className="bottom-container">
            <div className="bottom-img-container">
            <div className="second-img-container">
                <img id="lab-people-img" src="images/national-cancer-institute-ysv6k_gPOZM-unsplash.jpg" alt=""/>
                <h3 id="helping-head">Helping you take charge of your health</h3>
            </div>
            <div className="second-content-container">
                <div id="second-accurate-desc">
                    <p>We believe that knowledge is the best tool to help a patient advocate for their health. Empowering individuals with informed decisions for a healthier tomorrow.</p>
                </div>
            </div>
            </div>
        </div>

    </div>
);
};

export default Homepage;
