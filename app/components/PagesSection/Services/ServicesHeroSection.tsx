import React from 'react';
import { Star, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '../../Button/Button';
import { GetStartedButton } from '../../Button/GetStartedButton';

export function ServicesHeroSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-purple-900/30 via-pink-500/20 to-blue-600/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-8">
            <Award className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Premium Creative Services</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Graphics</span> & 
            <br />Animation Services
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Elevate your content with our comprehensive range of design services. 
            From Twitch overlays to brand identity, we bring your creative vision to life.
          </p>

          {/* Stats Row */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">200+</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <div className="text-gray-400">5.0 Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">24h</div>
              <div className="text-gray-400">Response Time</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GetStartedButton variant="primary" size="lg">
              Explore Our Services
            </GetStartedButton>
            <Button variant="outline" size="lg" icon={ArrowRight}>
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
