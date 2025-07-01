import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  platform: string;
  content: string;
  rating: number;
  avatar?: string;
}

export function TestimonialCard({ name, role, platform, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'} 
          />
        ))}
      </div>
      
      <p className="text-gray-300 mb-6 leading-relaxed italic">"{content}"</p>
      
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
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