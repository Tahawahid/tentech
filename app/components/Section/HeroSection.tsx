import React from 'react';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../Button/Button';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8 border border-white/20">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-white text-sm font-medium">Women-Powered Creative Studio from Pakistan</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="text-white">Content Game</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional overlays, animated intros, custom emotes, and stunning graphics designed specifically for 
            <span className="text-purple-400 font-semibold"> Twitch streamers</span>, 
            <span className="text-pink-400 font-semibold"> YouTubers</span>, and 
            <span className="text-purple-400 font-semibold"> content creators</span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="primary" size="lg" icon={ArrowRight} iconPosition="right">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg" icon={Play}>
              View Our Work
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Happy Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Women Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
