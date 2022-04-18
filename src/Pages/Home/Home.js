import React from "react";
import { Container } from "react-bootstrap";
import banner from "../../images/banner.jpg";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <Container>
        <Services></Services>
      </Container>
    </div>
  );
};

export default Home;
