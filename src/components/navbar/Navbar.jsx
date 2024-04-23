import React, { useState } from "react";
import "./Navbar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Reveal from "../Reveal";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

const [formData, setFormData] = useState({
  username: "",
  email: "",
  phone: "",
  service: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const [errors, setErrors] = useState({});

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Test");

  const validationError = {};
  if (!formData.username.trim()) {
    validationError.username = "Username is Required";
  }

  if (!formData.email.trim()) {
    validationError.email = "Email is Required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    validationError.email = "Email is Invalide";
  }

  if (!formData.phone.trim()) {
    validationError.phone = "Phone Number Required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    validationError.phone = "Phone Number is Invalide";
  }
  if (!formData.service) {
    validationError.service = "Please choose a service";
  }

  setErrors(validationError);

  if (Object.keys(validationError).length === 0) {
    alert("Form Submited");
    formData.email = "";
    formData.username = "";
    formData.phone = "";
    formData.service = "";
  }
};






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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#team">Teams</a>
          </li>
          <li>
            {/* <button className="btn" >Get a Quote</button> */}
            <a href="#quote" className="btn" style={{ color: "#fff" }}>
              Get a Quote
            </a>
          </li>
        </ul>
      </nav>

      <div className="section__container header__container" id="home">
        <Reveal delay={0.25} duration={0.5}>
          <h1>No Matter Where You Are Going From, We Take You There</h1>
          {/* <p>
            You do not have the right to remain silent. Let us know what it
            takes to challenge you
          </p> */}
        </Reveal>

        <Reveal delay={0.7} duration={0.5}>
          <div className="booking" id="quote">
            <div id="booking-type">
              <div>Get a Free Quote</div>
            </div>
            <form onSubmit={handleSubmit} className="booking__form">
              <div className="booking__input">
                <label htmlFor="arrival">Name</label>
                <input
                  type="text"
                  name="username"
                  id="name"
                  value={formData.username}
                  placeholder="Enter Your Name *"
                  autoComplete="off"
                  onChange={handleChange}
                  style={{ border: errors.username ? "1px solid red" : "" }}
                />
              </div>
              <div className="booking__input">
                <label htmlFor="departure">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="Enater Your Email *"
                  autoComplete="off"
                  onChange={handleChange}
                  style={{ border: errors.email ? "1px solid red" : "" }}
                />
              </div>
              <div className="booking__input">
                <label htmlFor="date">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="name"
                  placeholder="Enter Your Phone No * "
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData.phone}
                  style={{ border: errors.phone ? "1px solid red" : "" }}
                />
              </div>
              <div className="booking__input">
                <div
                  className="custom-select"
                  style={{ border: errors.service ? "1px solid red" : "" }}
                >
                  <select
                    name="service"
                    onChange={handleChange}
                    value={formData.service}
                  >
                    <option>Choose Services</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="manufacturing unit">
                      Manufacturing Unit
                    </option>
                    <option value="auditourim">Auditourim</option>
                    <option value="factory shed">Factory Shed</option>
                    <option value="mezzanine floor">Mezzanine Floor</option>
                  </select>
                </div>
              </div>
              <div className="booking__btn">
                <button className="btn">Send Now</button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Navbar;
