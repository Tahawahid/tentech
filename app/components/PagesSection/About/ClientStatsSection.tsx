import React from 'react';
import { Users, Star, Award, TrendingUp, Globe, Clock, Heart, Zap } from 'lucide-react';

export function ClientStatsSection() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', desc: 'Worldwide' },
    { icon: Star, value: '1000+', label: 'Projects Completed', desc: 'With excellence' },
    { icon: Award, value: '98%', label: 'Client Satisfaction', desc: 'Rating' },
    { icon: TrendingUp, value: '300%', label: 'Growth Rate', desc: 'Year over year' },
    { icon: Globe, value: '25+', label: 'Countries Served', desc: 'Global reach' },
    { icon: Clock, value: '48hr', label: 'Average Delivery', desc: 'Lightning fast' },
    { icon: Heart, value: '100%', label: 'Women-Led', desc: 'Proudly female' },
    { icon: Zap, value: '24/7', label: 'Support', desc: 'Always available' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-900/30 via-purple-900/20 to-indigo-900/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Numbers that speak to our commitment to excellence and client success
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative about-card-enhanced rounded-xl p-6 text-center group-hover:border-purple-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-400 font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonial Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl text-purple-400 mb-4">"</div>
            <p className="text-xl text-gray-300 italic mb-6">
              "Working with Mascort has been incredible. Their team's creativity and dedication 
              is unmatched. As a fellow advocate for women empowerment, I'm proud to support 
              their mission while getting world-class results."
            </p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={20} />
              ))}
            </div>
            <p className="text-purple-400 font-medium">Sarah Johnson, Content Creator</p>
            <p className="text-gray-400 text-sm">500K+ Twitch Followers</p>
          </div>
        </div>
      </div>
    </section>
  );
}