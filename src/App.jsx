import React, { lazy, Suspense } from "react";
import './App.css'

const Navbar = lazy(() => import("./components/navbar/Navbar"));
const About = lazy(() => import("./components/about/About"));
const ServiceCard = lazy(() => import("./components/serviceCard/ServiceCard"));
const Team = lazy(() => import('./components/team/Team'));
const Projects = lazy(() => import('./components/projects/Projects'))
const Footer = lazy(() => import('./components/footer/Footer'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div/>}>
        <Navbar />
        <About />
        <ServiceCard />
        <Projects/>
        <Team />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App