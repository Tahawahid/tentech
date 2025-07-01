import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Women</span> in Creative Tech
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Based in Pakistan, Mascort is a 100% women-led creative studio passionate about empowering content creators 
              worldwide. We understand the unique challenges creators face, and we're here to provide the visual excellence 
              that sets you apart.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">All-Women Team</h3>
                  <p className="text-gray-400">Talented female artists and designers</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Quality Focused</h3>
                  <p className="text-gray-400">Premium designs that exceed expectations</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Global Reach</h3>
                  <p className="text-gray-400">Serving creators worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-lg border border-white/10">
              <div className="text-center">
                <Heart className="text-pink-400 mx-auto mb-6" size={64} />
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower content creators with stunning visuals while breaking barriers for women in the creative 
                  technology industry. Every project we deliver represents our commitment to excellence and equality.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}