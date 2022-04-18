import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <Container>
      <div className="mb-5">
        <h1 className="text-center mt-5 mb-5">Blog</h1>
        <div className="question">
          <h4>What Difference between authorization and authentication?</h4>
          <h5>
            <span className="fw-bold">Ans: </span>
            Authentication is the process by which a person's identity can be
            verified. Thanks to this, many of our websites are getting a lot of
            user benefits. Which is not considered to be entered without
            authorized speech.
          </h5>
        </div>
        <div className="question">
          <h4>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h4>
          <h5>
            <span className="fw-bold">Ans: </span>
            irebase is a Google website that is a medium for users to login. I
            would love to login to Firebase Mathematics or do unique things very
            easily. In addition to Firebase, there are Okta, Keycloak, MongoDB
            and many more Authentication.
          </h5>
        </div>
      </div>
    </Container>
  );
};

export default Blog;
