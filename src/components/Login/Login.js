import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./login.css";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  const { signInUsingGoogle } = useAuth();
  const handleSubmit = () => {};
  const handleLogin = () => {
    signInUsingGoogle().then((result) => {
      // const user = result.user;
      // console.log(user);
      if (location.state?.from) {
        navigate(location.state.from.pathname);
      } else {
        // navigate(location.pathname='shop');
      }
    });
  };

  return (
    <div className="main">
      <div>
        <h2 className="heading">LogIn</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-jhon? <Link to="/register">Create Account</Link>
        </p>
        <div>
          <small>Or Use These Option</small>
        </div>
        <button className="btn-regular" onClick={handleLogin}>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
