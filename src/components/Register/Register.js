import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = () => {};
  return (
    <div className="main">
      <div>
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already Registered? <Link to="/login">Click to LogIn</Link>
        </p>
        <div>
          <small>Or Use These Option</small>
        </div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
