import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Loading/Loading";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const cPasswordRef = useRef("");

  const [passError, setPassError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/home");
  }

  const handelRegister = (event) => {
    event.preventDefault();
    // const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = cPasswordRef.current.value;

    if (password !== confirmPassword) {
      setPassError("Confirm Password not match!");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div>
      <Container className="mt-5">
        <div className="user-container w-50 mx-auto">
          <h3 className="mt-5 mb-5 text-center">Please Register</h3>
          <Form onSubmit={handelRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control
                ref={nameRef}
                type="text"
                placeholder="full name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={cPasswordRef}
                placeholder="confirm password"
                required
              />
            </Form.Group>
            <p>{error?.message}</p>
            <span className="text-danger">{passError}</span>
            <Button className="w-100" variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <p className="mt-4 ">
            Already have an account?{" "}
            <Link to="/login" className="text-primary text-decoration-none">
              Login
            </Link>
          </p>
          <SocialLogin></SocialLogin>
        </div>
      </Container>
    </div>
  );
};

export default Register;
