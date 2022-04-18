import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../../images/aboru-img.jpg";
import "./About.css";

const About = () => {
  return (
    <Container>
      <div className="about-container mb-5">
        <h1 className="mt-5 mb-5 text-center">About Me</h1>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img src={aboutImg} className="about-img" alt="" />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="about-me">
              <h1 className="mt-3 mb-3">Dipok Roy</h1>
              <p>
                My journey as a web developer began with a programming hero. I
                want to see myself as a good web developer. So I don't want to
                stop my work. I will remain steadfast in my goal no matter what
                obstacles come my way. So I say hard work can push Manu back to
                his destination so there is no alternative to hard work and
                effort. Thanks
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
