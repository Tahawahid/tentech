import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../Button/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mascort
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
            <a href="#services" className="text-white hover:text-purple-400 transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
            <a href="#testimonials" className="text-white hover:text-purple-400 transition-colors">Testimonials</a>
            <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button variant="primary" size="sm">Get Quote</Button>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              <a href="#home" className="text-white hover:text-purple-400 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-purple-400 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a>
              <a href="#testimonials" className="text-white hover:text-purple-400 transition-colors">Testimonials</a>
              <a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a>
              <Button variant="primary" size="sm" className="w-fit">Get Quote</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}