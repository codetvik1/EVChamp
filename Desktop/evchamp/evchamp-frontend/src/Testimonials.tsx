// src/components/Testimonials.tsx
import React from 'react';

const testimonials = [
  {
    quote: "Comprehensive coverage and the battery protection is a huge plus. I would definitely recommend them to other EV owners.",
    name: "Rohan Sharma",
    role: "Tesla Model 3 Owner",
    img: "https://placehold.co/48x48/22c55e/ffffff?text=RS"
  },
  {
    quote: "The claims process was very smooth and hassle-free. The team was responsive and helpful. Truly a seamless experience!",
    name: "Priya Patel",
    role: "Tata Nexon EV Owner",
    img: "https://placehold.co/48x48/22c55e/ffffff?text=PP"
  },
  {
    quote: "Finally, an insurance company that understands EVs! The 24/7 roadside assistance with charging support is a game-changer.",
    name: "Ankit Kumar",
    role: "Hyundai Kona Owner",
    img: "https://placehold.co/48x48/22c55e/ffffff?text=AK"
  }
];

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Customers Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p className="text-gray-600 mb-6">"{t.quote}"</p>
            <div className="flex items-center">
              <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-800">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
