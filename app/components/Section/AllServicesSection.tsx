import React from 'react';
import { ArrowRight, Star, Clock } from 'lucide-react';
import { getAllServices } from '../../utils/serviceData';

export function AllServicesSection() {
  const services = getAllServices();

  const serviceCategories = [
    {
      title: 'Streaming Graphics',
      description: 'Professional overlays, alerts, and branding for streamers',
      services: services.filter(s => s.category === 'Streaming Graphics'),
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-600/20 to-pink-600/20'
    },
    {
      title: 'Content Creation',
      description: 'YouTube intros, thumbnails, and video graphics',
      services: services.filter(s => s.category === 'Content Creation'),
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-600/20 to-purple-600/20'
    },
    {
      title: 'Brand Design',
      description: 'Complete brand identity and marketing materials',
      services: services.filter(s => s.category === 'Brand Design'),
      gradient: 'from-pink-600 to-orange-600',
      bgGradient: 'from-pink-600/20 to-orange-600/20'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-pink-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive creative solutions designed to make your content stand out
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-lg text-gray-300">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={service.id} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                    
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 group-hover:border-opacity-50 transition-all duration-300 h-full flex flex-col">
                      {/* Service Image */}
                      <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl mb-6 overflow-hidden">
                        <img
                          src={service.heroImage}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.src = `https://via.placeholder.com/400x225/8b5cf6/ffffff?text=${encodeURIComponent(service.title)}`;
                          }}
                        />
                      </div>

                      {/* Service Content */}
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.shortDescription}</p>
                        
                        {/* Service Stats */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="text-yellow-400 fill-current" size={14} />
                            ))}
                            <span className="text-gray-400 text-xs ml-1">5.0</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-400 text-xs">
                            <Clock size={14} />
                            <span>{service.deliveryTime.basic}</span>
                          </div>
                        </div>

                        {/* Pricing */}
                        <div className="mb-6">
                          <div className="text-2xl font-bold text-white mb-1">
                            From <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>${service.price.basic}</span>
                          </div>
                          <div className="text-gray-400 text-sm">Starting price</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <a
                        href={`/services/${service.id}`}
                        className={`inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r ${category.gradient} text-white font-semibold py-3 rounded-full hover:scale-105 transition-all duration-300 group`}
                      >
                        Learn More
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                      </a>
                    </div>
                  </div>
                ))}

                {/* Add more services placeholder for categories with fewer services */}
                {category.services.length < 3 && (
                  <div className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                    
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 border-dashed rounded-2xl p-8 group-hover:border-opacity-50 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                      <div className="text-6xl text-gray-600 mb-4">+</div>
                      <h4 className="text-lg font-semibold text-white mb-2">More Services Coming Soon</h4>
                      <p className="text-gray-400 text-sm mb-4">We're constantly expanding our {category.title.toLowerCase()} offerings</p>
                      <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
                        Request Custom Service
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6">
              Don't see exactly what you're looking for? We create custom solutions tailored to your specific needs.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              Contact Us for Custom Work
            </button>
          </div>
        </div>
      </div>        
    </section>
  );
}
