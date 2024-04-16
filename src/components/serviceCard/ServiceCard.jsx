import React from "react";
import "./ServiceCard.css";
import Reveal from "../Reveal";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = () => {
  return (
    <section className="section__container service__container" id="service">
      <Reveal delay={0.5} duration={0.5}>
        <h2 className="section__header">Our Services</h2>
        <p className="section__description">
          Embark on unforgettable journeys with our travel and tourism platform,
          where wanderlust meets convenience.
        </p>
      </Reveal>
      <div className="service__grid">
        <Reveal delay={0.6} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              effect="blur"
              src="assets/warehouse.jpg"
              alt="service"
              className="service_card_img"
              width="500px"
              height="150px"
            />
            <div>
              <div>
                <h4>Warehouse</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Immerse yourself in the allure of the open sea as you set sail
                  on a meticulously crafted cruise experience. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Cum, eaque!.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.7} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              effect="blur"
              src="assets/manufacturing.jpg"
              alt="service"
              className="service_card_img"
              width="500px"
              height="150px"
            />
            <div>
              <div>
                <h4>Manufacturing Unit</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Immerse yourself in the allure of the open sea as you set sail
                  on a meticulously crafted cruise experience. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Cum, eaque!.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.8} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              effect="blur"
              src="assets/auditorium.jpg"
              alt="service"
              className="service_card_img"
              width="500px"
              height="150px"
            />
            <div>
              <div>
                <h4>Auditourim</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Immerse yourself in the allure of the open sea as you set sail
                  on a meticulously crafted cruise experience. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Cum, eaque!.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.9} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              effect="blur"
              src="assets/factory-shed.jpg"
              alt="service"
              className="service_card_img"
              width="500px"
              height="150px"
            />
            <div>
              <div>
                <h4>Factory Shed</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Immerse yourself in the allure of the open sea as you set sail
                  on a meticulously crafted cruise experience. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Cum, eaque!.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} duration={0.6}>
          <div className="service__card">
            <LazyLoadImage
              effect="blur"
              src="assets/mezzanine.jpg"
              alt="service"
              className="service_card_img"
              width="500px"
              height="150px"
            />
            <div>
              <div>
                <h4>Mezzanine Floor</h4>
                <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                  Immerse yourself in the allure of the open sea as you set sail
                  on a meticulously crafted cruise experience. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Cum, eaque!.
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceCard;
