import React from 'react';
import { ArrowRight, Sparkles, Heart, Award, Users, Clock } from 'lucide-react';

interface WelcomeStepProps {
  onNext: () => void;
}

export function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="text-center space-y-8">
      {/* Welcome Header */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Welcome to Mascort</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Create Something
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Get a personalized quote for your creative project. Our talented team of women designers 
            and animators will bring your vision to life with professional quality and attention to detail.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {[
          {
            icon: Heart,
            title: 'Women-Led',
            description: 'Supporting female creativity',
            color: 'from-pink-500 to-rose-500'
          },
          {
            icon: Award,
            title: 'Premium Quality',
            description: 'Professional results',
            color: 'from-purple-500 to-indigo-500'
          },
          {
            icon: Clock,
            title: 'Fast Delivery',
            description: 'Quick turnaround',
            color: 'from-blue-500 to-cyan-500'
          },
          {
            icon: Users,
            title: '500+ Clients',
            description: 'Trusted worldwide',
            color: 'from-green-500 to-emerald-500'
          }
        ].map((feature, index) => (
          <div key={index} className="group relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity duration-300`}></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Overview */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-8">How It Works</h3>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              step: '1',
              title: 'Tell Us About You',
              description: 'Share your contact info and social media'
            },
            {
              step: '2',
              title: 'Project Details',
              description: 'Describe your vision and requirements'
            },
            {
              step: '3',
              title: 'Timeline & Budget',
              description: 'Choose your preferred timeline and budget'
            },
            {
              step: '4',
              title: 'Review & Submit',
              description: 'Confirm all details and submit'
            },
            {
              step: '5',
              title: 'Get Your Quote',
              description: 'Receive personalized quote within 24h'
            }
          ].map((item, index) => (
            <div key={index} className="text-center relative">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">{item.step}</span>
              </div>
              <h4 className="text-white font-medium mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
              
              {/* Connector Line */}
              {index < 4 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-purple-600/50 to-pink-600/50 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            'Stream Overlays',
            'YouTube Intros',
            'Custom Emotes',
            'Brand Design',
            'Video Production',
            'And More!'
          ].map((service, index) => (
            <div key={index} className="text-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <span className="text-white text-sm font-medium">{service}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-4xl text-purple-400 mb-4">"</div>
          <p className="text-xl text-gray-300 italic mb-6">
            "Working with Mascort was incredible! Their team's creativity and professionalism 
            exceeded all my expectations. The final designs were exactly what I envisioned."
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=8b5cf6&color=ffffff&size=48"
              alt="Sarah Johnson"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-white font-medium">Sarah Johnson</p>
              <p className="text-gray-400 text-sm">Content Creator, 50K+ followers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Time Estimate */}
      <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-center gap-4">
          <Clock className="text-blue-400" size={24} />
          <div>
            <p className="text-white font-medium">Takes only 3-5 minutes</p>
            <p className="text-gray-400 text-sm">Quick and easy process</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="pt-8">
        <button
          onClick={onNext}
          className="inline-flex items-center gap-3 px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Started Now
          <ArrowRight size={20} />
        </button>
        
        <p className="text-gray-400 text-sm mt-4">
          No commitment required • Free quote • 24h response time
        </p>
      </div>
    </div>
  );
}