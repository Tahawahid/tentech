import React from 'react';

export function CompanyToolsSection() {
  const tools = [
    { name: 'Adobe After Effects', category: 'Animation', level: 'Expert' },
    { name: 'Adobe Photoshop', category: 'Design', level: 'Expert' },
    { name: 'Adobe Illustrator', category: 'Vector Graphics', level: 'Expert' },
    { name: 'Figma', category: 'UI/UX Design', level: 'Expert' },
    { name: 'Cinema 4D', category: '3D Modeling', level: 'Advanced' },
    { name: 'Premiere Pro', category: 'Video Editing', level: 'Expert' },
    { name: 'Blender', category: '3D Animation', level: 'Advanced' },
    { name: 'DaVinci Resolve', category: 'Color Grading', level: 'Advanced' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900/30 via-blue-900/20 to-purple-900/30 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-56 h-56 bg-indigo-400/15 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Creative Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Industry-leading tools and software mastered by our talented team
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="about-card-enhanced rounded-xl p-4 text-center hover:border-purple-400/50 transition-all duration-300">
              <h3 className="text-white font-semibold mb-2">{tool.name}</h3>
              <p className="text-purple-400 text-sm mb-1">{tool.category}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                tool.level === 'Expert' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
              }`}>
                {tool.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}