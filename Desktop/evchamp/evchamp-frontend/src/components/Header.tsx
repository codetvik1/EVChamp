import React, { useState, useRef, useEffect } from 'react';
import EVChampLogo from '../assets/EVChampLogo.png';
import { useUser, useClerk } from '@clerk/clerk-react';
import * as Fa from 'react-icons/fa';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut();
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const getUserDisplayName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user?.firstName) {
      return user.firstName;
    } else if (user?.username) {
      return user.username;
    } else if (user?.primaryEmailAddress?.emailAddress) {
      return user.primaryEmailAddress.emailAddress.split('@')[0];
    }
    return 'User';
  };

  const getUserInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    } else if (user?.firstName) {
      return user.firstName[0].toUpperCase();
    } else if (user?.username) {
      return user.username[0].toUpperCase();
    }
    return 'U';
  };

  return (
    <header className="bg-white/40 backdrop-blur-lg sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={EVChampLogo} alt="EV Champ Logo" className="h-8 w-8" />
          <span className="text-2xl font-bold font-serif text-blue-900">EV CHAMP</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer font-medium"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer font-medium"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer font-medium"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection('overview')} 
            className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer font-medium"
          >
            Overview
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <>
              {/* Rent EV and Buy Plans buttons first */}
              <div className="hidden sm:flex items-center space-x-3">
                <a 
                  href="/rent-ev" 
                  className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Rent EV
                </a>
                <a 
                  href="/buy-plans" 
                  className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Buy Plans
                </a>
              </div>

              {/* Notification Bell and User Profile Dropdown */}
              <div className="flex items-center space-x-3">
                {/* Notification Bell */}
                <button className="relative p-2 text-gray-600 hover:text-green-600 transition-colors">
                  {React.createElement(Fa.FaBell as any, { size: 20 })}
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-3 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
                  >
                    {/* User Avatar */}
                    <div className="flex items-center space-x-3">
                      {user?.imageUrl ? (
                        <img
                          src={user.imageUrl}
                          alt="Profile"
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                          {getUserInitials()}
                        </div>
                      )}
                      <div className="hidden sm:block text-left">
                        <p className="text-sm font-semibold text-gray-900">{getUserDisplayName()}</p>
                        <p className="text-xs text-gray-500">Welcome back!</p>
                      </div>
                      {React.createElement(Fa.FaChevronDown as any, { size: 12, className: `text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}` })}
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900">{getUserDisplayName()}</p>
                        <p className="text-xs text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
                      </div>
                      
                      <a
                        href="/user"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {React.createElement(Fa.FaUserCircle as any, { size: 16, className: 'mr-3 text-gray-400' })}
                        Profile Settings
                      </a>
                      
                      <a
                        href="/user"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {React.createElement(Fa.FaCog as any, { size: 16, className: 'mr-3 text-gray-400' })}
                        Account Settings
                      </a>
                      
                      <div className="border-t border-gray-100 mt-2">
                        <button
                          onClick={handleLogout}
                          className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          {React.createElement(Fa.FaSignOutAlt as any, { size: 16, className: 'mr-3' })}
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <a
                href="/sign-in"
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Sign In
              </a>
              <a
                href="/sign-up"
                className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 