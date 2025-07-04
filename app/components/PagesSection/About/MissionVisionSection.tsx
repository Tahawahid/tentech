import React from 'react';
import { Target, Eye, Lightbulb, Globe, Heart, Award } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-blue-900/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Driving change through creativity and empowering women in the digital creative industry
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative about-card-enhanced rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To provide world-class creative services while creating meaningful employment 
                opportunities for talented women in Pakistan. We believe in breaking barriers 
                and proving that exceptional work knows no geographical boundaries.
              </p>
              <div className="space-y-3">
                {[
                  'Deliver premium quality graphics and animations',
                  'Empower women through remote creative careers',
                  'Bridge the gap between talent and opportunity',
                  'Foster a supportive, inclusive work environment'
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative about-card-enhanced rounded-2xl p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-pink-400 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                To become the leading women-led creative studio globally, inspiring a new 
                generation of female creators and setting new standards for quality, 
                creativity, and social impact in the digital design industry.
              </p>
              <div className="space-y-3">
                {[
                  'Global recognition for Pakistani female talent',
                  'Inspire women worldwide to pursue creative careers',
                  'Set industry standards for remote creative work',
                  'Build a sustainable creative economy ecosystem'
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Lightbulb,
              title: 'Innovation',
              desc: 'Pushing creative boundaries with every project'
            },
            {
              icon: Heart,
              title: 'Empowerment',
              desc: 'Creating opportunities for women to thrive'
            },
            {
              icon: Globe,
              title: 'Global Impact',
              desc: 'Connecting Pakistan with the world through creativity'
            },
            {
              icon: Award,
              title: 'Excellence',
              desc: 'Delivering nothing less than exceptional quality'
            }
          ].map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
              <p className="text-gray-400">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}