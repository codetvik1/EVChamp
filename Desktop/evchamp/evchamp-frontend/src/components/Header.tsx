import React from 'react';
import EVChampLogo from '../assets/EVChampLogo.png';
import { useUser } from '@clerk/clerk-react';

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const { isSignedIn, user } = useUser();

  return (
    <header className="bg-ev-gradient backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={EVChampLogo} alt="EV Champ Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold font-serif text-blue-900">EV CHAMP</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('overview')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
          >
            Overview
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          {isSignedIn && (
            <span className="text-gray-700 font-semibold mr-2">Hello, {user?.username || user?.firstName || user?.primaryEmailAddress?.emailAddress}</span>
          )}
          <a href="/rent-ev" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Rent EV
          </a>
          <a href="/buy-plans" className="cta-gradient text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all bg-gradient-to-r from-green-500 to-green-700">
            Buy Plans
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 