import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <h1>
              Rasoi<span>On</span>Wheels
            </h1>
          </Link>
          <p>
          At RasoiOnWheels, we are passionate about delivering exceptional culinary experiences right to your doorstep. Founded on the principle of convenience without compromising quality, we strive to connect food lovers with a diverse range of delicious options from local kitchens and renowned restaurants alike. Our dedicated team works tirelessly to ensure that every meal delivered is not just food, but a delightful journey of flavors, freshness, and satisfaction. Join us in redefining the way you experience food delivery, one delicious dish at a time.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8810642783</li>
            <li>contact@rasoionwheels.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Ⓒ rasoionwheels.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
