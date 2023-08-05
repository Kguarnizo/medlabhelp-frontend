import React from 'react';

const Homepage: React.FC = () => {
    return (
    // <div>
    //     <div className="container">
    //     {/* Images section */}
    //     <div className="row">
    //         <div className="col-md-4">
    //         <img className="img-fluid" src="images/medical-laboratory-microscope-chemistry-biology-lab-test-scientific-research-development-healthcare-concept-background-149837485.jpg.webp" alt="sample" />
    //         </div>
    //         <div className="col-md-4">
    //         <img className="img-fluid" src="/images/istockphoto-1132211698-612x612.jpg" alt="medlab" />
    //         </div>
    //         <div className="col-md-4">
    //         <img className="img-fluid" src="/images/stock-photo-medical-test-shows-doctor-blue.jpeg" alt="med test" />
    //         </div>
    //     </div>

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
    )}

    export default Homepage;