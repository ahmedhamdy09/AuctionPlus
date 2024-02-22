import React from "react";
import "./UtiltyCss/Footer.css";
import "./UtiltyCss/Media.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="content">
        <div className="d1">
          <h3>Get In Touch</h3>
          <p>Auction Plus</p>
          <ul>
            <a href="/">
              <li>
                <FaFacebook />
              </li>
            </a>

            <a href="/">
              <li>
                <FaInstagram />
              </li>
            </a>

            <a href="/">
              <li>
                <FaTwitter />
              </li>
            </a>
          </ul>
        </div>
        <div className="d2">
          <h3>company info</h3>

          <p>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Us
            </Link>
          </p>
          <p>carrier</p>
          <p>We are hiring</p>
          <p>Blog</p>
        </div>
        <div className="d3">
          <h3>Features</h3>
          <p>Business Marketing</p>
          <p>User Analytic</p>
          <p>Live Chat</p>
          <p>Unlimited Support</p>
        </div>
      </div>
      <div className="d4">
        <p>
          Made By IS Team Suez Canal University Dr.Osama Farouk Monitor All
          Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
