import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import ServiceCard from './components/serviceCard/ServiceCard'
import Offers from './components/offers/Offers'
import About from './components/about/About'
import Testimonial from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <About/>
      <ServiceCard />
      <Offers />
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default App