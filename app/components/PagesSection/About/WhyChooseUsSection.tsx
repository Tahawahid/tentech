import React from 'react';
import { Shield, Clock, Heart, Award, Users, Zap } from 'lucide-react';

export function WhyChooseUsSection() {
  const reasons = [
    {
      icon: Heart,
      title: 'Women Empowerment',
      description: 'Supporting female talent while getting exceptional creative work',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every project crafted with meticulous attention to detail',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Consistent communication and project management',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work with you to bring your vision to life',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Zap,
      title: 'Innovative Solutions',
      description: 'Creative solutions that make your content stand out',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/30 via-pink-900/20 to-orange-900/30 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
<div className="absolute top-0 right-1/3 w-48 h-48 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mascort?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            More than just a creative studio - we're your partners in success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} opacity-5 rounded-2xl blur-xl group-hover:opacity-10 group-hover:blur-2xl transition-all duration-300`}></div>
              <div className="relative about-card-enhanced rounded-2xl p-8 group-hover:border-white/20 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of content creators who trust Mascort for their creative needs
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
