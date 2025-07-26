// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-tr from-blue-900 via-green-900 to-yellow-700 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ZipSure.ai</h3>
          <p className="text-gray-400">India's leading insure-tech platform for Electric Vehicles.</p>
          {/* Social icons can be added here */}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
            <li><a href="#coverage" className="text-gray-400 hover:text-white">Coverage</a></li>
            <li><a href="#quote" className="text-gray-400 hover:text-white">Get Quote</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Claim Process</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: <a href="mailto:support@zipsure.ai" className="hover:text-white">support@zipsure.ai</a></li>
            <li>Phone: <a href="tel:+911800123456" className="hover:text-white">1800-123-456</a></li>
            <li>Address: 123 Electric Ave, Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>&copy; 2024 ZipSure.ai. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;