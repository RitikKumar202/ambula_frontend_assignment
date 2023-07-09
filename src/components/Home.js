import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-heading">
          <h1>Welcome.</h1>
        </div>
        <div className="home-desc">
          <p>
            This application has the feature to add products in th cart, create
            todo list and check weather of any city. Check on the below links to
            see the feature.
          </p>
        </div>
        <div className="home-links">
          <Link to="/shopping">Shopping Cart</Link>
          <Link to="/todo">Todo List</Link>
          <Link to="/weather">Check Weather</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
