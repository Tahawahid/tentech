import React from 'react';
import { Briefcase, Award, Users, Clock } from 'lucide-react';

export function PortfolioHero() {
  const stats = [
    {
      icon: Briefcase,
      number: "150+",
      label: "Projects Completed"
    },
    {
      icon: Users,
      number: "50+",
      label: "Happy Clients"
    },
    {
      icon: Award,
      number: "25+",
      label: "Awards Won"
    },
    {
      icon: Clock,
      number: "3+",
      label: "Years Experience"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing our finest work in graphics design, video production, and digital content creation
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From streaming overlays that captivate audiences to brand identities that drive business growth, 
            explore the creative solutions we've delivered for clients worldwide.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl mb-4 group-hover:from-purple-600/30 group-hover:to-pink-600/30 transition-all duration-300">
                <stat.icon className="text-purple-400" size={32} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
