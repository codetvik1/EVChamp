import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Coverage from './Coverage';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Overview from './Overview';
import DashboardFeatures from './DashboardFeatures';
import BuyPlans from './components/BuyPlans';

function HomePage() {
  return (
    <div>
      <Overview />
      <DashboardFeatures />
      <Hero />
      <Features />
      <Coverage />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy-plans" element={<BuyPlans />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
