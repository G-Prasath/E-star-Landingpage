import React from 'react'
import './Offers.css'

const Offers = () => {
  return (
    <section className="section__container offer__container" id="offer">
      <div className="offer__header">
        <h2 className="section__header">Flight Offer Details</h2>
        <a href="#">See All</a>
      </div>
      <div className="offer__grid">
        <div className="offer__card">
          <img src="assets/offer-1.jpg" alt="offer" />
          <h4>Dhaka To USA</h4>
          <p>15 Sep 2023</p>
          <div>
            <span>$870.00</span>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="offer__card">
          <img src="assets/offer-2.jpg" alt="offer" />
          <h4>Dhaka To Dubai</h4>
          <p>20 Sep 2023</p>
          <div>
            <span>$570.00</span>
            <button className="btn">Book Now</button>
          </div>
        </div>
        <div className="offer__card">
          <img src="assets/offer-3.jpg" alt="offer" />
          <h4>Dhaka To Maldives</h4>
          <p>20 Sep 2023</p>
          <div>
            <span>$370.00</span>
            <button className="btn">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers