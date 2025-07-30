import React from 'react';
import { FaHeartbeat, FaBatteryFull, FaRoute, FaShieldAlt, FaHistory, FaUserCheck, FaBell } from 'react-icons/fa';
import mockupImg from './assets/mockuo.png';

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
  <section className="py-0 bg-white">
    <div className="w-full flex justify-center items-center">
      <img src={mockupImg} alt="EV Champ Dashboard Screenshot" className="w-full h-auto object-contain m-0 p-0 border-none shadow-none bg-transparent scale-75" />
    </div>
  </section>
);

export default DashboardFeatures; 