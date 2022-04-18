import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passRef = useRef("");

  const navigetRegister = useNavigate();

  const handelLogin = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
  };

  const registerNaviget = () => {
    navigetRegister("/register");
  };
  return (
    <Container className="mt-5">
      <div className="login-container w-50 mx-auto">
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
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Button className="w-100" variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <p className="mt-4">
          No account yet?{" "}
          <span className="text-primary pointer" onClick={registerNaviget}>
            Register
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Login;
