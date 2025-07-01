import React from 'react';
import { Heart, Mail, MessageCircle, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mascort
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering content creators with stunning visuals. A 100% women-led creative studio from Pakistan, 
              serving creators worldwide with premium design solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-red-400" />
              <span>by women for creators</span>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Stream Overlays</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Custom Emotes</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Graphics Design</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Brand Identity</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@mascort.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail size={16} />
                  hello@mascort.com
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                  <MessageCircle size={16} />
                  Discord Support
                </a>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mascort. All rights reserved. | Proudly based in Pakistan 🇵🇰</p>
        </div>
      </div>
    </footer>
  );
}