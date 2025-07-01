import React from 'react';
import { X, ExternalLink, Calendar, Clock, Star, Quote } from 'lucide-react';
import type { PortfolioProject } from '../../utils/portfolioData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gray-900 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <p className="text-purple-400">{project.client}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="text-white" size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {project.images.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl"
              />
            ))}
          </div>
          
          {/* Project Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
              </div>
              
              {/* Services */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Services Provided</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              {project.technologies && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Results */}
              {project.results && (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3">Results Achieved</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="text-purple-400 mr-2" size={20} />
                    <div className="flex">
                      {[...Array(project.testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 italic mb-4">"{project.testimonial.text}"</p>
                  <div>
                    <p className="text-white font-medium">{project.testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{project.testimonial.role}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Details */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="mr-3 text-purple-400" size={16} />
                    <span className="text-sm">
                      {new Date(project.completionDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="mr-3 text-purple-400" size={16} />
                    <span className="text-sm">{project.duration}</span>
                  </div>
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-2">Interested in Similar Work?</h3>
                <p className="text-gray-300 text-sm mb-4">Let's discuss your project requirements</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all text-sm font-medium"
                >
                  Start Your Project
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}