import React from 'react';
import { Clock, Star, Award, ArrowRight } from 'lucide-react';
import type { ServiceData } from '../../utils/serviceData';

interface SubServiceHeroSectionProps {
  service: ServiceData;
}

export function SubServiceHeroSection({ service }: SubServiceHeroSectionProps) {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900/30 via-pink-500/20 to-blue-600/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <a href="/services" className="hover:text-purple-400 transition-colors">Services</a>
              <ArrowRight size={16} />
              <span className="text-white">{service.title}</span>
            </nav>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-6">
              <Award size={16} className="text-purple-400" />
              <span className="text-sm text-purple-300">{service.category}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {service.longDescription}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">${service.price.basic}+</div>
                <div className="text-sm text-gray-400">Starting Price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{service.deliveryTime.basic}</div>
                <div className="text-sm text-gray-400">Fast Delivery</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <div className="text-sm text-gray-400">5.0 Rating</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
                Get Started - ${service.price.basic}
              </button>
              <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-80 object-cover rounded-xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = `https://via.placeholder.com/600x400/8b5cf6/ffffff?text=${encodeURIComponent(service.title)}`;
                }}
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span className="text-sm font-medium">{service.deliveryTime.basic} Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}