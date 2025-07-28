import React, { useState, useRef } from 'react';

interface Vehicle {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  range: string;
  battery: string;
  charging: string;
}

interface Plan {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
  vehicleCost: number;
}

const BuyPlans: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  
  // Refs for scrolling
  const plansSectionRef = useRef<HTMLDivElement>(null);
  const checkoutSectionRef = useRef<HTMLDivElement>(null);

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Nexon EV",
      brand: "Tata",
      price: 1400000,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center",
      range: "437 km",
      battery: "40.5 kWh",
      charging: "DC Fast Charging"
    },
    {
      id: 2,
      name: "ZSEV",
      brand: "MG",
      price: 2100000,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center",
      range: "419 km",
      battery: "50.3 kWh",
      charging: "Type 2 AC Charging"
    },
    {
      id: 3,
      name: "XUV400",
      brand: "Mahindra",
      price: 1600000,
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop&crop=center",
      range: "456 km",
      battery: "39.4 kWh",
      charging: "CCS2 DC Charging"
    },
    {
      id: 4,
      name: "i20 EV",
      brand: "Hyundai",
      price: 950000,
      image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=400&h=300&fit=crop&crop=center",
      range: "305 km",
      battery: "39.2 kWh",
      charging: "Type 2 AC Charging"
    },
    {
      id: 5,
      name: "Comet EV",
      brand: "Tata",
      price: 750000,
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=300&fit=crop&crop=center",
      range: "170 km",
      battery: "17.6 kWh",
      charging: "Type 2 AC Charging"
    },
    {
      id: 6,
      name: "eC3",
      brand: "Citroen",
      price: 1200000,
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop&crop=center",
      range: "320 km",
      battery: "29.2 kWh",
      charging: "Type 2 AC Charging"
    }
  ];

  const plans: Plan[] = [
    {
      id: 1,
      name: "Basic Diagnostics",
      price: 1999,
      duration: "3 Months",
      features: [
        "Battery Health Monitoring",
        "Charging System Analysis",
        "Performance Diagnostics",
        "Basic Error Code Reading",
        "Email Reports"
      ],
      vehicleCost: 750000
    },
    {
      id: 2,
      name: "Premium Diagnostics",
      price: 2999,
      duration: "6 Months",
      features: [
        "Advanced Battery Analytics",
        "Real-time Performance Tracking",
        "Predictive Maintenance Alerts",
        "Charging Optimization",
        "Detailed Health Reports",
        "Priority Support"
      ],
      vehicleCost: 1200000
    },
    {
      id: 3,
      name: "Ultimate Diagnostics",
      price: 3999,
      duration: "12 Months",
      features: [
        "Comprehensive EV Diagnostics",
        "AI-Powered Health Predictions",
        "Custom Maintenance Schedules",
        "24/7 Expert Support",
        "Advanced Analytics Dashboard",
        "Warranty Extension Options",
        "Mobile App Access"
      ],
      vehicleCost: 2100000
    }
  ];

  const handleVehicleSelect = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setSelectedPlan(null);
    
    // Auto-scroll to plans section
    setTimeout(() => {
      plansSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    
    // Auto-scroll to checkout section
    setTimeout(() => {
      checkoutSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  const getFilteredPlans = () => {
    if (!selectedVehicle) return plans;
    return plans.filter(plan => plan.vehicleCost >= selectedVehicle.price * 0.5);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <div className="mb-6">
          <a 
            href="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </a>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            EV Diagnostics Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your electric vehicle and get comprehensive diagnostic coverage tailored to your needs
          </p>
        </div>

        {/* Step 1: Vehicle Selection */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">Step 1: Select Your Vehicle</h2>
            <p className="text-gray-600">Choose your electric vehicle to see compatible diagnostic plans</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                onClick={() => handleVehicleSelect(vehicle)}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  selectedVehicle?.id === vehicle.id ? 'ring-4 ring-green-500 scale-105' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  {selectedVehicle?.id === vehicle.id && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{vehicle.name}</h3>
                      <p className="text-green-600 font-medium">{vehicle.brand}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Vehicle Price</p>
                      <p className="text-lg font-semibold text-gray-800">{formatPrice(vehicle.price)}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Range:</span>
                      <span className="font-medium">{vehicle.range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery:</span>
                      <span className="font-medium">{vehicle.battery}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Charging:</span>
                      <span className="font-medium">{vehicle.charging}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Plan Selection */}
        {selectedVehicle && (
          <div ref={plansSectionRef} className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Step 2: Choose Your Diagnostic Plan</h2>
              <p className="text-gray-600">Select a comprehensive diagnostic plan for your {selectedVehicle.brand} {selectedVehicle.name}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getFilteredPlans().map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan)}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                    selectedPlan?.id === plan.id ? 'ring-4 ring-green-500 scale-105' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-green-600 mb-2">{formatPrice(plan.price)}</div>
                      <p className="text-gray-600">{plan.duration}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Select Plan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Checkout */}
        {selectedVehicle && selectedPlan && (
          <div ref={checkoutSectionRef} className="bg-white rounded-xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800 mb-2">Step 3: Complete Your Purchase</h2>
              <p className="text-gray-600">Review your selection and proceed to checkout</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Order Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vehicle:</span>
                    <span className="font-medium">{selectedVehicle.brand} {selectedVehicle.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Diagnostic Plan:</span>
                    <span className="font-medium">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{selectedPlan.duration}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>Total:</span>
                      <span className="text-green-600">{formatPrice(selectedPlan.price)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Checkout Form */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Details</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Vehicle Registration Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter vehicle registration number"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors transform hover:scale-105"
                  >
                    Pay {formatPrice(selectedPlan.price)} & Activate Plan
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyPlans; 