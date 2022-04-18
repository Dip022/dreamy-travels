import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passRef = useRef("");

  const navigetRegister = useNavigate();
  if (user) {
    navigetRegister("/checkout");
  }

  const handelLogin = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const registerNaviget = () => {
    navigetRegister("/register");
  };
  return (
    <Container className="mt-5">
      <div className="user-container w-50 mx-auto">
        <h3 className="mt-5 mb-5 text-center">Please Login</h3>
        <Form onSubmit={handelLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <p>{error?.message}</p>
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p className="mt-4 ">
          No account yet?{" "}
          <Link
            to="/register"
            className="text-primary text-decoration-none"
            onClick={registerNaviget}
          >
            Register
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default Login;
