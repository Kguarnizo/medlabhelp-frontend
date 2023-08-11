import React from 'react';
// import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Homepage: React.FC = () => {

    return (
        <div className='container'>
        <Carousel id='carousel-images' >
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
);
};

export default Homepage;