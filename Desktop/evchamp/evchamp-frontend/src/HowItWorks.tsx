// src/components/HowItWorks.tsx
import React from 'react';

const steps = [
  { title: "Get a Quote", desc: "Enter your EV's details to get a personalized quote." },
  { title: "Choose Plan", desc: "Select the plan and add-ons that suit your needs." },
  { title: "Make Payment", desc: "Pay online using our secure payment gateway." },
  { title: "Get Insured", desc: "Receive your policy documents instantly." }
];

const HowItWorks: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get Your EV Insured in 4 Simple Steps</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Our process is designed to be quick, transparent, and completely digital.</p>
      </div>
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div className="text-center" key={i}>
              <div className="relative z-10 mx-auto bg-white border-2 border-green-500 text-green-500 rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <span className="text-3xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;