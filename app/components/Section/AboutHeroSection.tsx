import React from 'react';
import { Heart, Star, Users, Award } from 'lucide-react';

export function AboutHeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-blue-600/30"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
<div className="absolute bottom-1/3 left-20 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl"></div>
      
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Heart className="text-pink-400" size={16} />
            <span className="text-sm text-gray-300">100% Women-Led Creative Studio</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Empowering Women Through
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              Creative Excellence
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From Pakistan to the world, we're breaking barriers and creating stunning visuals 
            that help content creators shine. Every project is crafted with passion, precision, 
            and the power of female creativity.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { icon: Users, value: '500+', label: 'Happy Clients' },
              { icon: Star, value: '1000+', label: 'Projects Completed' },
              { icon: Award, value: '15+', label: 'Team Members' },
              { icon: Heart, value: '100%', label: 'Women-Led' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-3">
                  <stat.icon className="text-white" size={20} />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}