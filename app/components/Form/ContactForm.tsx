import React from 'react';
import { Send, User, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../Button/Button';

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Start Your Project?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Get your free quote today!
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="relative">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  <User size={16} className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div className="relative">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="service" className="block text-white font-medium mb-2">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 transition-colors"
                required
              >
                <option value="" className="bg-gray-800">Select a service</option>
                <option value="overlays" className="bg-gray-800">Stream Overlays</option>
                <option value="video" className="bg-gray-800">Video Production</option>
                <option value="emotes" className="bg-gray-800">Custom Emotes</option>
                <option value="graphics" className="bg-gray-800">Graphics Design</option>
                <option value="branding" className="bg-gray-800">Brand Identity</option>
                <option value="marketing" className="bg-gray-800">Marketing Materials</option>
                <option value="package" className="bg-gray-800">Complete Package</option>
              </select>
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-white font-medium mb-2">
                <MessageSquare size={16} className="inline mr-2" />
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                placeholder="Tell us about your project, your vision, and any specific requirements..."
                required
              />
            </div>
            
            <Button 
              variant="primary" 
              size="lg" 
              icon={Send} 
              iconPosition="right"
              className="w-full"
            >
              Send Message & Get Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}