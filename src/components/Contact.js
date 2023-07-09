import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <h1>Contact Us</h1>
        <div className="contact-form">
          <form>
            <input
              type="text"
              className="form-item"
              placeholder="Enter your name"
              required
            />
            <input
              type="email"
              className="form-item"
              placeholder="Enter your email"
              required
            />
            <button className="form-item" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
