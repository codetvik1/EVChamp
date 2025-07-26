import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Coverage from './Coverage';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Overview from './Overview';
import DashboardFeatures from './DashboardFeatures';


function App() {
  return (
    <div>
      <Header />
      <Overview />
      <DashboardFeatures />
      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
      <Testimonials />
      {/* Add Adventure and FAQ sections as you build them */}
      <Footer />
    </div>
  );
}

export default App;
