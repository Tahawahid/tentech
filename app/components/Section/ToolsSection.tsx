import React from 'react';
import { Palette, Zap, Camera, Video, Layers, Pen } from 'lucide-react';

export function ToolsSection() {
  const tools = [
    { name: 'Adobe Illustrator', icon: Palette, category: 'Vector Design' },
    { name: 'Adobe Photoshop', icon: Layers, category: 'Photo Editing' },
    { name: 'Adobe After Effects', icon: Video, category: 'Motion Graphics' },
    { name: 'Adobe Premiere Pro', icon: Camera, category: 'Video Editing' },
    { name: 'Figma', icon: Pen, category: 'UI Design' },
    { name: 'Cinema 4D', icon: Zap, category: '3D Animation' },
    { name: 'Blender', icon: Layers, category: '3D Modeling' },
    { name: 'Adobe XD', icon: Pen, category: 'UX Design' },
    { name: 'DaVinci Resolve', icon: Video, category: 'Color Grading' },
    { name: 'Procreate', icon: Palette, category: 'Digital Art' },
    { name: 'Adobe InDesign', icon: Layers, category: 'Layout Design' },
    { name: 'OBS Studio', icon: Camera, category: 'Streaming' }
  ];

  // Duplicate tools for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="py-16 bg-gradient-to-r from-black via-purple-900/10 to-black overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tools & Software</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We use industry-leading software and cutting-edge tools to deliver exceptional results for every project
          </p>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* Scrolling Content */}
        <div className="flex animate-marquee whitespace-nowrap">
          {duplicatedTools.map((tool, index) => (
            <div 
              key={`${tool.name}-${index}`}
              className="inline-flex items-center mx-6 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group min-w-fit"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                  <tool.icon size={24} className="text-purple-300 group-hover:text-purple-200" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional Row in Opposite Direction */}
      <div className="mt-8 relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        <div className="flex animate-marquee-reverse whitespace-nowrap">
          {duplicatedTools.reverse().map((tool, index) => (
            <div 
              key={`reverse-${tool.name}-${index}`}
              className="inline-flex items-center mx-6 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 hover:border-pink-400/30 transition-all duration-300 group min-w-fit"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-colors">
                  <tool.icon size={24} className="text-pink-300 group-hover:text-pink-200" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{tool.name}</h3>
                  <p className="text-gray-400 text-sm">{tool.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}