import { useEffect, useState } from "react";

const usePlaces = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services, usePlaces];
};

export default usePlaces;
