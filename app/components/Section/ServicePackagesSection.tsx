import React, { useState } from 'react';
import { Check, X, Star, Clock, Zap } from 'lucide-react';
import type { ServiceData } from '../../utils/serviceData';

interface ServicePackagesSectionProps {
  service: ServiceData;
}

export function ServicePackagesSection({ service }: ServicePackagesSectionProps) {
  const [selectedPackage, setSelectedPackage] = useState('standard');

  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: service.price.basic,
      delivery: service.deliveryTime.basic,
      features: service.features.basic,
      color: 'blue',
      gradient: 'from-blue-600 to-blue-700',
      description: 'Perfect for getting started'
    },
    {
      id: 'standard',
      name: 'Standard',
      price: service.price.standard,
      delivery: service.deliveryTime.standard,
      features: service.features.standard,
      color: 'purple',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Most popular choice',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: service.price.premium,
      delivery: service.deliveryTime.premium,
      features: service.features.premium,
      color: 'pink',
      gradient: 'from-pink-600 to-orange-600',
      description: 'Complete professional package'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900/30 via-blue-900/20 to-purple-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-56 h-56 bg-indigo-400/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect package for your needs and budget
          </p>
        </div>

        {/* Package Comparison */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile Package Selector */}
          <div className="lg:hidden mb-8">
            <div className="flex bg-white/5 backdrop-blur-sm rounded-full p-1">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedPackage === pkg.id
                      ? `bg-gradient-to-r ${pkg.gradient} text-white`
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {pkg.name}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Package Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className="relative group">
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium z-10">
                    <Star className="inline w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-r ${pkg.gradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 group-hover:blur-2xl transition-all duration-300`}></div>
                
                <div className={`relative bg-white/5 backdrop-blur-sm border ${pkg.popular ? 'border-purple-400/50' : 'border-white/10'} rounded-2xl p-8 group-hover:border-opacity-70 transition-all duration-300 h-full`}>
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-400 mb-4">{pkg.description}</p>
                    <div className={`text-4xl font-bold text-${pkg.color}-400 mb-2`}>${pkg.price}</div>
                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <Clock size={16} />
                      <span className="text-sm">{pkg.delivery} delivery</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className={`text-${pkg.color}-400 flex-shrink-0 mt-0.5`} size={18} />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${pkg.gradient} text-white font-semibold py-4 rounded-full hover:scale-105 transition-all duration-300 ${pkg.popular ? 'shadow-lg shadow-purple-500/25' : ''}`}>
                    Get Started - ${pkg.price}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Package Details */}
          <div className="lg:hidden">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`${selectedPackage === pkg.id ? 'block' : 'hidden'} bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className={`text-3xl font-bold text-${pkg.color}-400 mb-2`}>${pkg.price}</div>
                  <div className="text-gray-400">{pkg.delivery} delivery</div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`text-${pkg.color}-400 flex-shrink-0 mt-0.5`} size={18} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full bg-gradient-to-r ${pkg.gradient} text-white font-semibold py-4 rounded-full hover:scale-105 transition-all duration-300`}>
                  Get Started - ${pkg.price}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Add-On Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <Zap className="text-yellow-400 mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Rush Delivery</h4>
              <p className="text-gray-300 text-sm mb-3">Get your project 50% faster</p>
              <div className="text-yellow-400 font-bold">+$25</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <Star className="text-purple-400 mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Extra Revisions</h4>
              <p className="text-gray-300 text-sm mb-3">3 additional revision rounds</p>
              <div className="text-purple-400 font-bold">+$15</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
              <Clock className="text-blue-400 mx-auto mb-3" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">Priority Support</h4>
              <p className="text-gray-300 text-sm mb-3">24/7 dedicated support</p>
              <div className="text-blue-400 font-bold">+$20</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}