import React from "react";
import { Container } from "react-bootstrap";
import usePlaces from "../../hooks/usePlaces";
import Places from "../Places/Places";
import "./Services.css";

const Services = () => {
  const [services] = usePlaces("");
  return (
    <Container>
      <h2 className="text-center mt-5 mb-5">Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <Places service={service} key={service.id}></Places>
        ))}
      </div>
    </Container>
  );
};

export default Services;
