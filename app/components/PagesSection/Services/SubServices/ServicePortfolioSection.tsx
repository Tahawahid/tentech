import React, { useState } from 'react';
import { Eye, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ServiceData } from '../../../../utils/serviceData';

interface ServicePortfolioSectionProps {
  service: ServiceData;
}

export function ServicePortfolioSection({ service }: ServicePortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (project: any, index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + service.portfolio.length) % service.portfolio.length
      : (currentIndex + 1) % service.portfolio.length;
    
    setCurrentIndex(newIndex);
    setSelectedProject(service.portfolio[newIndex]);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-pink-900/30 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-400/15 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See examples of our work in {service.title.toLowerCase()}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.portfolio.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
              onClick={() => openModal(project, index)}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = `https://via.placeholder.com/400x300/8b5cf6/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="text-white" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-600/20 backdrop-blur-sm rounded-full border border-purple-400/30 mb-3">
                  <span className="text-xs text-purple-300">{project.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <p className="text-purple-400">{selectedProject.category}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="text-white" size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[60vh] object-contain bg-black"
                />

                {/* Navigation Buttons */}
                {service.portfolio.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateProject('prev')}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <ChevronLeft className="text-white" size={24} />
                    </button>
                    <button
                      onClick={() => navigateProject('next')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                    >
                      <ChevronRight className="text-white" size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 mb-2">{selectedProject.description}</p>
                    <div className="text-sm text-gray-400">
                                            Project {currentIndex + 1} of {service.portfolio.length}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Created by our talented women team 💜
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
