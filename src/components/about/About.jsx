import React from "react";
import "./About.css";
import { SiTicktick } from "react-icons/si";
import Reveal from "../Reveal";
import { motion, useInView, useAnimate } from 'framer-motion'


const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <Reveal>
          <img src="assets/about.jpg" alt="about" />
        </Reveal>
      </div>
      <div className="about__content">
        <Reveal>
          <h2 className="section__header">
            Easy Way To Go To Your Next Station
          </h2>
          <p className="section__description">
            Navigate the world effortlessly with our user-friendly platform,
            connecting you to the finest destinations and accommodations.
          </p>
        </Reveal>

        <Reveal>
          <ul>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              Easily find and compare transportation options, ensuring a
              hassle-free journey to your next destination.
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              Enjoy a straightforward and quick booking experience for flights,
              trains, and other transportation modes, all in one place.
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              Navigate the world effortlessly with our user-friendly platform,
              connecting you to the finest destinations and accommodations.
            </li>
            <li>
              <span>
                <SiTicktick width={20} color="#5484dd" />
              </span>
              Easily find and compare transportation options, ensuring a
              hassle-free journey to your next destination.
            </li>
          </ul>
        </Reveal> 

        <div className="about__links">
          <a href="#">
            <button className="btn">Get More</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
