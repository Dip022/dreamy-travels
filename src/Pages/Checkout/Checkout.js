import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./Checkout.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { checkoutId } = useParams();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/services.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  const checkoutEvent = events.find(
    (event) => event.id === parseInt(checkoutId)
  );
  const booking = () => {
    toast("Thanks For Booking");
  };
  return (
    <Container>
      <ToastContainer></ToastContainer>
      <h1 className="mt-5 text-center">Booking</h1>
      <div className="checkout-container">
        <div>
          <img src={checkoutEvent?.image} alt="" />
          <h3>{checkoutEvent?.name}</h3>
          <h4>
            Price: <span>$</span>
            {checkoutEvent?.price}
          </h4>
          <p>{checkoutEvent?.description}</p>
          <button onClick={booking}>Booking</button>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
