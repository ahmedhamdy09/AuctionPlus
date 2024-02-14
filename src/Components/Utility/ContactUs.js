import React from "react";
import girl from "../../assets/Rectangle 4915.png";
import "../Utility/UtiltyCss/ContactUS.css";

const ContactUs = () => {
  return (
    <div className="container">
      <div className="contact">
        <div className="contactDescrip">
          <div className="contactPhoto">
            {/* eslint-disable-next-line */}
            <img src={girl} />
          </div>
          <div className="decription">
            <h2>ContactUs</h2>
            <p>Auction Plus</p>
            <p>SuezCanal University</p>
          </div>
          <span className="kercha"></span>

        </div>
        <div className="forms">
          <form>
            <div className="Twins" alt="contactUs">
              <label>
                Full Name:
                <br />
                <input type="text" name="name" placeholder="Enter your Name" />
              </label>
              <label>
                E-mail:
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <label className="subject">
              Subject:
              <br />
              <input
                type="text"
                name="subject"
                className="subject"
                placeholder="I’d like to ask about.."
              />
            </label>
            <br />
            <label className="messagess">
              Message:
              <br />
              <input
                type="text"
                name="message"
                className="message"
                placeholder="Write a message."
              />
            </label>
          </form>
        </div>
      </div>
      <div className="forms2">
        <input type="text" name="search" placeholder="Search query..." />
        <button>Search</button>
      </div>
    </div>
  );
};

export default ContactUs;

