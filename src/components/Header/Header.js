import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="cart">
              <i class="bx bxs-cart"></i>
              <span>{cartItems.length === 0 ? "0" : cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
