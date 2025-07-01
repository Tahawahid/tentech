import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { getAllServices } from '../../utils/serviceData';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const services = getAllServices();
  const serviceCategories = [
    {
      name: 'Streaming Graphics',
      services: services.filter(s => s.category === 'Streaming Graphics')
    },
    {
      name: 'Content Creation', 
      services: services.filter(s => s.category === 'Content Creation')
    },
    {
      name: 'Brand Design',
      services: services.filter(s => s.category === 'Brand Design')
    }
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 1000); // 1 second delay
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Mascort
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="space-y-6">
                  {serviceCategories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-purple-400 font-semibold mb-3">{category.name}</h3>
                      <div className="space-y-2">
                        {category.services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block text-gray-300 hover:text-white hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                          >
                            <div className="font-medium">{service.title}</div>
                            <div className="text-xs text-gray-500">From ${service.price.basic}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="border-t border-white/10 pt-4">
                    <Link
                      to="/services"
                      className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>  
            <Link to="/portfolio" className="text-white hover:text-purple-400 transition-colors">
              Portfolio
            </Link>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors">
              About
            </Link>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-6 space-y-4">
            <Link to="/" className="block text-white hover:text-purple-400 transition-colors">
              Home
            </Link>
            <Link to="/services" className="block text-white hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link to="/about" className="block text-white hover:text-purple-400 transition-colors">
              About
            </Link>
            <a href="#contact" className="block text-white hover:text-purple-400 transition-colors">
              Contact
            </a>
            <div className="pt-4">
              <a
                href="#contact"
                className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Project
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}