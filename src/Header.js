import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleEffect, setToggleEffect] = useState("Login");

  // useEffect
  useEffect(() => {
    console.log("Use Effect Called");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                toggleEffect === "Login"
                  ? setToggleEffect("Logout")
                  : setToggleEffect("Login");
              }}
            >
              {toggleEffect}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
