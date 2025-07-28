import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Offering {
  icon: IconType;
  color: string;
  text: string;
}

const offerings: Offering[] = [
  { icon: FaIcons.FaRobot, color: 'text-blue-600', text: 'AI-Driven EV Leasing & Asset Management' },
  { icon: FaIcons.FaCarBattery, color: 'text-green-600', text: 'Smart Buyback & Warranty Solutions' },
  { icon: FaIcons.FaMapMarkedAlt, color: 'text-purple-600', text: 'Real-Time Telematics & Predictive Maintenance' },
  { icon: FaIcons.FaMobileAlt, color: 'text-pink-600', text: 'Integrated Mobile App & Web Dashboard' },
];

const Overview: React.FC = () => (
  <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-yellow-200 via-green-200 to-blue-300 py-16 px-4">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
    <div className="relative z-10 max-w-2xl w-full mx-auto bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center border border-blue-100">
      <div className="mb-6 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-green-400 flex items-center justify-center shadow-lg mb-3">
          <span className="text-white text-4xl font-extrabold">Z</span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1">EV CHAMP</h1>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Empowering Intelligent Electric Mobility</h2>
      </div>
      <p className="text-gray-700 text-lg mb-6 text-center">
        At EV Champ, we are at the forefront of transforming electric vehicle (EV) fleet management through our integrated platform that combines AI-powered software with IoT-enabled smart hardware. Our solutions are designed to make EV operations seamless, efficient, and intelligent.
      </p>
      <div className="w-full mb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Key Offerings</h3>
        <ul className="space-y-3">
          {offerings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <li key={idx} className="flex items-center bg-blue-50 rounded-lg px-4 py-2 shadow-sm hover:bg-blue-100 transition">
                {Icon && Icon({ className: `${item.color} text-2xl mr-3` })}
                <span className="text-gray-800 font-medium">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center mb-4">
        <span className="inline-block bg-gradient-to-r from-blue-500 to-green-400 text-white px-4 py-1 rounded-full text-sm font-semibold shadow">Available on Android, iOS & Web</span>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="w-28 h-28 bg-gradient-to-br from-gray-200 to-blue-100 border-4 border-dashed border-blue-300 flex items-center justify-center rounded-xl shadow-inner">
          <span className="text-blue-400 font-bold text-lg">QR CODE</span>
        </div>
        <span className="text-xs text-gray-400 mt-1">Scan to download the app</span>
      </div>
    </div>
  </section>
);

export default Overview; 