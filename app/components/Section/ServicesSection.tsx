import React from 'react';
import { Monitor, Video, Palette, FileImage, Zap, Heart } from 'lucide-react';
import { ServiceCard } from '../Card/ServiceCard';

export function ServicesSection() {
  const services = [
    {
      id: "stream-overlays",
      title: "Stream Overlays",
      description: "Custom overlays that make your stream stand out with professional animations and your unique branding.",
      icon: Monitor,
      features: ["Custom animated overlays", "Chat box designs", "Alert animations", "Starting/BRB screens"]
    },
    {
      id: "video-production",
      title: "Video Production",
      description: "Engaging intros, outros, and promotional videos that captivate your audience from the first second.",
      icon: Video,
      features: ["Animated intros & outros", "Channel trailers", "Highlight reels", "Social media videos"]
    },
    {
      id: "custom-emotes",
      title: "Custom Emotes",
      description: "Expressive emotes that build community and engagement across Twitch, Discord, and YouTube.",
      icon: Heart,
      features: ["Twitch emotes", "Discord stickers", "Animated emotes", "Sub badges & bits"]
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      description: "Professional graphics for all your branding needs, from business cards to social media posts.",
      icon: Palette,
      features: ["Logo design", "Business cards", "Social media graphics", "Thumbnail designs"]
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      description: "Complete branding solutions that establish your unique presence across all platforms.",
      icon: Zap,
      features: ["Brand guidelines", "Color schemes", "Typography selection", "Style consistency"]
    },
    {
      id: "marketing-materials",
      title: "Marketing Materials",
      description: "Eye-catching flyers, banners, and promotional materials to grow your audience.",
      icon: FileImage,
      features: ["Event flyers", "Social banners", "Promotional graphics", "Merchandise design"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive creative solutions designed to elevate your content and grow your audience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service}>
              <a
                href={`/services/${service.id}`}
                className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 inline-block text-center"
              >
                Learn More
              </a>
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
