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
      description: 'Professional overlays and stream designs',
      image: '/app/assets/images/logos/1.jpg',
      services: services.filter(s => s.category === 'Streaming Graphics'),
    },
    {
      name: 'Content Creation',
      description: 'Video intros, outros and animations',
      image: '/app/assets/images/logos/2.png',
      services: services.filter(s => s.category === 'Content Creation'),
    },
    {
      name: 'Brand Design',
      description: 'Logo design and brand identity',
      image: '/app/assets/images/logos/3  .png',
      services: services.filter(s => s.category === 'Brand Design'),
    },
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
    }, 300);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Mascort
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="text-white hover:text-purple-400 transition-colors text-sm xl:text-base">
              Home
            </Link>

            {/* Services Mega Menu */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-white hover:text-purple-400 transition-colors text-sm xl:text-base"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-black/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-3 gap-6">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="group/item">
                      {/* Category Header with Image */}
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover/item:scale-105"
                          onError={e => {
                            e.currentTarget.src =
                              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDIwMCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTI4IiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgo8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4YjVjZjYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZWM0ODk5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                          <p className="text-gray-300 text-sm">{category.description}</p>
                        </div>
                      </div>

                      {/* Services List */}
                      <div className="space-y-2">
                        {category.services.slice(0, 3).map(service => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block text-gray-300 hover:text-white hover:bg-white/5 rounded-lg p-2 transition-all duration-200"
                          >
                            <div className="font-medium text-sm">{service.title}</div>
                            <div className="text-xs text-gray-500">From ${service.price.basic}</div>
                          </Link>
                        ))}
                        {category.services.length > 3 && (
                          <div className="text-xs text-gray-500 px-2">
                            +{category.services.length - 3} more services
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 pt-4 mt-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">💜 Crafted by our all-women team</div>
                    <Link
                      to="/services"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="text-white hover:text-purple-400 transition-colors text-sm xl:text-base">
              Portfolio
            </Link>
            <Link to="/about" className="text-white hover:text-purple-400 transition-colors text-sm xl:text-base">
              About
            </Link>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors text-sm xl:text-base">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 text-sm"
            >
              Start Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 sm:py-6 space-y-3 sm:space-y-4 border-t border-white/10 mt-4">
            <Link
              to="/"
              className="block text-white hover:text-purple-400 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-white hover:text-purple-400 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block text-white hover:text-purple-400 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-purple-400 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#contact"
              className="block text-white hover:text-purple-400 transition-colors py-2 text-sm sm:text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-4">
              <a
                href="#contact"
                className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-sm"
                onClick={() => setIsMenuOpen(false)}
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
