import React from "react";

function Landing(props) {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-4">
          <img
            style={{ width: "140px", height: "140px" }}
            className="bg-secondary rounded-circle"
          />
          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of text below the
            carousel. This is the first column.
          </p>
          <button className="btn btn-secondary">View Details</button>
        </div>
        <div className="col-lg-4">
          <img
            style={{ width: "140px", height: "140px" }}
            className="bg-secondary rounded-circle"
          />
          <h2 className="fw-normal">Heading</h2>
          <p className="text-wrap">
            Some representative placeholder content for the three columns of text below the
            carousel. This is the first column.
          </p>
          <button className="btn btn-secondary">View Details</button>
        </div>
        <div className="col-lg-4">
          <img
            style={{ width: "140px", height: "140px" }}
            className="bg-secondary rounded-circle"
          />
          <h2 className="fw-normal">Heading</h2>
          <p>
            Some representative placeholder content for the three columns of text below the
            carousel. This is the first column.
          </p>
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
