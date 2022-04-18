import React from "react";
import usePlaces from "../../hooks/usePlaces";
import Places from "../Places/Places";

const Services = () => {
  const [services] = usePlaces("");
  console.log(services);
  return (
    <div>
      {services.map((service) => (
        <Places></Places>
      ))}
    </div>
  );
};

export default Services;
