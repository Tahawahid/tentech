import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import type { ServiceData } from '../../../../utils/serviceData';
import { getAllServices } from '../../../../utils/serviceData';

interface RelatedServicesSectionProps {
  currentService: ServiceData;
}

export function RelatedServicesSection({ currentService }: RelatedServicesSectionProps) {
  const allServices = getAllServices();
  const relatedServices = allServices.filter(service => 
    currentService.relatedServices.includes(service.id) && service.id !== currentService.id
  );

  if (relatedServices.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/30 via-blue-900/20 to-indigo-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Related <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore other services that complement your {currentService.title.toLowerCase()}
          </p>
        </div>

        {/* Related Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedServices.map((service, index) => (
            <div key={service.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col">
                {/* Service Icon/Image */}
                <div className="aspect-video bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl mb-6 flex items-center justify-center">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://via.placeholder.com/300x200/8b5cf6/ffffff?text=${encodeURIComponent(service.title)}`;
                    }}
                  />
                </div>

                {/* Service Info */}
                <div className="flex-grow">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-4">
                    <span className="text-xs text-purple-300">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                  
                  {/* Service Stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={14} />
                      ))}
                      <span className="text-gray-400 text-xs ml-1">5.0</span>
                    </div>
                    <div className="text-purple-400 font-semibold">From ${service.price.basic}</div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 group"
                >
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Explore All Our Services</h3>
            <p className="text-gray-300 mb-6">
              Discover our complete range of creative services designed to elevate your content
            </p>
            <a
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}