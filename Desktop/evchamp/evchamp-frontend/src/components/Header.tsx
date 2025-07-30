import React from 'react';
import EVChampLogo from '../assets/EVChampLogo.png';

const Header: React.FC = () => (
  <header className="bg-ev-gradient backdrop-blur-lg sticky top-0 z-50 shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={EVChampLogo} alt="EV Champ Logo" className="h-8 w-8" />
        <span className="text-2xl font-bold text-ev-pearl">EV Champ</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
        <a href="#coverage" className="text-gray-600 hover:text-green-600 transition-colors">Coverage</a>
        <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">Testimonials</a>
        <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">FAQ</a>
      </nav>
      <a href="/buy-plans" className="cta-gradient text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all bg-gradient-to-r from-green-500 to-green-700">
        Buy Plans
      </a>
    </div>
  </header>
);

export default Header; 