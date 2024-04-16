import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
        <section className="client" id="client">
      <div className="section__container client__container">
        <h2 className="section__header">What Our Client Say</h2>
        <p className="section__description">
          Discover the stories of wanderlust and cherished memories through the
          eyes of our valued clients.
        </p>
        {/* <!-- Slider main container --> */}
        <div className="swiper">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper">


            {/* <!-- Slides --> */}
            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/client-1.jpg" alt="client" />
                <h4>James Rodriguez</h4>
                <p>Software Developer</p>
                <div className="client__ratings">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-half-fill"></i></span>
                  <span><i className="ri-star-line"></i></span>
                </div>
                <p>
                  As a frequent traveler, I rely on this website for all my
                  journeys. The 24/7 customer support has been a game-changer.
                </p>
              </div>
            </div>
            

            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/client-2.jpg" alt="client" />
                <h4>Sarah Thompson</h4>
                <p>Marketing Executive</p>
                <div className="client__ratings">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-line"></i></span>
                </div>
                <p>
                  Booking my dream vacation was a breeze with this platform! The
                  seamless hotel booking made my trip unforgettable.
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/client-3.jpg" alt="client" />
                <h4>Emily Chang</h4>
                <p>Graphic Designer</p>
                <div className="client__ratings">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-line"></i></span>
                  <span><i className="ri-star-line"></i></span>
                </div>
                <p>
                  The local guides and experiences offered by this platform
                  added a whole new dimension to my travels.
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/client-4.jpg" alt="client" />
                <h4>Michael Turner</h4>
                <p>Business Analyst</p>
                <div className="client__ratings">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-half-fill"></i></span>
                  <span><i className="ri-star-line"></i></span>
                </div>
                <p>
                  The convenience of booking flights, accommodations, and
                  transportation all in one place is a game-changer.
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="client__card">
                <img src="assets/client-5.jpg" alt="client" />
                <h4>David Carter</h4>
                <p>Adventure Enthusiast</p>
                <div className="client__ratings">
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                  <span><i className="ri-star-fill"></i></span>
                </div>
                <p>
                  The travel resources and tips section on this platform is a
                  goldmine for anyone looking to make the most of their travels.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial