import React from "react";
import { Container } from "react-bootstrap";
import banner from "../../images/banner.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <Container>
        <h1>Home</h1>
      </Container>
    </div>
  );
};

export default Home;
