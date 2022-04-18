import React from "react";
import { useNavigate } from "react-router-dom";
import "./Places.css";

const Places = ({ service }) => {
  const { id, name, image, price, description } = service;
  const naviget = useNavigate();
  const ServicesDetail = (id) => {
    naviget(`/checkout/${id}`);
  };
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
      <button onClick={() => ServicesDetail(id)}>Booking Now</button>
    </div>
  );
};

export default Places;
