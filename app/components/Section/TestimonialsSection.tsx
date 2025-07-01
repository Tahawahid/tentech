import React from 'react';
import { TestimonialCard } from '../Card/TestimonialCard';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex StreamKing",
      role: "Twitch Partner",
      platform: "Twitch",
      content: "Mascort transformed my stream completely! The custom overlays are absolutely stunning and my viewer engagement has increased by 40%. The team is professional and delivers on time every single time.",
      rating: 5
    },
    {
      name: "Sarah GameQueen",
      role: "Content Creator",
      platform: "YouTube",
      content: "Working with an all-women team was incredible. They understood exactly what I wanted for my gaming channel. The animated intro they created gets compliments from viewers daily!",
      rating: 5
    },
    {
      name: "Mike TechReviews",
      role: "Tech Reviewer",
      platform: "YouTube",
      content: "The quality of work from Mascort is unmatched. From thumbnails to channel art, everything is perfectly crafted. Their attention to detail is what sets them apart from others.",
      rating: 5
    },
    {
      name: "Luna MusicStreams",
      role: "Music Producer",
      platform: "Twitch",
      content: "Best investment I made for my streaming career. The custom emotes they designed are now iconic in my community. The whole branding package elevated my professional image.",
      rating: 5
    },
    {
      name: "David FitnessGuru",
      role: "Fitness Influencer",
      platform: "Instagram",
      content: "Mascort helped me establish a strong visual identity across all platforms. The consistency in design and the modern aesthetic perfectly represents my brand values.",
      rating: 5
    },
    {
      name: "Emma ArtStream",
      role: "Digital Artist",
      platform: "Twitch",
      content: "As a fellow artist, I appreciate the creativity and skill that goes into their work. The overlays they created for my art streams are both functional and beautiful.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - see what content creators around the world are saying about our work
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}