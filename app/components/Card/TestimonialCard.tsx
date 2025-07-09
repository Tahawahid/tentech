import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  platform: string;
  content: string;
  rating: number;
}

export function TestimonialCard({ name, role, platform, content, rating }: TestimonialCardProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} className="text-yellow-400 fill-current" size={16} />
        ))}
      </div>
      
      {/* Quote Icon */}
      <Quote className="text-purple-400 mb-4" size={24} />
      
      {/* Content */}
      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">{content}</p>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-lg">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role} • {platform}</p>
        </div>
      </div>
    </div>
  );
}
