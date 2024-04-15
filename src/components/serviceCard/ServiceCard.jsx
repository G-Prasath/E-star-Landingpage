import React from "react";
import "./ServiceCard.css";

const ServiceCard = () => {
  return (
    <section className="section__container service__container" id="service">
      <h2 className="section__header">Our Services</h2>
      <p className="section__description">
        Embark on unforgettable journeys with our travel and tourism platform,
        where wanderlust meets convenience.
      </p>
      <div className="service__grid">
        <div className="service__card">
            <img src="assets/warehouse.jpg" alt="service" />
          <div>
            <div>
              <h4>Warehouse</h4>
              <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                Immerse yourself in the allure of the open sea as you set sail
                on a meticulously crafted cruise experience. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Cum, eaque!. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="service__card">
          <img src="assets/manufacturing.jpg" alt="service" />
          <div>
            <div>
              <h4>Manufacturing Unit</h4>
              <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                Immerse yourself in the allure of the open sea as you set sail
                on a meticulously crafted cruise experience. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Cum, eaque!. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="service__card">
          <img src="assets/auditorium.jpg" alt="service" />
          <div>
            <div>
              <h4>Auditourim</h4>
              <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                Immerse yourself in the allure of the open sea as you set sail
                on a meticulously crafted cruise experience. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Cum, eaque!. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="service__card">
          <img src="assets/factory-shed.jpg" alt="service" />
          <div>
            <div>
              <h4>Factory Shed</h4>
              <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                Immerse yourself in the allure of the open sea as you set sail
                on a meticulously crafted cruise experience. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Cum, eaque!. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>

        <div className="service__card">
          <img src="assets/mezzanine.jpg" alt="service" />
          <div>
            <div>
              <h4>Mezzanine Floor</h4>
              <p style={{ textAlign: "justify", lineHeight: "25px" }}>
                Immerse yourself in the allure of the open sea as you set sail
                on a meticulously crafted cruise experience. Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Cum, eaque!. Lorem ipsum
                dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
