import React from "react";
import "./SocialLogin.css";
import google from "../../../images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="social-login-container">
      <div className="social-login">
        <div className="arrow"></div>
        <span>or</span>
        <div className="arrow"></div>
      </div>
      <div className="social-media">
        <button onClick={() => signInWithGoogle()} className="w-100">
          {" "}
          <img src={google} className="w-15" alt="" /> Login With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
