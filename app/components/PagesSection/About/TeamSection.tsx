import React from 'react';
import { Linkedin, Twitter, Instagram, MapPin } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Ayesha Khan',
      role: 'Creative Director & Founder',
      location: 'Karachi, Pakistan',
      image: '/images/team/ayesha.jpg',
      bio: 'Leading the creative vision with 8+ years in digital design',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Fatima Ahmed',
      role: 'Lead Motion Designer',
      location: 'Lahore, Pakistan',
      image: '/images/team/fatima.jpg',
      bio: 'Specializing in stunning animations and video graphics',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Zara Ali',
      role: 'Brand Identity Designer',
      location: 'Islamabad, Pakistan',
      image: '/images/team/zara.jpg',
      bio: 'Creating memorable brands and logo designs',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    },
    {
      name: 'Maria Hassan',
      role: 'UI/UX Designer',
      location: 'Multan, Pakistan',
      image: '/images/team/maria.jpg',
      bio: 'Crafting user-centered designs and interfaces',
      social: { linkedin: '#', twitter: '#', instagram: '#' }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900/30 via-purple-900/20 to-pink-900/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Amazing Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Talented women from across Pakistan, united by creativity and passion for excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative about-card-enhanced rounded-2xl p-6 text-center group-hover:border-purple-400/50 transition-all duration-300">
                {/* Profile Image */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-purple-400/50"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=8b5cf6&color=ffffff&size=96`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>
                
                {/* Member Info */}
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 font-medium mb-2">{member.role}</p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <MapPin className="text-gray-400" size={14} />
                  <span className="text-gray-400 text-sm">{member.location}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a href={member.social.linkedin} className="p-2 bg-white/10 rounded-full hover:bg-purple-600/50 transition-colors">
                    <Linkedin size={16} className="text-white" />
                  </a>
                  <a href={member.social.twitter} className="p-2 bg-white/10 rounded-full hover:bg-blue-600/50 transition-colors">
                    <Twitter size={16} className="text-white" />
                  </a>
                  <a href={member.social.instagram} className="p-2 bg-white/10 rounded-full hover:bg-pink-600/50 transition-colors">
                    <Instagram size={16} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="about-card-enhanced rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15+', label: 'Team Members', sublabel: 'Across Pakistan' },
              { value: '8+', label: 'Years Experience', sublabel: 'Average per member' },
              { value: '100%', label: 'Remote Work', sublabel: 'Flexible & efficient' },
              { value: '24/7', label: 'Dedication', sublabel: 'Passionate about craft' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-400 font-medium mb-1">{stat.label}</div>
                <div className="text-gray-400 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
