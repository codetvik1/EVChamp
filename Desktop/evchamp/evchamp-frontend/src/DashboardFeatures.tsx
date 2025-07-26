import React from 'react';
import { FaHeartbeat, FaBatteryFull, FaRoute, FaShieldAlt, FaHistory, FaUserCheck, FaBell } from 'react-icons/fa';

const features = [
  { icon: FaHeartbeat, color: 'text-red-500', title: 'Real-Time Vehicle Health Monitoring' },
  { icon: FaBatteryFull, color: 'text-green-600', title: 'Battery & Motor Diagnostics' },
  { icon: FaRoute, color: 'text-blue-500', title: 'Live GPS Tracking & Route Optimization' },
  { icon: FaShieldAlt, color: 'text-yellow-500', title: 'Warranty, Buyback & AMC Integration' },
  { icon: FaHistory, color: 'text-purple-500', title: 'Trip History & Predictive Maintenance Reports' },
  { icon: FaUserCheck, color: 'text-pink-500', title: 'Driver Behavior Analysis' },
  { icon: FaBell, color: 'text-indigo-500', title: 'Instant Alerts & Notifications' },
];

const DashboardFeatures: React.FC = () => (
  <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Smart Management at Your Fingertips</h2>
        <p className="mt-2 text-lg text-gray-600 max-w-2xl mx-auto">Our AI-enabled App and Web Dashboard provide comprehensive control over your EV fleet:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="bg-white rounded-2xl shadow-md p-6 flex items-center space-x-4 hover:shadow-xl transition">
              {Icon && Icon({ className: `${f.color} text-3xl flex-shrink-0` })}
              <span className="text-lg font-semibold text-gray-800">{f.title}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="w-full max-w-2xl h-64 bg-gradient-to-br from-blue-100 to-green-100 border-4 border-dashed border-blue-300 flex items-center justify-center rounded-2xl shadow-inner">
          <span className="text-blue-400 font-bold text-xl">[App & Web Dashboard Mockups]</span>
        </div>
        <span className="text-xs text-gray-400 mt-2">Screenshots coming soon</span>
      </div>
    </div>
  </section>
);

export default DashboardFeatures; 