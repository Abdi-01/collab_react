import React from "react";

function Carousel() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/field/field_image_main/b_AllSoulsquad.jpg?itok=tTcH-5ix" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/field/field_image_main/Elizabeth%20Nyikos%2C%20rooftops%20over%20Oxford%20%282%29.jpg?itok=MPLJqDmb" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="http://www.ox.ac.uk/sites/files/oxford/field/field_image_highlight/si_top_oxfordskyline.jpg" alt="Third slide" />
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
    </div>
  );
}

export default Carousel;
