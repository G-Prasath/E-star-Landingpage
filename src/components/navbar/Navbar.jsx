import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Reveal from "../Reveal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav>
        <div className="nav__bar">
          <div className="logo">
            <a href="/">
              <img src="/assets/logo.png" alt="logo" />
            </a>
          </div>
          <div
            className="nav__menu__btn"
            id="menu-btn"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <IoMdClose width={50} color="#005bff" />
            ) : (
              <CiMenuFries width={50} color="#005bff" />
            )}
          </div>
        </div>
        <ul className={`nav__links ${toggle ? "open" : ""}`} id="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">About</a>
          </li>
          <li>
            <a href="#offer">Services</a>
          </li>
          <li>
            <a href="#client">Projects</a>
          </li>
          <li>
            <button className="btn">Get a Quote</button>
          </li>
        </ul>
      </nav>

      <div className="section__container header__container" id="home">
        <Reveal delay={0.25} duration={0.5}>
          <h1>No Matter Where You Are Going From, We Take You There</h1>
          <p>
            You do not have the right to remain silent. Let us know what it
            takes to challenge you
          </p>
        </Reveal>

        <Reveal delay={0.7} duration={0.5}>
          <div className="booking">
            <div id="booking-type">
              <div>Get a Free Quote</div>
            </div>
            <form action="/" className="booking__form">
              <div className="booking__input">
                <label htmlFor="arrival">Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="booking__input">
                <label htmlFor="departure">Email</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="booking__input">
                <label htmlFor="date">Phone</label>
                <input type="text" placeholder="Enter Your Phone" />
              </div>
            </form>
            <div className="booking__btn">
              <button className="btn">Send Now</button>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Navbar;
