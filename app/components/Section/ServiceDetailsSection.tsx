import React from 'react';
import { Check, Star, Clock, Users } from 'lucide-react';
import type { ServiceData } from '../../utils/serviceData';

interface ServiceDetailsSectionProps {
  service: ServiceData;
}

export function ServiceDetailsSection({ service }: ServiceDetailsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-pink-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Included</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to elevate your content and engage your audience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Basic Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-blue-400/50 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Basic Package</h3>
                <div className="text-3xl font-bold text-blue-400 mb-1">${service.price.basic}</div>
                <div className="text-gray-400">{service.deliveryTime.basic} delivery</div>
              </div>
              <ul className="space-y-3">
                {service.features.basic.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-blue-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition-colors">
                Choose Basic
              </button>
            </div>
          </div>

          {/* Standard Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8 group-hover:border-purple-400/70 transition-all duration-300">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6 mt-4">
                <h3 className="text-2xl font-bold text-white mb-2">Standard Package</h3>
                <div className="text-3xl font-bold text-purple-400 mb-1">${service.price.standard}</div>
                <div className="text-gray-400">{service.deliveryTime.standard} delivery</div>
              </div>
              <ul className="space-y-3">
                {service.features.standard.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-purple-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                Choose Standard
              </button>
            </div>
          </div>

          {/* Premium Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-pink-400/50 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium Package</h3>
                <div className="text-3xl font-bold text-pink-400 mb-1">${service.price.premium}</div>
                <div className="text-gray-400">{service.deliveryTime.premium} delivery</div>
              </div>
              <ul className="space-y-3">
                {service.features.premium.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="text-pink-400 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-pink-600 text-white font-semibold py-3 rounded-full hover:bg-pink-700 transition-colors">
                Choose Premium
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose This Service */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
            <p className="text-gray-300">Professional designs crafted by experienced female designers</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Delivery</h3>
            <p className="text-gray-300">Quick turnaround times without compromising on quality</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dedicated Support</h3>
            <p className="text-gray-300">Personal support throughout the entire process</p>
          </div>
        </div>
      </div>
    </section>
  );
}