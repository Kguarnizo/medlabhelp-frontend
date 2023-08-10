import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


// ?????

const Homepage: React.FC = () => {
    const [selectedList, setSelectedList] = useState<string | null>(null);

    const handleListSelect = (list: string) => {
    setSelectedList(list);
    };


    return (
        <div className='container'>
        <Carousel style={{width:"70%"}}>
            <Carousel.Item>
            <img className="d-block w-100 " src="images/cdc-XLhDvfz0sUM-unsplash.jpg" alt="First slide"/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 " src="images/cdc-CfS6A4U5g8M-unsplash.jpg" alt="Second slide"/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100 " src="images/testalize-me-0jE8ynV4mis-unsplash.jpg" alt="Third slide"/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
);
};
    
export default Homepage;