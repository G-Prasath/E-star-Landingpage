import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="logo">
            <a href="#">
              <img src="assets/logo.png" alt="logo" />
            </a>
          </div>
          <p>
            Explore the world with ease and excitement through our comprehensive
            travel platform. Your journey begins here, where seamless planning
            meets unforgettable experiences.
          </p>
          <ul className="footer__socials">
            <li>
              <a href="#">
                <i className="ri-facebook-fill"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-instagram-line"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="ri-youtube-line"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Flights</a>
            </li>
            <li>
              <a href="#">Hotels</a>
            </li>
            <li>
              <a href="#">Cruise</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__links">
            <li>
              <a href="#">
                <span>
                  <i className="ri-phone-fill"></i>
                </span>{" "}
                +91 9876543210
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i className="ri-record-mail-line"></i>
                </span>{" "}
                info@flytravels
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i className="ri-map-pin-2-fill"></i>
                </span>{" "}
                New Delhi, India
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Subscribe</h4>
          <form action="/">
            <input type="text" placeholder="Enter your email" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer