import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>

        {user?.email && (
          <span style={{ color: "white", marginRight: "10px" }}>
            Hello {user.displayName}
          </span>
        )}
        {user?.email ? (
          <button onClick={logOut}>LogOut</button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
