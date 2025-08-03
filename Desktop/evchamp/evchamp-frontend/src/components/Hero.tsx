import React from 'react';
import headerImg from '../assets/header.jpg';

const Hero: React.FC = () => (
  <section className="pt-16 pb-20 bg-gradient-to-tr from-yellow-200 via-green-200 to-blue-300 transition-colors duration-1000">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Empowering Intelligent Electric Mobility<br className="hidden md:block" />
          <span className="text-green-600">with AI & IoT-Driven Fleet Management</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
          At EVChamp, we are transforming EV fleet management through our integrated platform that combines AI-powered software with IoT-enabled smart hardware. Experience seamless, efficient, and intelligent electric mobility operations.
        </p>
        <div className="mt-8">
          <a href="#buyplans" className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            Explore Plans & Solutions
          </a>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-medium text-gray-700">AI-Driven Leasing & Asset Management</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-medium text-gray-700">Smart Buyback & Warranty</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-medium text-gray-700">Real-Time Telematics & Analytics</span>
          </div>
        </div>
      </div>
      <div>
        <img src={headerImg} alt="EV Fleet Management Illustration" className="rounded-lg shadow-2xl w-full h-auto transform transition-transform duration-700 hover:scale-105 hover:shadow-3xl" />
      </div>
    </div>
  </section>
);

export default Hero; 