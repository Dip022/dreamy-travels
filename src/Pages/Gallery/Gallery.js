import React from "react";
import { Container } from "react-bootstrap";
import Gallery1 from "../../images/gallery-1.jpg";
import Gallery2 from "../../images/gallery-2.jpg";
import Gallery3 from "../../images/gallery-3.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <Container>
      <h2 className="text-center mt-5 mb-5">Gallery</h2>
      <div className="row mb-5">
        <div className=" col-md-6 col-lg-4 mb-4">
          <img className="gallery" src={Gallery1} alt="" />
        </div>
        <div className=" col-md-6 col-lg-4 mb-4">
          <img className="gallery" src={Gallery2} alt="" />
        </div>
        <div className=" col-md-6 col-lg-4 mb-4">
          <img className="gallery" src={Gallery3} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
