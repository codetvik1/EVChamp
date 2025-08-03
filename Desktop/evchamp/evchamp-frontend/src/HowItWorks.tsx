// src/components/HowItWorks.tsx
import React from 'react';
import img1 from './assets/67e56e1e14be488a8ebef8537bfad7c0f24404fa.png';
import img2 from './assets/94ce24dbb3ddc2052b8cac541121ded938aba1a9.png';
import img3 from './assets/9569dab8d8880a11d76d38aa48cddabab7980ad6.png';

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      {/* Main Heading Section */}
      <div className="text-center mb-16">
        <h3 className="text-lg font-semibold text-green-600 mb-4">Features</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Smarter EV Assistance, Powered by AI
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Your intelligent co-pilot for all things electric. Get real-time insights, 
          predictive battery analytics, and instant troubleshooting to charge faster, 
          drive smarter, and stay ahead.
        </p>
      </div>

      <div className="space-y-24">
        {/* Smart Charging Assistance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Smart Charging Assistance</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Find Charging Stations Instantly</span>
                  <p className="text-gray-600 mt-1">Locate nearby charging stations with real-time availability, pricing, and fast-charging options.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Optimize Battery Life</span>
                  <p className="text-gray-600 mt-1">Get AI-driven tips to extend battery health and maximize efficiency.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Save Time & Money</span>
                  <p className="text-gray-600 mt-1">Reduce charging costs with personalized recommendations based on your driving habits.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={img1} alt="Smart Charging Assistance" className="w-105 h-auto object-contain" />
              <div className="absolute -bottom-8 -left-8 w-64 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>

        {/* AI-Powered EV Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <img src={img2} alt="AI-Powered EV Guidance" className="w-105 h-auto object-contain transform -rotate-12" />
              <div className="absolute -bottom-8 -right-8 w-64 h-32 bg-green-100 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">AI-Powered EV Guidance</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Compare & Choose the Right EV</span>
                  <p className="text-gray-600 mt-1">Get expert-backed insights to find the perfect EV for your needs.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Troubleshoot in Seconds</span>
                  <p className="text-gray-600 mt-1">Solve common EV issues with instant AI-powered solutions.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">24/7 Expert Assistance</span>
                  <p className="text-gray-600 mt-1">Your personal EV companion, available anytime you need answers.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Stay Ahead with EV Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Stay Ahead with EV Insights</h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Get Real-Time EV News</span>
                  <p className="text-gray-600 mt-1">Stay updated with the latest industry trends and breakthroughs.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Predictive Battery & Range Analytics</span>
                  <p className="text-gray-600 mt-1">AI-powered insights to enhance performance and efficiency.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Be Future-Ready</span>
                  <p className="text-gray-600 mt-1">Learn about upcoming EV innovations and advancements before anyone else.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img src={img3} alt="Stay Ahead with EV Insights" className="w-105 h-auto object-contain" />
              <div className="absolute -bottom-8 -left-8 w-64 h-32 bg-purple-100 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;