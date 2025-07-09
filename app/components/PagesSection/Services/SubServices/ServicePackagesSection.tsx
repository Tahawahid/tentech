import React from 'react';
import { Check, Star, Clock, RefreshCw } from 'lucide-react';
import type { ServiceData } from '../../../../utils/serviceData';

interface ServicePackagesSectionProps {
  service: ServiceData;
}

export function ServicePackagesSection({ service }: ServicePackagesSectionProps) {
  const packages = [
    {
      id: 'basic',
      name: 'Basic',
      price: service.price.basic,
      deliveryTime: service.deliveryTime.basic,
      revisions: '2 revisions',
      features: service.features.basic,
      popular: false
    },
    {
      id: 'standard',
      name: 'Standard',
      price: service.price.standard,
      deliveryTime: service.deliveryTime.standard,
      revisions: '5 revisions',
      features: service.features.standard,
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: service.price.premium,
      deliveryTime: service.deliveryTime.premium,
      revisions: 'Unlimited',
      features: service.features.premium,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900/50 to-purple-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Package</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select the perfect package that fits your needs and budget
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className={`relative group ${pkg.popular ? 'transform scale-105' : ''}`}>
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-4 py-2 rounded-full z-10">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-white/5 backdrop-blur-sm border ${pkg.popular ? 'border-purple-400/50' : 'border-white/10'} rounded-2xl p-8 h-full flex flex-col group-hover:border-purple-400/70 transition-all duration-300`}>
                {/* Package Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">${pkg.price}</div>
                  <div className="text-gray-400">One-time payment</div>
                </div>

                {/* Package Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="text-purple-400" size={16} />
                      <span className="text-white font-semibold">{pkg.deliveryTime}</span>
                    </div>
                    <div className="text-gray-400 text-sm">Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <RefreshCw className="text-purple-400" size={16} />
                      <span className="text-white font-semibold">{pkg.revisions}</span>
                    </div>
                    <div className="text-gray-400 text-sm">Revisions</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="flex-grow mb-8">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="text-green-400 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                    : 'border-2 border-purple-400/50 text-white hover:bg-purple-400/10'
                }`}>
                  Select {pkg.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">All packages include our satisfaction guarantee</p>
            <div className="flex items-center justify-center gap-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-current" size={16} />
              ))}
              <span className="text-gray-300 ml-2">5.0 average rating</span>
            </div>
            <p className="text-gray-400 text-sm">
              Join hundreds of satisfied content creators who trust our work
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
