import React, { useState } from 'react';
import { ExternalLink, Eye, Heart } from 'lucide-react';
import type { ServiceData } from '../../utils/serviceData';

interface ServicePortfolioSectionProps {
  service: ServiceData;
}

export function ServicePortfolioSection({ service }: ServicePortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = ['all', ...Array.from(new Set(service.portfolio.map(item => item.category.toLowerCase())))];
  
  const filteredPortfolio = selectedCategory === 'all' 
    ? service.portfolio 
    : service.portfolio.filter(item => item.category.toLowerCase() === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-orange-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/3 w-48 h-48 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the quality and creativity we bring to every {service.title.toLowerCase()} project
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 flex flex-wrap gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPortfolio.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group-hover:border-purple-400/50 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://via.placeholder.com/400x300/8b5cf6/ffffff?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-6 z-20">
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Eye className="text-white" size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <ExternalLink className="text-white" size={18} />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.category}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="text-pink-400" size={16} />
                      <span className="text-gray-400 text-sm">247 likes</span>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of satisfied clients who have transformed their content with our {service.title.toLowerCase()}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
                Start Your Project
              </button>
              <button className="border border-white/20 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                View All Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}