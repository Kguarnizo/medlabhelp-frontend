import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage: React.FC = () => {
    const [selectedList, setSelectedList] = useState<string | null>(null);

    const handleListSelect = (list: string) => {
    setSelectedList(list);
    };

    return (
        <div>
      {/* Image Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img className="d-block w-100" src="images/medical-laboratory-microscope-chemistry-biology-lab-test-scientific-research-development-healthcare-concept-background-149837485.jpg.webp" alt="First slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="/images/istockphoto-1132211698-612x612.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src="/images/stock-photo-medical-test-shows-doctor-blue.jpeg" alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>

        <div className="container mt-4">
        {/* Conditionally render the selected list */}
        {selectedList === 'panels' && (
            <div>
            <h2>Panels</h2>
            <Link to="/paneldetails" className="btn btn-primary">
                Go to Panel Details
            </Link>
            </div>
        )}
        {selectedList === 'organs' && (
            <div>
            <h2>Organs</h2>
            <Link to="/organdetails" className="btn btn-primary">
                Go to Organ Details
            </Link>
            </div>
        )}
        </div>
    </div>
    );
};

export default Homepage;
