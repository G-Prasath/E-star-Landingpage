import React from "react";
import "./Form.css";
import Reveal from "../Reveal";

const Form = () => {
  return (
    <div className="footer_form">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="section__header">Let's Get in Touch</h2>
        <p className="section__description">
          Embark on unforgettable journeys with our travel and tourism platform,
          where wanderlust meets convenience.
        </p>
      </Reveal>
      <div className="form_inputs">
        <div className="input_form_img">
          <img src="/assets/header.jpg" alt="" />
        </div>
        <div className="form_inputs_feilds">
          <form action="/">
            <div className="input-feilds">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name *"
              />
            </div>
            <div className="input-feilds">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enater Your Email *"
              />
            </div>
            <div className="input-feilds">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Phone No * "
              />
            </div>
            <div className="input-feilds">
              <div className="custom-select">
                <select>
                  <option>Choose Services</option>
                  <option value="">GitHub</option>
                  <option value="">Instagram</option>
                  <option value="">Facebook</option>
                  <option value="">LinkedIn</option>
                  <option value="">Twitter</option>
                  <option value="">Reddit</option>
                </select>
              </div>
            </div>
            <div className="input-feilds">
              <button>Touch Here</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
