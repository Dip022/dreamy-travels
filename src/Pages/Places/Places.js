import React from "react";
import "./Places.css";

const Places = ({ service }) => {
  const { name, image, price, description } = service;
  return (
    <div className="places-container">
      <div className="places-info">
        <img className="places-img" src={image} alt="" />
        <div className="places-description">
          <h5>{name}</h5>
          <h6>
            Price: <span>$</span>
            {price}
          </h6>
          <p>{description}</p>
        </div>
      </div>

      <button>Booking Now</button>
    </div>
  );
};

export default Places;
