import React from "react";
import "./About.css";
import { SiTicktick } from "react-icons/si";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";


const About = () => {
  return (
    <section className="section__container about__container" id="about">
      <div className="about__image">
        <Reveal delay={0.5} duration={0.5}>
          <LazyLoadImage effect="blur" src="assets/about.jpg" alt="about" />
        </Reveal>
      </div>
      <div className="about__content">
        <Reveal delay={0.6} duration={0.5}>
          <h2 className="section__header">
            Easy Way To Go To Your Next Station
          </h2>
          <p className="section__description">
            Navigate the world effortlessly with our user-friendly platform,
            connecting you to the finest destinations and accommodations.
          </p>
        </Reveal>

        <Reveal delay={.7} duration={0.5}>
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
        
        <Reveal delay={0.7} duration={0.5}>
        <div className="about__links">
          <a href="#">
            <button className="btn">Get More</button>
          </a>
        </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
